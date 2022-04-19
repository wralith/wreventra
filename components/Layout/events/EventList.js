import EventItem from "./EventItem";

function EventList(props) {
  return (
    <ul className="flex flex-col items-center justify-center gap-12 m-2 p-5 md:flex-row md:flex-[2_2_0%] flex-wrap">
      {" "}
      {props.events.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          description={event.description}
          image={event.image}
        />
      ))}
    </ul>
  );
}

export default EventList;
