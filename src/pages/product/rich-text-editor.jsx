import React, { Component } from "react";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import PropTypes from 'prop-types'
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default class RichTextEditor extends Component {
  static propTypes = {
    detail: PropTypes.string
  }
  state = {
    editorState: EditorState.createEmpty()
  };

  onEditorStateChange = editorState => {
    console.log('-----');
    this.setState({
      editorState
    });
  };

 uploadImageCallBack = (file) => {
  return new Promise(
    (resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', '/manage/img/upload');
      xhr.setRequestHeader('Authorization', 'Client-ID XXXXX');
      const data = new FormData();
      data.append('image', file);
      xhr.send(data);
      xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      });
      xhr.addEventListener('error', () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    }
  );
}

  getDetail = () => draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))

  UNSAFE_componentWillMount() {
    const detail = this.props.detail
    if(detail) {
      const contentBlock = htmlToDraft(detail);
      const contentState = ContentState.createFromBlockArray(
          contentBlock.contentBlocks
        );
      const editorState = EditorState.createWithContent(contentState);

      this.setState = {
          editorState
        };

    }
  }
  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Editor
          editorState={editorState}
          editorStyle={{ height: 200, border: "1px solid #000", padding: 10 }}
          onEditorStateChange={this.onEditorStateChange}
          toolbar={{

            image: {
              uploadCallback: this.uploadImageCallBack,
              alt: { present: true, mandatory: true }
            }
          }}
        />
        {/* <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        /> */}
      </div>
    );
  }
}
