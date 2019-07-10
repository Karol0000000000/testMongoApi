const db = require('../database/database');

exports.getTaskByName = (req, res) => {
    
    db.getCollection().findOne({"name": req.params.name}, (error, result) => {
        if(error){
            console.log("Get error");
            return res.status(500).send(error);
        }
        res.send(result);
    });
}