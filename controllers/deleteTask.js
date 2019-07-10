const db = require('../database/database');
const ObjectId = require("mongodb").ObjectID;

exports.deleteTask = (req, res) => {
    
    db.getCollection().deleteOne({_id: new ObjectId(req.query._id)}, (error, result) => {
        if(error){
            console.log("Delete error!");
            return res.status(500).send(error);
        }
        res.send(result.result);
    });
}