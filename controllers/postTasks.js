const db = require('../database/database');

exports.postTasks = (req, res) => {
    db.getCollection().insertMany(req.body, (error, result) => {
        if(error){
            console.log("Post error!");
            return res.status(500).send(error);
        }
        res.send(result.result);
    });
}