"use client";
import { Button } from "../ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <div className="h-[90vh] relative">
      {/* Image Layer */}
      <div className="absolute inset-0">
        <Image
          src="/img/home-bg.png"
          alt="home"
          className="size-full object-cover"
          width={1000}
          height={1000}
          loading="eager"
        />
      </div>
      {/* Color Layer */}
      <div className="absolute inset-0 hero-gradient lg:bg-background/60 bg-background/80" />

      {/* Text/Content Layer */}
      <div className="absolute inset-0 flex items-center flex-col justify-center gap-8 lg:gap-0 lg:justify-evenly">
        <div className="bg-background rounded-full text-xs flex items-center gap-2 py-2.5 shadow-sm shadow-primary px-5">
          <Sparkles size={15} className="text-primary" />
          <span>Commission-Free Ticketing</span>
        </div>
        <h2 className="font-black flex flex-col lg:text-8xl text-4xl gap-2 items-center">
          <span>Built to Empower,</span>
          <TypeAnimation
            sequence={[
              "Event Promoters",
              1000,
              "Event Organizers",
              1000,
              "Event Innovators",
              1000,
              "Your Event Vision",
              1000,
            ]}
            className="text-primary-gradient"
            wrapper="span"
            repeat={Infinity}
          />
        </h2>
        <p className="lg:text-2xl text-gray-400 text-center w-5/6 text-lg font-medium">
          Power events and manage guests all in one place
        </p>

        <div className="lg:w-1/3 w-5/6 flex flex-col items-center">
          <div className="font-sans flex flex-col lg:flex-row gap-5 w-full">
            <Button className="bg-primary-gradient shadow-lg shadow-primary/50 text-white h-14 min-w-3/5">
              <span>Start Creating Events</span>
              <ArrowRight />
            </Button>
            <Button
              variant="outline"
              className=" border border-primary h-14 text-white  min-w-2/5"
            >
              Browse Events
            </Button>
          </div>
          <div className="  h-9 w-4 border-2 border-gray-700 grid place-items-center rounded-full">
            <div className="bg-primary size-1 rounded-full animate-ping" />
          </div>
        </div>
      </div>
    </div>
  );
}
