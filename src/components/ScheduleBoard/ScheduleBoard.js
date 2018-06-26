import React from 'react';
import './ScheduleBoard.css';
import ScheduleRow from '../ScheduleRow';

class ScheduleBoard extends React.Component{ 
    constructor(props){
        super(props);
    }
    state = {
        sortKey:'name',
        sortOrder : 1,
        scheduleData: this.props.db
    } 
    withSortDropdown = (text)=>{
        if(this.state.sortKey === text.toLowerCase() && this.state.sortOrder===1){
            return <p>{text}<i className="material-icons">arrow_drop_down</i></p>
        }
        else if(this.state.sortKey === text.toLowerCase() && this.state.sortOrder===-1){
            return <p>{text}<i className="material-icons">arrow_drop_up</i></p>
        }
        else return <p>{text}</p>
    }
    sortHandler = event=>{
        let currentState = {...this.state}
        currentState.sortOrder = -currentState.sortOrder;
        currentState.sortKey = event.currentTarget.className;
        // currentState.sortKey = event.target.firstChild.nodeValue.toLowerCase();
        currentState.scheduleData.sort((a, b) => {
        return currentState.sortOrder*a[currentState.sortKey].localeCompare(b[currentState.sortKey]);
        });
        
        this.setState({
            scheduleData: currentState.scheduleData,
            sortKey : currentState.sortKey,
            sortOrder : currentState.sortOrder
        });
    }
    render(){
        return (
            <div className='schedule-board'>
                <table className='schedule-table highlight centered' >
                    <colgroup>
                        <col className='col1' span='3'/>
                        <col className='col2' span='7'/>
                    </colgroup> 
                    <thead>
                        <tr className='header green lighten-5'>
                            <th className='name' onClick={this.sortHandler}>{this.withSortDropdown('Name')}</th>
                            <th className='rank' onClick={this.sortHandler}>{this.withSortDropdown('Rank')}</th>
                            <th className='section' onClick={this.sortHandler}>{this.withSortDropdown('Section')}</th>
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thu</th>
                            <th>Fri</th>
                            <th>Sat</th>
                            <th>Sun</th>
                        </tr> 
                    </thead>
                    <tbody>
                        {this.props.db.map((rowData)=>{return <ScheduleRow key={rowData.index} week={this.props.week}>{rowData}</ScheduleRow>})}
                    </tbody>
                </table>
            </div>
        );
    }
};

export default ScheduleBoard;