import BlogTile from "@/components/BlogTile";
import { getSanityImageURL } from "@/lib/sanity";
import { getAllBlogs } from "@/lib/sanity/helpers";

const Blogs = async () => {
  const blogs = await getAllBlogs();

  return (
    <>
      <h1 className="text-center font-bold text-4xl">Our Featured Blog</h1>
      <div className="my-4 p-4 min-h-[60vh] flex gap-4">
        {blogs.map((blog, i) => (
          <BlogTile
            key={i}
            name={blog.title}
            authorName={blog.author}
            authorTitle={blog.authorTitle}
            authorImageUrl={getSanityImageURL(blog.authorImage)}
            imgUrl={getSanityImageURL(blog.mainImage)}
            slug={blog.slug.current}
            desc={blog.desc}
          />
        ))}
      </div>
    </>
  );
};

export default Blogs;
