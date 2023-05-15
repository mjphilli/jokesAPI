const JokeController = require("../controllers/jokes.controllers")


module.exports = (app)=>{
    app.get("/api/jokes", JokeController.allJokes)
    app.get("/api/jokes/:id", JokeController.oneJoke)
    app.post("/api/jokes", JokeController.addJoke)
    app.patch("/api/jokes/:id", JokeController.updateJoke)
    app.delete("/api/jokes/:id", JokeController.deleteJoke)
}