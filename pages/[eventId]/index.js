import EventDetail from "../../components/events/EventDetail";
import { MongoClient } from "mongodb";

function EventDetailPage() {
  return (
    <EventDetail
      id="e2"
      title="Not a Test Event"
      description="No, This is not a description of the event"
      image="https://via.placeholder.com/250x200?text=Event"
      address="X Street, Y Building"
      date={Date.now()}
    />
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.MONGO_KEY);
  const db = client.db();

  const eventCollection = db.collection("events");

  const events = await eventCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: events.map((event) => ({
      params: { eventId: event._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  console.log(eventId);

  const client = await MongoClient.connect(process.env.MONGO_KEY);
  const db = client.db();

  const eventCollection = db.collection("events");
  const selectedEvent = await eventCollection.findOne({ _id: eventId });

  client.close();

  return {
    props: {
      eventData: selectedEvent,
    },
  };
}

export default EventDetailPage;
