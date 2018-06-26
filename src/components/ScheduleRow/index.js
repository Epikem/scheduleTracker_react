import React from 'react';

const ScheduleRow = (props) => {
    const week = props.week;
    const {name, rank, section, schedule} = props.children;
    
    return (
        <tr>
            <td>{name}</td>            
            <td>{rank}</td>
            <td>{section}</td>
            <td>{schedule[week].mon}</td>
            <td>{schedule[week].tue}</td>
            <td>{schedule[week].wed}</td>
            <td>{schedule[week].thu}</td>
            <td>{schedule[week].fri}</td>
            <td>{schedule[week].sat}</td>
            <td>{schedule[week].sun}</td>
        </tr>
    );
}
export default ScheduleRow;