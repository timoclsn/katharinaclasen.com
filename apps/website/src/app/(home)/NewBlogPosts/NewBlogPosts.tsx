import { BlogTeaser } from "../../../components/BlogTeaser/BlogTeaser";
import { getBlogPosts } from "../../../lib/queries";

export const NewBlogPosts = async () => {
  const blogPosts = await getBlogPosts();
  return (
    <BlogTeaser
      title="Blog"
      description="Irregular writing on UX Design, Life-centered Design, and more..."
      blogPosts={blogPosts}
    />
  );
};
