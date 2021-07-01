const express = require("express")
const {
    getPlaces,
    addOrUpdatePlace,
    getPlaceById,
    deletePlace,
} = require("../Dynamo/places")


const router = express()

router.get("/", async (req, res) => {
    try {
        const places = await getPlaces();
        console.log(places);
        res.json(places)
       
       
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ err: 'Something went wrong' })
    }
});


router.get("/:id", async (req, res) => {
    
    const id = req.params.id;
    try {
        const place = await getPlaceById(id);
        console.log(place, "place");
        return res.json(place)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ err: "Something went wrong" })
    }
});

router.post("/", async (req, res) => {
    const place = req.body;
    try {
        const newPlace = await addOrUpdatePlace(place);
        return res.json(newPlace);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ err: "resource couldn't be created" })
    }
});


router.put('/:id', async (req, res) => {
    const place = req.body;
    const { id } = req.params;
    place.id = id;
    try {
        const updatedPlace = await addOrUpdatePlace(place);
        return res.json(updatedPlace)
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ err: "Something went wrong" });
    }

});
  

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedPlace = await deletePlace(id)
        return res.json(deletedPlace)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ err: "Something went wrong" })
    }
});


module.exports = router;