"use client";
import { motion } from "motion/react";
import Marquee from "react-fast-marquee";
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
    title: "Designers & Developers Connect",
    details: [
      { label: "Date", value: "28th July 2026" },
      { label: "Duration", value: "6 hours" },
      { label: "Price from", value: "₦3,000" },
    ],
  },
];

export default function UpcomingEvents() {
  return (
    <div className="min-h-[70vh]  flex lg:gap-12 gap-5 mt-5 items-center  flex-col lg:mt-10 ">
      <h2 className="lg:text-5xl text-4xl font-semibold lg:text-left text-center leading-normal">
        Upcoming <span className="text-primary-gradient">Events</span> Around
        You
      </h2>
      <Marquee
        className=" flex-1 "
        speed={60}
        direction="left"
        gradient={false}
      >
        <div className="flex space-x-10">
          {events.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </Marquee>
    </div>
  );
}
