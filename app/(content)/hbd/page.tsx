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

      <div className="relative w-full max-h-[30vh] flex justify-center">
        <Image
          src="/images/flags.png"
          alt="Birthday Flag"
          width={500}
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
          width={300}
          height={200}
          className="object-contain h-[40vh] max-h-[200px]"
          priority
        />
      </div>

      <h1 className="text-center text-[2.2vh] font-bold my-4">
        The more you praise and celebrate your life <br />
        the more there is in life to celebrate.
      </h1>

      <div className="flex flex-col items-center justify-center">
        <Image
          src="/images/logo.png"
          alt="DzynFox Visual Communications LLP"
          width={200}
          height={80}
          className="object-contain h-[15vh]"
          priority
        />
        <h2 className="text-[2vh] text-center font-quicksand">Design Agency</h2>
      </div>
    </div>
  );
};

export default HBD;
