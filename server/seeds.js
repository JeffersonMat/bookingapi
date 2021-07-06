// const axios = require('axios');
const { addOrUpdatePlace, deletePlace, getPlaceById, getPlaces } = require('./Dynamo/dynamo-v1/places');


const seeData = async () => {

    try {
        const places = {
            "id":"1",
            "name": "test"
        }
        addOrUpdatePlace(places )

    }
    catch (error) {
        console.log(error);
        console.log("Works");
    }
};


seeData()

