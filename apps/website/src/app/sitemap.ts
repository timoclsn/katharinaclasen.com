import { getBlogPosts, getProjects } from "../lib/queries";

export const dynamic = "force-dynamic";

const sitemap = async () => {
  const origin = "https://katharinaclasen.com";
  const buildUrl = (path: string) => `${origin}${path}`;

  const pages = [
    "/",
    "/about",
    "/projects",
    "/services",
    "/lifecentereddesign",
    "/blog",
    "/contact",
    "/imprint",
    "/privacy-policy",
  ];

  const projects = await getProjects();

  projects.forEach((project) => {
    pages.push(`/projects/${project.slug}`);
  });

  const blogPosts = await getBlogPosts();

  blogPosts.forEach((blogPost) => {
    pages.push(`/blog/${blogPost.slug}`);
  });

  return pages.map((page) => ({
    url: buildUrl(page),
    lastModified: new Date(),
  }));
};

export default sitemap;
