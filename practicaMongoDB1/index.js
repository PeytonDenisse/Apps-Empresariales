const { MongoClient } = require('mongodb');


// Connection URI
const uri = "mongodb+srv://Peyton:Tita1214@cluster1.jzibs.mongodb.net/";
const client = new MongoClient(uri);



// The database to use
async function run() {
    try {
      await client.connect();
      const db = client.db('blog');
      const collection = db.collection('articulos').findOne();
  
      // Find the first document in the collection
      const first = await collection.findOne();
      console.log(articulo.titulo);
    } finally {
      // Close the database connection when finished or an error occurs
      await client.close();
    }
  }
  run().catch(console.error);