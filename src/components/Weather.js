import React from 'react';

const axios = require('axios');
const key = process.env.key;

require('dotenv').config({
    path: './key.env'
});

class GetWeather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: '',
            country: '',
            temperature: ''
        }
    }

    getWeatherAPI = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.city.value;
    }

    render() {
        <div>

        </div>
    }
}

    
export default GetWeather;