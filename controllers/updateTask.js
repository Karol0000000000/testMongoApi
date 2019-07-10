const db = require('../database/database');
const ObjectId = require("mongodb").ObjectID;

exports.updateTask = (req, res) => {
    
    db.getCollection().updateOne({ '_id': new ObjectId(req.body._id) },
        { $set: { 'isDone': req.body.isDone, 'end': req.body.end } }, (error, result) => {
            if (error) {
                console.log("Update error!");
                return res.status(500).send(error);
            }
            res.send(result.result);
        });
}