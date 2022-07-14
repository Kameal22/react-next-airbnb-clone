import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    // Run this code only if incoming request is a POST request.
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://kameal:kameal1996@next.bgzwk.mongodb.net/places?retryWrites=true&w=majority"
    );

    const db = client.db();

    const placesCollection = db.collection("places");

    const result = await placesCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201);
  }
}

export default handler;
