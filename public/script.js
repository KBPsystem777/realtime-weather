const app = document.getElementById('root').innerHTML="hello from node!";

const axios = require('axios');

const key = 'ffa7ee3f660b5a6b8151dee7107fc27e'

const lat = ''
const lon = ''
const endpoint = `https://api.darksky.net/forecast/${key}/${lat}/${lon}`;

alert(endpoint);