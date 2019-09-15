/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'
import './index.less'
export default class Item extends Component {
  render() {
    let {login, avatar_url, html_url} = this.props
    return (
      <div className="card">
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          <img
            alt="avatar"
            src={avatar_url}
            style={{ width: "100px" }}
          />
        </a>
        <p className="card-text">{login}</p>
      </div>
    );
  }
}
