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
    <div className="blog">
      <header>
        <h1 className="font-bold text-xl text-center">{details.title}</h1>
        <p>{details.publishedAt}</p>
        <p>{details.desc}</p>
        <div>
          <Image
            src={getSanityImageURL(details.authorImage)}
            alt=""
            className="authorImage"
            height={200}
            width={200}
          />
          <p>
            {details.authorName} <br /> {details.authorTitle}
          </p>
        </div>
      </header>
      <Image
        src={getSanityImageURL(details.mainImage)}
        alt=""
        height={200}
        width={200}
      />
      <div>
        <PortableText value={details.body} />
      </div>
    </div>
  );
};

export default BlogDetails;
