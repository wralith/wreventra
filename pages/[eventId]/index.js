import EventDetail from "../../components/events/EventDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

function EventDetailPage(props) {
  return (
    <>
      <Head>
        <title>{props.eventData.title}</title>
        <meta name="description" content="{props.eventData.description}" />
      </Head>
      <EventDetail
        id="e2"
        title={props.eventData.title}
        description={props.eventData.description}
        image={props.eventData.image}
        address={props.eventData.address}
        date={props.eventData.date}
      />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.MONGO_KEY);
  const db = client.db();

  const eventCollection = db.collection("events");

  const events = await eventCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: "blocking",
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
  const selectedEvent = await eventCollection.findOne({
    _id: ObjectId(eventId),
  });

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
