import React from 'react';
import './ScheduleBoard.css';
import ScheduleRow from '../ScheduleRow';
}
const ScheduleBoard = ({ db, week }) => {
    return (
        <div className='schedule-board'>
            <table className='schedule-table highlight centered' >
                <colgroup>
                    <col className='col1' span='3'/>
                    <col className='col2' span='7'/>
                </colgroup> 
                <thead>
                    <tr className='header green lighten-5'>
                        <th>Name</th>
                        <th>Rank</th>
                        <th>Section</th>
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
                    {db.map((rowData)=>{return <ScheduleRow key={rowData.index} week={week}>{rowData}</ScheduleRow>})}
                </tbody>
            </table>
        </div>
    );
};

export default ScheduleBoard;