import React, { Component } from 'react';
import { ScheduleBoard, Dashboard, DashboardWithComponent } from '.';
import db from './../resources/db.json';

class App extends Component {
  state = {
    employees: []
  };
  render() {
    return <div>
      <Dashboard/>
      <ScheduleBoard/>
      <DashboardWithComponent/>
    </div>;
  }
}

export default App;
 