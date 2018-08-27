import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Table } from 'semantic-ui-react'
import Sidebar from './Sidebar'
import EventTable from './EventTable'

class App extends Component {
  render() {
    return (
      <div className="App">

      <div class="ui internally celled grid">
        <div class="row">
          <div class="three wide column">
          <Sidebar/>

          </div>
          <div class="ten wide column">
            <p></p>
          </div>
          <div class="three wide column">
          </div>
        </div>
        <div class="row">
          <div class="three wide column">

          </div>
          <div class="ten wide column">
          <EventTable/>
          </div>
          <div class="three wide column">

          </div>
        </div>
      </div>



      </div>
    );
  }
}

export default App;
