import NewEventForm from "../../components/Layout/events/NewEventForm";

function NewEventPage() {
  const handleCreateEvent = (eventData) => {
    console.log(eventData)
  }

  return (
      <NewEventForm onCreateEvent={handleCreateEvent} />
    
  );
}

export default NewEventPage;
