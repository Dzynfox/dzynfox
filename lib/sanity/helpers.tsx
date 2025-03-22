import { client } from "@/lib/sanity";
import { Article } from "@/lib/sanity/types";

export const getAllBlogs = async (): Promise<Article[]> => {
  const result = await client.fetch(`*[_type == "post"]{
            title,
            slug,
            desc,
            body,
            "author": author -> name,
            "authorTitle": author -> title,
            "authorImage": author -> image,
            mainImage,
        }`);
  return result;
};
