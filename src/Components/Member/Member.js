import React, {Component} from 'react';
import './Member.css'


const Member = (props) =>{

    return(
        <tr>
            <td className="center">{props.name}</td>
            <td className="center">{props.rank}</td>
            <td className="center">{props.section}</td>
            <td colspan="7" className="center">data</td>
        </tr>
    )

}

export default Member;