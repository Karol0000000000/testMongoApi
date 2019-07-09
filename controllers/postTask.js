const db = require('../database/connect');

exports.postTask = (req, res) => {
    db.getCollection().insertOne(req.body, (error, result) => {
        if(error){
            console.log("Post error!");
            return res.status(500).send(error);
        }
        res.send(result.result);
    });
}