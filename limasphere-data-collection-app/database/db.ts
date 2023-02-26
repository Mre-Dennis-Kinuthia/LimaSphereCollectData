import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnidiedTopology: true,
});

async function connectToDatabase(){
    await client.connect();
    return client.db('mydatabase');
}

export default connectToDatabase;