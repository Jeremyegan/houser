import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import House from '../House/House'
import axios from 'axios';

export default class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            houses: []
        }


    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/houses').then(res => {
            this.setState({ 
                houses: res.data 
            })
        }).catch(err => console.log('Could not retrieve houses', err))
    }

    
 
    

    render() {
        let houses = this.state.houses.map((houses, i) => (
            <Link key={ i } to={`/houses${houses}`}>
            
            </Link>
        ))
        return (
            <div className="container"><h1>Dashboard</h1>
                <div className="display-houses">
                </div>
                <House />
                { houses }
                <Link to="/wizard"><button className="add-btn">Add New Property</button></Link>
            </div>
        )
    }
}