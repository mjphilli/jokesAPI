const Jokes = require("../models/jokes.model")


//all jokes
module.exports.allJokes = (req, res) =>{
    Jokes.find()
        .then(jokeList => res.json(jokeList))
        .catch(err => res.json(err))
}


//one joke
module.exports.oneJoke = (req, res) =>{
    Jokes.findOne({_id: req.params.id}) // return the found object
        .then(foundJoke => res.json(foundJoke))
        .catch(err => res.json(err))
}


//create joke
module.exports.addJoke = (req, res) =>{
    Jokes.create(req.body) // will return new object
        .then(newJoke => res.json(newJoke))
        .catch(err => res.json(err))
}

//update joke
module.exports.updateJoke = (req, res) =>{
    Jokes.findOneAndUpdate(
        {_id: req.params.id}, //criteria
        req.body, //form data
        {new: true, runValidators: true} 
        //new: true - returns updated object
        //runvalidators: true - to perform validation specificed on model
    )
    .then(updatedJoke => res.json(updatedJoke))
    .catch(err => res.json(err))
}

//delete joke
module.exports.deleteJoke = (req, res) =>{
    Jokes.deleteOne({_id: req.params.id})
        .then(status => res.json(status))
        .catch(err => res.json(err))
}