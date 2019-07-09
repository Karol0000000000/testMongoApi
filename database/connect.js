const MongoClient = require("mongodb").MongoClient;

const DATABASE_USER = process.env.DATABASE_USER;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
const DATABASE_NAME = process.env.DATABASE_NAME;
const COLLECTION_NAME = process.env.COLLECTION_NAME;
const app = require('../index');

const CONNECTION_URL = "mongodb+srv://"+DATABASE_USER+":"+DATABASE_PASSWORD+"@mycluster-dfzay.mongodb.net/test?retryWrites=true&w=majority";
var database, collection;

exports.connect = () => {

    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true },
        (error, client) => {
            if (error) {
                console.log("ERROR!");
                throw error;
            }
            database = client.db(DATABASE_NAME);
            collection = database.collection(COLLECTION_NAME);
            console.log("Connected to `" + DATABASE_NAME + "`!");
        });
}

function getCollection() {
    return collection;
}

exports.getCollection = getCollection;