"use client";
import { useIsMobile } from "@/hooks/useMobile";
import { Button } from "../ui/button";
import Logo from "./Logo";
import { SidebarTrigger } from "../ui/sidebar";

export default function Navbar() {
  const isMobile = useIsMobile();
  return (
    <div className="flex fixed top-0 z-10 w-full justify-around backdrop-blur-2xl bg-background/70 items-center border-b border-b-white/5  shadow-2xl h-[10vh]">
      <div className="">
        <Logo />
      </div>
      {isMobile ? (
        <SidebarTrigger />
      ) : (
        <>
          <div className="flex justify-center gap-10">
            <span>Home</span>
            <span>How It Works</span>
            <span>What We Offer</span>
            <span>Events</span>
            <span>Pricing</span>
          </div>
          <div className=" w-1/6 flex justify-center gap-3">
            <Button variant="ghost" className=" h-10 min-w-2/5">
              Login
            </Button>
            <Button className="min-w-2/5 bg-primary-gradient text-white h-10">
              Create Event
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
