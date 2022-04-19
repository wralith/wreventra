import EventItem from "./EventItem";

function EventList(props) {
  return props.events.map((event) => (
    <EventItem key={event.id} id={event.id} title={event.title} description={event.description} image={event.image} />
  ));
}

export default EventList;
