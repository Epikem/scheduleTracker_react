import React, {Component} from 'react';
import './Dashboard.css';

class Dashboard extends Component{
  state={
    value:'select'
  }
  getInitialState = () => ({value:'select'})
  handleChange = (event) => {
    this.setState({value: event.target.value}, ()=>{console.log(this.state)});
  }
  
  render(){
    return (
      <div className='dashboard'>
        <div>
            This is dashboard with materialize-css
        </div>

        <div className="input-field col s12 week-select">
          <select onChange={this.handleChange} value={this.state.value}>
            <option value="" disabled>Weeks</option>
            <option value="week-01">Week 1</option>
            <option value="week-02">Week 2</option>
            <option value="week-03">Week 3</option>
          </select>
        </div>
      </div>
    );
  }

};

export default Dashboard;


