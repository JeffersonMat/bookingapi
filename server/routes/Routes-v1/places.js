const express = require('express');
const joi = require('joi');
const axios = require('axios')
const { getPlaces, addOrUpdatePlace, getPlaceById, deletePlace } = require('../../Dynamo/dynamo-v1/places');
const { validatePlaceData } = require('../../Datavalidation/validation')

const router = express();

router.get('/', async (req, res) => {
	try {
		const places = await getPlaces();
		res.json(places);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ err: 'Something went wrong' });
	}
});

router.get('/:id', async (req, res) => {
	const id = req.params.id;

	try {
		const place = await getPlaceById(id);
		return res.json(place);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ err: 'Something went wrong' });
	}
});

router.post('/', async (req, res) => {
	const place = req.body;
	const validationData = validatePlaceData(place);
	
	
	if (validationData) {
		try {
			const getPlaces = await axios.get("/venues")
			console.log(getPlaces, "places")
			const newPlace = await addOrUpdatePlace(place);
			return res.json(newPlace);
		} catch (error) {
			console.log(error);
			return res.status(500).json({ err: "resource couldn't be created" });
		}
	}
});



router.put('/:id', async (req, res) => {
	const place = req.body;
	const { id } = req.params;
	place.id = id;
	try {
		const updatedPlace = await addOrUpdatePlace(place);
		return res.json(updatedPlace);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ err: 'Something went wrong' });
	}
});

router.delete('/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const deletedPlace = await deletePlace(id);
		return res.json(deletedPlace);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ err: 'Something went wrong' });
	}
});

module.exports = router;
