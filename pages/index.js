import EventList from "../components/Layout/events/EventList";

const TEST_EVENTS = [
  {
    id: "e1",
    title: "Test Event",
    description: "This might be a description of the event",
    image: "https://via.placeholder.com/250x200?text=Event",
    address: 'X Street, Y Building',
    date: Date.now()
  },
  {
    id: "e2",
    title: "Not a Test Event",
    description: "No, This is not a description of the event",
    image: "https://via.placeholder.com/250x200?text=Event",
    address: 'X Street, Y Building',
    date: Date.now()
  },
  {
    id: "e3",
    title: "Definitely Test Event",
    description: "Yes, This is a description of the event",
    image: "https://via.placeholder.com/250x200?text=Event",
    address: 'X Street, Y Building',
    date: Date.now()
  },
];

export default function Home() {
  return <EventList events={TEST_EVENTS} />;
}
