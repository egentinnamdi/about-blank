import EventCard from "./EventCard";

const events = [
  {
    image: "event-one.jpg",
    location: "Lagos Island, Lagos",
    title: "Holidate with Vicol",
    details: [
      { label: "Date", value: "23rd April 2026" },
      { label: "Duration", value: "9 hours" },
      { label: "Price from", value: "₦10,000" },
    ],
  },
  {
    image: "event-two.png",
    location: "Victoria Island, Lagos",
    title: "Tech & Chill Conference",
    details: [
      { label: "Date", value: "5th May 2026" },
      { label: "Duration", value: "6 hours" },
      { label: "Price from", value: "₦15,000" },
    ],
  },
  {
    image: "event-three.jpg",
    location: "Lekki Phase 1, Lagos",
    title: "Sunset Rooftop Party",
    details: [
      { label: "Date", value: "18th June 2026" },
      { label: "Duration", value: "5 hours" },
      { label: "Price from", value: "₦8,500" },
    ],
  },
  {
    image: "event-four.jpg",
    location: "Ikeja, Lagos",
    title: "Creators Meetup Lagos",
    details: [
      { label: "Date", value: "2nd July 2026" },
      { label: "Duration", value: "4 hours" },
      { label: "Price from", value: "Free" },
    ],
  },
  {
    image: "event-five.jpg",
    location: "Victoria Island, Lagos",
    title: "Tech & Startup Hangout",
    details: [
      { label: "Date", value: "15th July 2026" },
      { label: "Duration", value: "5 hours" },
      { label: "Price from", value: "₦5,000" },
    ],
  },
  {
    image: "event-six.jpg",
    location: "Lekki Phase 1, Lagos",
    title: "Developers Connect",
    details: [
      { label: "Date", value: "28th July 2026" },
      { label: "Duration", value: "6 hours" },
      { label: "Price from", value: "₦3,000" },
    ],
  },
];

export default function TrendingEvents() {
  return (
    <div className="min-h-[50vh] flex gap-10 flex-col mt-10">
      <div className="space-y-3">
        <h2 className="lg:text-4xl text-3xl font-bold ">Trending Events</h2>
        <span className="text-gray-400">
          Discover what is happening this week
        </span>
      </div>
      <div className="flex-1 lg:grid flex flex-col grid-cols-4 gap-10   lg:gap-5">
        {events.map((event) => (
          <EventCard key={event.title} {...event} />
        ))}
      </div>
    </div>
  );
}
