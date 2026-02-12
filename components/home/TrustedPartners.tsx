import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function TrustedPartners() {
  return (
    <div className="flex min-h-[20vh] flex-col gap-5 items-center">
      <h3 className="text-gray-400 text-2xl ">Trusted By</h3>
      <div className="flex-1 flex relative">
        <div className="absolute inset-0  bg-radial  from-primary/10 via-background to-background" />
        <Marquee
          className="flex-1 flex  gap-6"
          speed={60}
          direction="left"
          gradient={false}
        >
          <div className="flex justify-between items-center w-full">
            <div className="min-w-20 h-7 ">
              <Image
                src="/img/google.png"
                alt="google"
                width={400}
                height={400}
                className="size-full  object-cover"
              />
            </div>
            <div className="min-w-20 h-14 ">
              <Image
                src="/img/spotify.png"
                alt="google"
                width={400}
                height={400}
                className="size-full  object-cover"
              />
            </div>
            <div className="min-w-20 h-14 ">
              <Image
                src="/img/paypal.png"
                alt="google"
                width={400}
                height={400}
                className="size-full  object-cover"
              />
            </div>
            <div className="min-w-20 h-14 ">
              <Image
                src="/img/paypal.png"
                alt="google"
                width={400}
                height={400}
                className="size-full  object-cover"
              />
            </div>
            <div className="min-w-20 h-14 ">
              <Image
                src="/img/paypal.png"
                alt="google"
                width={400}
                height={400}
                className="size-full  object-cover"
              />
            </div>
            <div className="min-w-20 h-14 ">
              <Image
                src="/img/apple.png"
                alt="google"
                width={400}
                height={400}
                className="size-full  object-cover"
              />
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
}
