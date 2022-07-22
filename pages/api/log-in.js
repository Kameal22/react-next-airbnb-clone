import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    // Run this code only if incoming request is a POST request.
    const { login, password } = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://kameal:kameal1996@next.bgzwk.mongodb.net/places?retryWrites=true&w=majority"
    );
    const db = client.db();

    const usersCollection = db.collection("users");

    const user = await usersCollection.findOne({
      login: login,
      password: password,
    });

    if (user) {
      res.json({
        login,
        password,
        success: true,
      });
    } else {
      res.json({
        success: false,
      });
    }

    client.close();
  }
}

export default handler;
