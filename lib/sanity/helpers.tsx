import { client } from "@/lib/sanity";
import { Article, Partner } from "@/lib/sanity/types";

export const getAllBlogs = async (): Promise<Article[]> => {
  const result = await client.fetch(
    `*[_type == "post"]{
            title,
            slug,
            desc,
            body,
            "author": author -> name,
            "authorTitle": author -> title,
            "authorImage": author -> image,
            mainImage,
        }`,
  );
  return result;
};

export const getBlogDetails = async (slug: string): Promise<Article> => {
  const result = await client.fetch(
    `*[slug.current == $slug]{
      title,
      slug,
      desc,
      mainImage{
        asset->{
          _id,
          url
         }
       },
     body,
    "authorName": author->name,
    "authorTitle": author->title,
    "authorImage": author->image,
    publishedAt,
   }`,
    { slug },
  );
  return result[0];
};

export const getAllPartners = async (): Promise<Partner[]> => {
  const result = await client.fetch(
    `*[_type == "partners"]{
      name,
      state,
      city,
      contact
    }`,
  );

  return result;
};
