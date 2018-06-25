import React, {Component} from 'react'
import Member from '../Member/Member'
import data from '../../data.json'
import '../../../node_modules/materialize-css/dist/css/materialize.css'
import 'materialize-css'

class Schedule extends Component{

    state ={
        scheduleData : data
    }
    
    render(){
        let scheduleData = this.state.scheduleData.map(person=>{
            return <Member key = {person.id} name = {person.name} rank = {person.rank} section = {person.rank}/>
        })

    return (
        <table className='highlight'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Rank</th>
                    <th>Section</th>
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
    )
    }
}

export default Schedule