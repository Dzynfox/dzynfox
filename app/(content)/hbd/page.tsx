import Confetti from "@/components/Confetti";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Happy Birthday | DzynFox Visual Communications LLP",
};

const HBD = () => {
  return (
    <div className="relative min-h-screen w-full bg-white flex flex-col items-center overflow-hidden">
      <Confetti />

      <div className="relative w-full flex justify-center">
        <Image
          src="/images/flags.png"
          alt="Birthday Flag"
          width={400}
          height={150}
          className="object-contain"
          priority
        />
      </div>
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 h-full w-auto mix-blend-multiply"
      >
        <source src="/videos/balloons.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 right-0 h-full w-auto mix-blend-multiply rotate-y-180"
      >
        <source src="/videos/balloons.mp4" type="video/mp4" />
      </video>

      <div className="relative w-full flex justify-center my-6">
        <Image
          src="/images/cake.png"
          alt="Birthday Cake"
          width={150}
          height={150}
          className="object-contain mix-blend-multiply"
          priority
        />
      </div>

      <h1 className="text-center text-xl font-bold my-4">
        The more you praise and celebrate your life <br />
        the more there is in life to celebrate.
      </h1>

      <div className="flex flex-col items-center justify-center">
        <Image
          src="/images/logo.png"
          alt="DzynFox Visual Communications LLP"
          width={120}
          height={120}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default HBD;
