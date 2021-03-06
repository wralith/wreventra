import Head from "next/head";
import { useRouter } from "next/router";
import NewEventForm from "../../components/events/NewEventForm";

function NewEventPage() {
  const router = useRouter();
  const handleCreateEvent = async (eventData) => {
    const response = await fetch("/api/new-event", {
      method: "POST",
      body: JSON.stringify(eventData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json;

    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Create New Event</title>
        <meta name="description" content="Create a new event and publish" />
      </Head>
      <NewEventForm onCreateEvent={handleCreateEvent} />
    </>
  );
}

export default NewEventPage;
