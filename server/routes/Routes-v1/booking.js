const express = require('express');
const joi = require('joi');
const { getResources, addOrUpdateResource, getResourceById } = require('../../Dynamo/dynamo-v1/booking');

const router = express();
const { validateBookingData}= require('../../Datavalidation/validation')


router.get('/', async (req, res) => {
	console.log(req.header('Origin'));
	try {
		const resource = await getResources();
		res.json(resource);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ err: 'Something went wrong' });
	}
});


router.get('/:id', async (req, res) => {
	const id = req.params.id;

	try {
		const resource = await getResourceById(id);
		return res.json(resource);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ err: 'Something went wrong' });
	}
});

router.post('/', async (req, res) => {
	const booking = req.body;
	 const validationData =  validateBookingData(booking);
    //This capacity comes from contentful I need to make an api call here to get the number of desks or rooms
    //const capacity_desks = contentful
    //const number of rooms = contentul
		
		if (validationData) {
			try {
				const newPlace = await addOrUpdateResource(booking);
				return res.json(newPlace);
			} catch (error) {
				console.log(error);
				return res.status(500).json({ err: "resource couldn't be created" });
			}
		}
	
});


module.exports = router