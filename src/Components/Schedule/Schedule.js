import React, { Component } from "react";
import Member from "../Member/Member";
import data from "../../data.json";
import "./Schedule.css";

class Schedule extends Component {
 
  state = {
    scheduleData: data,
    sortBy:'name',
    sortOrder : 1
  };

  sortHandler = event => {
    let currentState = {...this.state}
    currentState.sortOrder = -currentState.sortOrder;
    currentState.sortBy = event.target.className;
    console.log(event.target)
    // currentState.sortBy = event.target.firstChild.nodeValue.toLowerCase();
    currentState.scheduleData.sort((a, b) => {
      return currentState.sortOrder*a[currentState.sortBy].localeCompare(b[currentState.sortBy]);
    });
    
    this.setState({
      scheduleData: currentState.scheduleData,
      sortBy : currentState.sortBy,
      sortOrder : currentState.sortOrder
    });
    console.log(this.state)
  };

  render() {
    let scheduleData = this.state.scheduleData.map((person, index) => {
      return (
        <Member
          index={index}
          key={person.id}
          name={person.name}
          rank={person.rank}
          section={person.section}
        />
      );
    });

    return (
      <div>
        <table className="centered">
          <thead>
            <tr className="blue lighten-4">
              <th className="name" onClick={this.sortHandler}>Name</th>
              <th className="rank" onClick={this.sortHandler}>Rank</th>
              <th className="section" onClick={this.sortHandler}>Section</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
          </thead>
          {scheduleData}
        </table>
      </div>
    );
  }
}

export default Schedule;
