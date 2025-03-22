import Link from "next/link";
import AlliedServiceTile from "@/components/AlliedServicesTiles";
import {
  FaCamera,
  FaVideo,
  FaBuilding,
  FaTrademark,
  FaGlobeAsia,
} from "react-icons/fa";
import Image from "next/image";

const AlliedServices = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16">
      <h1 className="text-3xl font-bold text-center mt-8">Allied Services</h1>
      <h2 className="text-2xl font-bold text-center  my-2">
        Alone we can do too little. Together we can do so much.
      </h2>
      <p className="text-center  max-w-2xl mx-auto mt-2 text-[17px]">
        To serve you better, we have partnered with a few agencies and
        professional companies for services that are not our specialization but
        are important elements of the business.
      </p>
      <p className="text-center  max-w-2xl mx-auto">
        The purpose is to have value additions and improved services. Here are a
        few of them:
      </p>

      <div className="flex flex-col items-center space-y-6 mt-8 mx-auto md:mx-0">
        <AlliedServiceTile
          Icon={FaCamera}
          name="Photography"
          className="w-full self-start"
        />
        <AlliedServiceTile
          Icon={FaVideo}
          name="Videography"
          className="w-full self-end"
        />
        <AlliedServiceTile
          Icon={FaBuilding}
          name="Company Registration"
          className="w-full self-start"
        />
        <AlliedServiceTile
          Icon={FaTrademark}
          name="Trademark Registration"
          className="w-full self-end"
        />
        <AlliedServiceTile
          Icon={FaGlobeAsia}
          name="Domain Registration"
          className="w-full self-start"
        />
      </div>

      <div className="p-4 mt-12">
        <h2 className="text-xl text-center font-semibold mb-4">
          You might need services of our other partner companies too.
        </h2>
        <div className=" flex justify-center gap-8 mt-4">
          <Link href="http://www.markall.in/" target="_blank">
            <Image
              src="/images/markall.png"
              alt="MarkAll - Marketing All Out"
              width={200}
              height={60}
              className="max-h-[200px] h-[15vw] object-contain"
            />
          </Link>
          <Link href="https://spreadinindia.markall.in/" target="_blank">
            <Image
              src="/images/spreadinindia.png"
              alt="Spread In India"
              width={200}
              height={60}
              className="max-h-[200px] h-[15vw] object-contain"
            />
          </Link>
        </div>
      </div>

      <div className="mt-8"></div>
    </div>
  );
};

export default AlliedServices;
