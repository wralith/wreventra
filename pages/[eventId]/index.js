import EventDetail from "../../components/events/EventDetail";
import { MongoClient , ObjectId } from "mongodb";

function EventDetailPage(props) {
  return (
    <EventDetail
      id="e2"
      title={props.eventData.title}
      description={props.eventData.description}
      image={props.eventData.image}
      address={props.eventData.address}
      date={props.eventData.date}
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
  const selectedEvent = await eventCollection.findOne({ _id: ObjectId(eventId) });

  client.close();

  return {
    props: {
      eventData: {
        id: selectedEvent._id.toString(),
        title: selectedEvent.title,
        description: selectedEvent.description,
        image: selectedEvent.image,
        address: selectedEvent.address,
        date: selectedEvent.date,
      },
    },
  };
}

export default EventDetailPage;
