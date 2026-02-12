import { Button } from "../ui/button";

export default function CallToAction() {
  return (
    <div className="grid px-4 place-items-center">
      <div className="flex bg-radial-gradient flex-col lg:mt-10 lg:w-5/6 py-10 lg:py-0  items-center rounded-2xl lg:h-80 justify-center lg:gap-10 gap-7">
        <h2 className="lg:text-5xl lg:w-full w-4/5 text-center text-3xl font-bold">
          Ready to launch your next event?
        </h2>
        <p className="text-gray-400 text-center text-lg">
          Join thousands of organizers who run smooth check-ins and sell more
          tickets with GatePass.
        </p>
        <div className="flex lg:flex-row flex-col w-3/4 gap-5 lg:w-1/3">
          <Button className="h-14 bg-primary  lg:w-3/5">
            Create Free Account
          </Button>
          <Button className="h-14 lg:w-2/5 " variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
