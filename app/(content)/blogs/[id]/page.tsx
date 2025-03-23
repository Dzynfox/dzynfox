import { getBlogDetails } from "@/lib/sanity/helpers";
import { getSanityImageURL } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

interface BlogPageProps {
  id: string;
}

const BlogDetails = async ({ params }: { params: Promise<BlogPageProps> }) => {
  const id = (await params).id;
  const details = await getBlogDetails(id);

  console.log(details);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <header className="mb-6">
        <h1 className="font-bold text-3xl text-center mb-2 text-gray-800">
          {details.title}
        </h1>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 justify-end mb-6 ">
            <Image
              src={getSanityImageURL(details.authorImage)}
              alt=""
              className="rounded-full"
              height={50}
              width={50}
            />
            <p className="text-lg text-gray-700">
              {details.authorName} <br /> {details.authorTitle}
            </p>
          </div>
          <p className="flex text-left  text-gray-500 mb-6">
            {details.publishedAt}
          </p>
        </div>
      </header>
      <div className="relative h-[50vh] w-full mb-6">
        <Image
          src={getSanityImageURL(details.mainImage)}
          alt=""
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="prose lg:prose-xl mx-auto text-gray-700">
        <PortableText value={details.body} />
      </div>
    </div>
  );
};

export default BlogDetails;
