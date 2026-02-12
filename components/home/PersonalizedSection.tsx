"use client";
import { Flame } from "lucide-react";
import PersonalizedItem from "./PersonalizedItem";

const personalized = [
  {
    image: "event-fourteen.jpg",
    city: "Lagos",
    title: "Midnight Vibes Festival",
    category: "Music",
  },
  {
    image: "event-fifteen.jpg",
    city: "Port Harcourt",
    title: "Oil City Shutdown",
    category: "Concert",
  },
  {
    image: "event-sixteen.jpg",
    city: "Ibadan",
    title: "Campus Takeover",
    category: "Party",
  },
  {
    image: "event-seventeen.jpg",
    city: "Enugu",
    title: "Eastern Laugh Riot",
    category: "Comedy",
  },
  {
    image: "event-eighteen.jpg",
    city: "Benin City",
    title: "Afro Heat Experience",
    category: "Music",
  },
];

export default function PersonalizedSection() {
  return (
    <div className="min-h-[40vh] px-4 flex flex-col gap-5">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <Flame className="text-primary" size={27} /> More Events for You
      </h2>
      <div className=" flex-1 flex overflow-x-auto scrollbar-hide overflow-y- py-3 pb-5 gap-7">
        {personalized.map((event) => (
          <PersonalizedItem key={event.title} {...event} />
        ))}
      </div>
    </div>
  );
}
