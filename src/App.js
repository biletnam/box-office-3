import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Table } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App" max-width="600px">
<table max-width="600px" class="ui celled table">
  <thead>
    <tr><th>Header</th>
    <th>Header</th>
    <th>Header</th>
  </tr></thead>
  <tbody>
    <tr>
      <td>
        <div class="ui ribbon label">Movie One</div>
        Movie Title
      </td>
      <td>Description</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>Movie Two</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><th colspan="3">
      <div class="ui right floated pagination menu">
        <a class="icon item">
          <i class="left chevron icon"></i>
        </a>
        <a class="item">1</a>
        <a class="item">2</a>
        <a class="item">3</a>
        <a class="item">4</a>
        <a class="icon item">
          <i class="right chevron icon"></i>
        </a>
      </div>
    </th>
  </tr></tfoot>
</table>
      </div>
    );
  }
}

export default App;
