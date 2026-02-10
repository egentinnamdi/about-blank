import { ShieldCheck, Zap } from "lucide-react";
import Logo from "../shared/Logo";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

export default function Footer() {
  return (
    <div className="mt-20  bg-white/2 grid place-items-center">
      <Separator className="bg-white/5" />
      <div className="lg:h-96 flex flex-col lg:flex-row lg:w-5/6 px-5 py-10 lg:p-0 gap-10 lg:gap-20 ">
        <div className=" lg:w-2/6 flex flex-col justify-center gap-5">
          <Logo />
          <p className="text-gray-400  leading-loose text-sm">
            The modern way to experience events. Secure ticketing, fast entry,
            and unforgettable moments for organizers and attendees alike
          </p>
        </div>
        <div className="bg-orange-400">
          <div className=" flex flex-col text-sm  text-gray-400 justify-center gap-5">
            <h4 className="text-white font-medium text-lg">Product</h4>
            <span>Features</span>
            <span>Explore Events</span>
            <span>Founders</span>
            <span>Pricing</span>
            <span>Organizer Login</span>
          </div>
          <div className=" flex flex-col text-gray-400 text-sm justify-center gap-5">
            <h4 className="text-white font-medium text-lg">Support</h4>
            <span>Support</span>
            <span>Help Center</span>
            <span>Contact Us</span>
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
          </div>
        </div>
        <div className=" flex-1  lg:w-4/6 flex flex-col justify-center gap-5">
          <h4 className="text-white font-medium text-lg">Stay in the loop</h4>
          <span className="text-gray-400 text-sm">
            Join our newsletter for the latest event updates and organizer tips
          </span>
          <div className="flex gap-5 items-center">
            <Input className="h-10" placeholder="Enter your email" />
            <Button className="h-11  bg-primary-gradient">Subscribe</Button>
          </div>
        </div>
      </div>
      <Separator className="bg-white/5 w-5/6! m-auto" />
      <div className=" flex flex-col lg:flex-row lg:justify-around justify-evenly items-center lg:h-28 h-40 w-full">
        <span className="text-gray-400 lg:text-sm">
          &copy; {new Date().getFullYear()} AboutBlank. All rights reserved.
        </span>
        <div className="flex items-center gap-2">
          <span className="text-xs bg-background border flex items-center gap-1 text-green-500 border-white/5 px-3 rounded-2xl py-2">
            <ShieldCheck size={15} />
            Secure Payment
          </span>
          <span className="text-xs bg-background border flex items-center gap-1 border-white/5 text-blue-500 px-3 rounded-2xl py-2">
            <Zap size={15} />
            Fast Check-in
          </span>
        </div>
      </div>
    </div>
  );
}
