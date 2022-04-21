import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description, date } = data;

    const client = await MongoClient.connect(process.env.MONGO_KEY);
    const db = client.db();

    const eventCollection = db.collection("events");
    const result = await eventCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Event added!" });
  }
}

export default handler;