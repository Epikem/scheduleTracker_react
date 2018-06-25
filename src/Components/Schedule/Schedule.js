import React, { Component } from "react";
import Member from "../Member/Member";
import data from "../../data.json";
import "./Schedule.css";

class Schedule extends Component {
  state = {
    scheduleData: data
  };

  sortHandler = event => {
    let sortedData = data.sort((a, b) => {
      return a[event.target.firstChild.nodeValue.toLowerCase()].localeCompare(
        b[event.target.firstChild.nodeValue.toLowerCase()]
      );
    });
    console.log(sortedData);
    this.setState({
      scheduleData: sortedData
    });
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
              <th onClick={this.sortHandler}>Name</th>
              <th onClick={this.sortHandler}>Rank</th>
              <th onClick={this.sortHandler}>Section</th>
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
