import Image from "next/image";
import Marquee from "react-fast-marquee";

const partners = [
  {
    image: "google-img.png",
    name: "Google",
  },
  {
    image: "spotify-img.png",
    name: "Spotify",
  },
  {
    image: "paypal-img.png",
    name: "Paypal",
  },
  {
    image: "visa-img.png",
    name: "Visa",
  },
];

export default function TrustedPartners() {
  return (
    <div className="flex min-h-20 relative flex-col gap-7 lg:gap-10 items-center mb-10">
      <div className="absolute inset-0 bg-radial  from-background/50 via-background/50 to-background z-10" />

      <h3 className="text-gray-300 text-2xl ">Trusted By</h3>
      <Marquee className="flex-1 " speed={60} direction="left" gradient={false}>
        {partners.map((partner) => (
          <div
            className="w-[25vw] text-xs lg:text-base flex flex-col items-center gap-2  text-center "
            key={partner.name}
          >
            <div className="h-10">
              <Image
                src={`/img/${partner.image}`}
                alt={partner.name}
                width={400}
                height={400}
                className="size-full object-cover"
              />
            </div>
            <span>{partner.name}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
