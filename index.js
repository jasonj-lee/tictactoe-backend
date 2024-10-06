const {MongoClient} = require("mongodb"); 

async function main() {
    const uri = process.env.MONGO_URI
    const client = new MongoClient(uri)
    const mongoose = require("mongoose"); 
    mongoose.connect("mongodb://localhost:27017/magesDB");

    await client.connect()
}