import EventItem from "./EventItem";

const events = [
  {
    image: "event-seven.jpg",
    title: "Summer Beats",
    category: "Festival • Outdoor",
  },
  {
    image: "event-eight.jpg",
    title: "Tech Connect Conference",
    category: "Conference • Indoor",
  },
  {
    image: "event-nine.jpg",
    title: "Lagos Food Carnival",
    category: "Festival • Outdoor",
  },
  {
    image: "event-eleven.jpg",
    title: "Midnight Comedy Live",
    category: "Comedy • Indoor",
  },
  {
    image: "event-twelve.jpg",
    title: "Startup Pitch Night",
    category: "Business • Networking",
  },
  {
    image: "event-thirteen.jpg",
    title: "AfroVibes Concert",
    category: "Music • Live Show",
  },
];

export default function EventsDiscoverySection({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-10 min-h-[50vh] px-4  bg-radial from-primary/15 lg:from-primary/18  via-background to-background">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold">{title}</h2>
        <span className="text-gray-400">{description}</span>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-6">
        {events.map((event) => (
          <EventItem key={event.title} {...event} />
        ))}
      </div>
    </div>
  );
}
