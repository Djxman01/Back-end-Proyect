const mongoose = require('mongoose');


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Djxman001:Maximo100@clusternumen.vyv5t.mongodb.net/Pokedex?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
