const MongoClient = require('mongodb').MongoClient;
const dataBase = require('../database');


const URL = `mongodb://${dataBase.username}:${dataBase.password}@${dataBase.ip}:${dataBase.port}/admin`;

console.log(URL);

MongoClient.connect(URL, function (err, db) {
    if (err) throw err;
    const pubgee = db.db('pubgee');
    const a = pubgee.collection('test').find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});