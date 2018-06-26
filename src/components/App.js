import React, { Component } from 'react';
import { ScheduleBoard, Dashboard } from '.';
import db from './../resources/db.json';

class App extends Component {
  state = {
    week: 'week-01',
    employees: []
  };

  handleWeekChange = (event) => {
    this.setState({value: event.target.value}, ()=>{console.log(this.state)});
  }

  render() {
    return <div>
      <Dashboard handleWeekChange={this.handleWeekChange}></Dashboard>
      <ScheduleBoard db={db} week={this.state.week}/>
    </div>;
  }
}

export default App;
 