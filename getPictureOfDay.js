let axios = require('axios');
const {get} = require("axios");

function getPicture() {
    return new Promise(function (resolve) {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then(function (picture) {
                resolve(picture.data);
            });
    });
}

getPicture().then(result => console.log(result));