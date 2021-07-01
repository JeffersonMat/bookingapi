const express = require("express")
const router = express.Router()
const {
  getPlaces,
  addOrUpdatePlace,
  getPlaceById,
  deletePlace,
} = require("../Dynamo/places")


router.get('/', (req, res) => {
     res.send("Hello from js")
 })

 router.get("/venues", async (req, res) => {
     try {
         const places = await getPlaces();
         res.json(places)
     }
     catch (error) {
         console.log(error);
         res.status(500).json({err:'Something went wrong'})
     }
 })


router.get("/venues/:id", async (req, res) => {
    
    const id = req.params.id;
    try {
    const places = await getPlaceById(id);
      res.json(places)
    } catch (error) {
      console.log(error)
      res.status(500).json({ err: "Something went wrong" })
    }
})

router.post("/venue", async (req, res) => {
    const venue = req.body;
    
})
  



module.exports = router