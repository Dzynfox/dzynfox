import Image from "next/image";
import BabyFox from "@/public/images/BabyFox.png";

const HeroSection: React.FC = () => {
  return (
    <main className="w-4/5 font-bold my-2 mx-auto opacity-70">
      <h1 className="section-header">
        We are <span className="text-red-600">DzynFox</span>
      </h1>
      <p className="w-4/5 font-bold my-2 mx-auto opacity-70">
        We are designers. <br /> We think. We plan. We create.
        <br /> We conceive new ideas and bring them to reality.
        <br /> We are creative artists but design things for a purpose.
      </p>
      <div className="flex items-center w-[90%] my-8 mx-auto">
    
        <Image
          src={BabyFox as unknown as string} 
          alt="Men Discussing Idea"
          width={500}
          height={300}
        />

        <div className="flex flex-col justify-center my-4 mx-auto">
          <p>
            We are{" "}
            <span className="font-bold">
              DzynFox Visual Communications LLP
            </span>
            . A company formed under the MarkAll group of companies. We are the
            design hands of{" "}
            <span className="font-bold">
              MarkAll - Marketing All Out
            </span>
            , a full-service marketing agency.
            <span className="block h-8"></span>
            <span className="font-bold">Our mission</span> is to offer
            creative services and imaginative solutions to strengthen every
            creative opportunity. We cultivate both the business and its clients
            through successful visual solutions and do so with professionalism,
            enthusiasm, and dedication.
            <span className="block h-8"></span>
            <span className="font-bold">Our vision</span> is to bring an
            original, inventive experience to the graphic design space.
            <span className="block h-8"></span>
            <span className="font-bold">Our primary goal</span> is to make
            the design process itself enjoyable for our clients. Our clients will
            be heard, understood, and recognized to be the best in their
            respective domains.
          </p>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
