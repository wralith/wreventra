import EventList from "../components/events/EventList";
import { MongoClient } from "mongodb";

const TEST_EVENTS = [
  {
    id: "e1",
    title: "Test Event",
    description: "This might be a description of the event",
    image: "https://via.placeholder.com/250x200?text=Event",
    address: "X Street, Y Building",
    date: Date.now(),
  },
  {
    id: "e2",
    title: "Not a Test Event",
    description: "No, This is not a description of the event",
    image: "https://via.placeholder.com/250x200?text=Event",
    address: "X Street, Y Building",
    date: Date.now(),
  },
  {
    id: "e3",
    title: "Definitely Test Event",
    description: "Yes, This is a description of the event",
    image: "https://via.placeholder.com/250x200?text=Event",
    address: "X Street, Y Building",
    date: Date.now(),
  },
];

export default function Home(props) {
  return <EventList events={props.events} />;
}

export async function getStaticProps() {
  // fetch data from API
  const client = await MongoClient.connect(process.env.MONGO_KEY);
  const db = client.db();

  const eventCollection = db.collection("events");
  const events = await eventCollection.find().toArray();

  client.close();

  return {
    props: {
      events: events.map(event => ({
        title: event.title,
        address: event.address,
        image:event.image,
        id: event._id.toString(),
        date: event.date,
        description: event.description
      }))
    },
    // revalidate: 60 // Update every x seconds
  };
}
