import React, { Component } from 'react';
import todolist from './todolist.module.scss'


export default class Todolist extends Component {
  render() {
    return (
      <div>
        <span className={todolist.span}>hello tospan</span>
      </div>
    )
  }
}
