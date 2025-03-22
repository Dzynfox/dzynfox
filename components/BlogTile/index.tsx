import Image from "next/image";
import Link from "next/link";

interface IBlogTileProps {
  imgUrl: string;
  name: string;
  authorName: string;
  authorTitle: string;
  authorImageUrl: string;
  slug: string;
  desc: string;
}

const BlogTile = ({
  imgUrl,
  name,
  authorName,
  authorTitle,
  authorImageUrl,
  slug,
  desc,
}: IBlogTileProps) => {
  return (
    <div className="w-[600px] h-[300px] flex border cursor-pointer">
      <div className="h-full w-1/3 relative shrink-0">
        <Image src={imgUrl} alt={name} fill className="object-cover" />
      </div>
      <div className="p-4 flex flex-col">
        <h2 className="font-bold text-lg">{name}</h2>
        <p className="my-4 max-h-[100px] line-clamp-4">{desc}</p>
        <div className="flex gap-4 items-center mt-auto">
          <div className="w-fit rounded-full overflow-hidden">
            <Image
              src={authorImageUrl}
              alt={authorName}
              height={50}
              width={50}
              className="object-cover"
            />
          </div>
          <p className="font-medium">
            {authorName} <br /> {authorTitle}
          </p>
        </div>
        <Link href={`/blogs/${slug}`} className="underline ml-auto">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogTile;
