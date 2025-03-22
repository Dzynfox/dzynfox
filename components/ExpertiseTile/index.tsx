"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import imageUrlBuilder from "@sanity/image-url";  // sanity client to be imported
import slugify from "react-slugify"; // slugify to be imported 
import Link from "next/link";
import sanityClient from "@/sanity/client"; // sanity client to be imported 

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source: any) => builder.image(source);

interface ExpertiseTileProps {
  name: string;
  faIconName: string;
  imgUrl?: string;
}

const ExpertiseTile: React.FC<ExpertiseTileProps> = ({ name, faIconName }) => {
  const tileRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const navigateToExpertise = () => {
    router.push(`/expertise/${slugify(name)}`);
  };

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "expertise" && title == $name][0]{
          bgimage
      }`,
        { name }
      )
      .then((data) => {
        if (data?.bgimage && tileRef.current) {
          tileRef.current.style.backgroundImage = `url(${urlFor(data.bgimage)
            .width(300)
            .url()})`;
        }
      })
      .catch(console.error);
  }, [name]);

  return (
    <div
      className="relative flex flex-col justify-center p-4 pt-8 mt-16 w-[15vw] h-[15vw] max-w-[300px] max-h-[300px] min-w-[180px] min-h-[180px] bg-white border-2 border-gray-200 shadow-md bg-contain bg-center bg-no-repeat cursor-pointer hover:scale-105 transition-transform duration-300"
      ref={tileRef}
      onClick={navigateToExpertise}
      style={{ cursor: "pointer" }}
    >
      <div className="h-[70px] w-[70px] rounded-full bg-white border-2 border-[var(--brand-red)] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20">
      <i className={`${faIconName} text-[1.7rem]`} />
      </div>
      <div className="flex flex-col min-h-[80%] opacity-0 transition-opacity duration-400 ease-in-out group-hover:opacity-100">
        <h2 className="text-center font-quicksand my-4 flex-5 flex items-center justify-center text-[1.5vw] md:text-[1.5rem]">{name}</h2>
      </div>
      <Link href={`/expertise/${slugify(name)}`} className="inline-block px-4 py-2 text-white bg-red-500 rounded-2xl text-center font-bold font-poppins text-[0.7rem] mx-auto opacity-0 transition-opacity duration-400 ease-in-out group-hover:opacity-100">
        Learn More
      </Link>
    </div>
  );
};

export default ExpertiseTile;
