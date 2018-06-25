import React, { Component } from 'react';
import { ScheduleBoard, Dashboard } from '.';
import db from './../resources/db.json';

class App extends Component {
  state = {
    employees: []
  };
  render() {
    return <div>
      <Dashboard/>
      <ScheduleBoard db={db}/>
    </div>;
  }
}

export default App;
 