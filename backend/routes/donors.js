const router = require("express").Router();
let Exercise = require("../models/exercise.model");

//when in route dir, find all exercises and return them as a json object
router.route("/").get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json("Error: " + err));
});

//post request to add data for user, create the json object and save it 
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date
  });

  newExercise
    .save()
    .then(() => res.json("Exercise added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

//:id is getting the object id from url
router.route('/:id').get((req,res) => {
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json("Error: " + err))
})

router.route('/:id').delete((req,res) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("exercise deleted"))
    .catch(err => res.status(400).json("Error: " + err))
})

router.route('/update/:id').post((req,res) => {
    Exercise.findById(req.params.id)
    .then(exercise => {
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);

        exercise.save()
        .then(() => res.json("Exercise updated"))
        .catch(err => res.status(400).json("Error: " + err))
    })
    .catch(err => res.status(400).json("error: " + err))
})

module.exports = router;
