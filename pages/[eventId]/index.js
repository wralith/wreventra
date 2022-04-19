import EventDetail from "../../components/Layout/events/EventDetail";

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

export default EventDetailPage;
