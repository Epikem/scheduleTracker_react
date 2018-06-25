import React, { Component } from 'react';
import { ScheduleBoard, Dashboard } from '.';
import db from './../resources/db.json';

class App extends Component {
  state = {
    week: 'week-01',
    employees: []
  };
  render() {
    // TODO: sync Dashboard and ScheduleBoard's week state
    return <div>
      <Dashboard/>
      <ScheduleBoard db={db} week={this.state.week}/>
    </div>;
  }
}

export default App;
 