import React, {Component} from 'react';
import './Member.css'


const Member = (props) =>{

    return(
        <tr className={props.index%2!==0?"grey lighten-2":""}>
            <td className="center">{props.name}</td>
            <td className="center">{props.rank}</td>
            <td className="center">{props.section}</td>
            <td className="center">data</td>
        </tr>
    )

}

export default Member;