import React from 'react';
import '../styles/App.css';
import API from '../utility/API';
// const classes = require('classnames');

export default class App extends React.Component {
  async test() {
    const response = await API.test('test') || [];
    console.log(response);
  }

  render() {
    return (
      <div onClick={this.test}>Hello, World</div>
    );
  }
}

