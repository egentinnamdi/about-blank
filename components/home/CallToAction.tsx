import { Button } from "../ui/button";

export default function CallToAction() {
  return (
    <div className="flex bg-radial-gradient flex-col mt-10  items-center rounded-2xl h-80 justify-center gap-10">
      <h2 className="text-6xl font-bold">Ready to launch your next event?</h2>
      <p className="text-gray-400 text-xl">
        Join thousands of organizers who run smooth check-ins and sell more
        tickets with GatePass.
      </p>
      <div className="flex gap-5 w-1/3">
        <Button className="h-14 bg-primary w-3/5">Create Free Account</Button>
        <Button className="h-14 w-2/5" variant="outline">
          Learn More
        </Button>
      </div>
    </div>
  );
}
