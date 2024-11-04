const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://Peyton:Tita1214@cluster1.jzibs.mongodb.net/blog?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tlsAllowInvalidCertificates: true, // Asegúrate de que Atlas permite este ajuste
});

async function run() {
    try {
        await client.connect();
        const db = client.db('blog');
        const collection = db.collection('articulos');
        
        const first = await collection.findOne();
        if (first) {
            console.log(first.titulo);
        } else {
            console.log("No se encontró ningún documento en la colección.");
        }
    } catch (error) {
        console.error("Error ejecutando la consulta:", error);
    } finally {
        await client.close();
    }
}

run().catch(console.error);
