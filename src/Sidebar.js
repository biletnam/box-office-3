import React, { Component } from 'react';
import './App.css';
import { Button, Table } from 'semantic-ui-react'

class Sidebar extends Component {
  render() {
    return (
      <div>
      <div class="ui sidebar visible inverted vertical menu">
        <a class="item">
          1
        </a>
        <a class="item">
          2
        </a>
        <a class="item">
          3
        </a>
      </div>
      <div class="pusher">
      </div>
      </div>
    );
  }
}

export default Sidebar;
