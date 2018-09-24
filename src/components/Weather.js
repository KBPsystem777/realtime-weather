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
            }, (error) => {
                this.setState({ latitude: 'err-latitude', longitude: 'err-longitude'})
            })
        }
    }

    

    render() {
        const { latitude, longitude, temparature } = this.state;

        const endpoint = `https://api.darksky.net/forecast/${key}/${latitude},${longitude}`
        console.log(endpoint)

        axios.get(endpoint)
            .then((json) => {
                const returnData = json.data.currently.temperature;
                console.log(returnData)
        })

        return(
            <div>
                <p>{latitude}</p>
                <p>{longitude}</p>
                <p>{temparature}</p>
            </div>
        )
    }
}

export default GetWeather;