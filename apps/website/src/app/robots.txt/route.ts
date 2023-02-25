export const GET = (request: Request) => {
  const url = new URL(request.url);
  const origin = `${url.protocol}//${url.host}`;
  const buildUrl = (path: string) => `${origin}${path}`;

  return new Response(`
    User-agent: *
    Allow: /
    Sitemap: ${buildUrl("/sitemap.xml")}
`);
};
