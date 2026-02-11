const steps = [
  {
    title: "Create your event",
    description: "Publish details, ticket tiers, and artwork in minutes",
  },
  {
    title: "Share the link",
    description: "Promote via social, email, or embedded checkout buttons",
  },
  {
    title: "Sell and check in",
    description: "Track sales and scan attendees with realtime analytics.",
  },
];

export default function HowItWorks() {
  return (
    <div className="min-h-[50vh] flex flex-col lg:flex-row gap-10 lg:gap-5">
      <div className="lg:p-10 px-5 lg:w-2/5 lg:pl-20 items-center flex flex-col  gap-7">
        <h2 className="lg:text-6xl text-4xl font-bold ">
          <span className="text-primary-gradient leading-normal">
            Launch in{" "}
          </span>
          three focused steps
        </h2>
        <p className="text-gray-400 leading-normal">
          About Blank keep setup simple and fast while giving you
          enterprise-grade control
        </p>
        <div className="flex flex-col gap-5  ">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h3 className="text-lg text-primary-gradient font-bold">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-3/4 flex-1 grid place-items-center">
        <div className="border rounded-2xl lg:grid flex flex-col grid-cols-2 grid-rows-3 gap-5 border-white/5  p-8 bg-white/2 shadow-2xl/70 shadow-primary/40 lg:size-3/4">
          <div className="border border-white/5 flex text-xs gap-0.5 text-gray-400 flex-col justify-center  p-5 bg-background rounded-2xl">
            <span>Launch readiness</span>
            <span className="text-white text-2xl font-medium">92%</span>
            <span>Setup complete</span>
          </div>
          <div className="border border-white/5 flex text-xs gap-0.5 text-gray-400 flex-col justify-center  p-5 bg-background rounded-2xl">
            <span>Tickets sold</span>
            <span className="text-white text-2xl font-medium">1,248</span>
            <span>This week</span>
          </div>
          <div className="border col-span-2 border-white/5 flex text-xs gap-0.5 text-gray-400 flex-col justify-center  p-5 bg-background rounded-2xl">
            <span>Check-in-velocity</span>
            <span className="text-white text-lg font-medium">
              48 scans per minute
            </span>
          </div>
          <div className="border col-span-2 border-white/5 flex text-xs text-gray-400 items-center gap-4 p-5 bg-background rounded-2xl">
            <div className="size-10 bg-primary/15 rounded-lg" />
            <div className="flex flex-col gap-0.5">
              <span className="text-white text-lg font-medium">
                Mobile check-in
              </span>
              <span>Works on any device at the door</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
