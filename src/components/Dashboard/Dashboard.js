import React, {Component} from 'react';
import './Dashboard.css';
import 'materialize-css/dist/css/materialize.css';
import M from 'materialize-css/dist/js/materialize';

class Dashboard extends Component{
    
    constructor(props){
        super(props);
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems);
        });
    }
    render(){
        return (
            <div className='dashboard'>
                <div>
                    This is dashboard with materialize-css
                </div>

                <div className="input-field col s12 week-select">
                    <select>
                    <option value="" disabled selected>Weeks</option>
                    <option value="1">Week 1</option>
                    <option value="2">Week 2</option>
                    <option value="3">Week 3</option>
                    </select>
                </div>
            </div>
        );
    }

};

export default Dashboard;


