import React, {Component} from 'react';


const Member = (props) =>{
    return(
        <tr>
            <td>{props.name}</td>
            <td>{props.rank}</td>
            <td>{props.section}</td>
            <td>data</td>
        </tr>
    )

}

export default Member;