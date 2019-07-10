const db = require('../database/database');

exports.getTasks = (req, res) => {
    
    db.getCollection().find({}).toArray((error, result) => {
        if (error) {
            console.log("Get error!");
            return res.status(500).send(error);
        }
        res.send(result);
    });
}