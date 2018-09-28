import React from 'react';

const axios = require('axios');
const key = process.env.key;

require('dotenv').config({path: './key.env'});

class GetWeather extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            latitude: '',
            longitude: '',
            temparature: ''
        }

        this.getLocation = this.getLocation.bind(this);
    }

    

    componentDidMount() {
        this.getLocation()
    }



    getLocation() {
        const location = window.navigator && navigator.geolocation
        if(location) {               
            location.getCurrentPosition((position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                })
            
                const endpoint = `https://api.darksky.net/forecast/${key}/${this.state.latitude},${this.state.longitude}`
                axios.get(endpoint)
                .then((json) => {
                    const returnData = json.data.currently.temperature;
                    console.log(returnData)
                    return returnData
                })
            
            
            
            }, (error) => {
                this.setState({ latitude: 'err-latitude', longitude: 'err-longitude'})
            })
        }
    }

    

    render() {
        const { latitude, longitude, temparature } = this.state;

        return(
            <div>
                <div>Your Location Info:</div>
                <p>Latitude: {latitude}</p>
                <p>Longitude: {longitude}</p>
                <p>Temparature: {temparature}</p>
            </div>
        )
    }
}

export default GetWeather;