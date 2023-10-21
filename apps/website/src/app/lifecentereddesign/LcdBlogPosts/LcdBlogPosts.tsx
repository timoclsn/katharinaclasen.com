import { BlogTeaser } from "../../../components/BlogTeaser/BlogTeaser";
import { getBlogPosts } from "../../../lib/queries";

export const LcdBlogPosts = async () => {
  const blogPosts = await getBlogPosts();
  const lcdBlogPosts = blogPosts.filter(
    (blogPost) =>
      blogPost.topics?.some((topic) => topic.title === "Life-centered Design"),
  );

  return (
    <BlogTeaser
      title="Blog"
      description="Blog Posts about Life-centered Design"
      blogPosts={lcdBlogPosts}
    />
  );
};
