const db = require('../database/connect');
const ObjectId = require("mongodb").ObjectID;

exports.updateTask = (req, res) => {
    
    db.getCollection().updateOne({ '_id': new ObjectId(req.body._id) },
        { $set: { 'isDone': req.body.isDone } }, (error, result) => {
            if (error) {
                console.log("Update error!");
                return res.status(500).send(error);
            }
            res.send(result.result);
        });
}