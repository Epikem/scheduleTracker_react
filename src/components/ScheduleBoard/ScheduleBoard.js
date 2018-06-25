import React from 'react';
import './ScheduleBoard.css';

const ScheduleBoard = ({ db, children }) => {
    console.log(db);
    return (
        <div className='schedule-board'>
            <table className='schedule-table'>
                <colgroup>
                    <col className="col1"/>
                    <col className="col1"/>
                    <col className="col1"/>
                    <col className="col2"/>
                    <col className="col2"/>
                    <col className="col2"/>
                    <col className="col2"/>
                    <col className="col2"/>
                    <col className="col2"/>
                    <col className="col2"/>
                </colgroup> 
                <tbody>
                    <tr className='header'>
                        <th>Name</th>
                        <th>Rank</th>
                        <th>Section</th>
                        <th>Sun</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>Rank</td>
                        <td>Section</td>
                        <td>Sun</td>
                        <td>Mon</td>
                        <td>Tue</td>
                        <td>Wed</td>
                        <td>tdu</td>
                        <td>Fri</td>
                        <td>Sat</td>
                    </tr>
                    {children}
                </tbody>
            </table>
        </div>
    );
};

export default ScheduleBoard;