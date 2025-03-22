import Image from "next/image";


const HeroSection: React.FC = () => {
  return (
    <main className="w-full font-bold my-2 mx-auto opacity-100">
      <div className="flex justify-center">
      <h1 className="text-4xl font-bold">
      <b className="text-black">We are</b> <span className="text-red-600 font-black">DzynFox</span>
      </h1>
      </div>

       <div className="mt-2 leading-relaxed font-light">
        <p className="w-4/5 md:w-4/5 flex justify-center font-bold text-md  mx-auto opacity-75">
        We are designers. 
        </p>
        <p className="w-4/5 md:w-4/5 flex justify-center font-bold text-md  mx-auto opacity-75">
        We think. We plan. We create.
        </p>
        <p className="w-4/5 md:w-4/5 flex justify-center font-bold text-md  mx-auto opacity-75">
        We conceive new ideas and bring them to reality.
        </p>
        <p className="w-4/5 md:w-4/5 flex justify-center font-bold text-md  mx-auto opacity-75">
        We are creative artists but design things for a purpose.
        </p>
      </div>

  
  <div className="flex items-center justify-between w-full px-10 mt-6">
      <Image 
    src="/images/BabyFox.png" 
    alt="Fox Logo" 
    className="object-contain"
    height={300}
    width={300}
  />

<div className="w-full md:w-4/5 lg:w-2/3 text-left font-normal text-lg">
    <p className="my-4 leading-relaxed">
      We are <b className="font-bold">DzynFox Visual Communications LLP.</b>A company formed under the MarkAll group of companies. We are the design hands of <b className="font-bold">MarkAll - Marketing All Out</b>, a full-service marketing agency.
    </p>

    
    <p className="my-4  leading-relaxed">
      <b className="mt-4 font-bold">Our mission</b> is to offer creative services and imaginative solutions to strengthen every creative opportunity. We cultivate both the business and its clients through successful visual solutions and do so with professionalism, enthusiasm, and dedication.
    </p>

    
    <p className="my-4  leading-relaxed">
      <b className="mt-4 font-bold">Our vision</b> is to bring an original, inventive experience to the graphic design space.
    </p>

    
    <p className="my-4  leading-relaxed">
    <b className="mt-4 font-bold">Our primary goal</b> is to make the design process itself enjoyable for our clients. Our clients will be heard, understood, and recognized as the best in their respective domains.
    </p>
  </div>
</div>


    </main>
  );
};

export default HeroSection;



