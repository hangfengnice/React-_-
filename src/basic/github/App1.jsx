import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  state = {
    isLoading: true,
    repoName: "",
    repoUrl: "",
    errMsg: ""
  };
  keyWord = "r";
  async componentDidMount() {
    const url = `https://api.github.com/search/repositories?q=${this.keyWord}&sort=stars`;
    try {
      let response = await axios(url);
      let repoInfo = response.data.items[0]
      console.log(response);
      this.setState({
        isLoading: false,
        repoName: repoInfo.name,
        repoUrl: repoInfo.html_url,
        errMsg: ""
      });
    } catch (error) {
      this.setState({
        isLoading: false,
        repoName: '',
        repoUrl: '',
        errMsg: error.toString()
      });
    }
  }
  render() {
    let { isLoading, repoName, repoUrl, errMsg } = this.state;
    if (isLoading) {
      return <h3>Loading...</h3>
    } else if (errMsg) {
      return <h3>{errMsg}</h3>
    }else {
      return <div>github 关键字{this.keyWord} 点赞最多是 <a href={repoUrl}>{repoName}</a></div>;
    } 
  }
}
