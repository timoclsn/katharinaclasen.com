import { groq } from "next-sanity";
import "server-only";
import { z } from "zod";
import { backgroundColorsList, colorsList } from "./colors";
import { illustrationsList } from "../components/illustrations/illustrations";
import { markdownToHtml } from "./markdown";
import { queryContent } from "./sanity";
import { contexts } from "./projects";

export type AccordeonItems = Awaited<ReturnType<typeof getAccordionItems>>;

export const getAccordionItems = async (id: string) => {
  const { items } = await queryContent(
    groq`
    *[_id == '${id}'][0]
    {
      items[]->{
        illustration,
        title,
        description,
        button{label, href},
        backgroundColor,
        color
      }
    }
    `,
    z.object({
      items: z.array(
        z.object({
          illustration: z.enum(illustrationsList),
          title: z.string(),
          description: z.string().transform((value) => markdownToHtml(value)),
          button: z
            .object({
              label: z.string(),
              href: z.string(),
            })
            .nullable(),
          backgroundColor: z.enum(backgroundColorsList).nullable(),
          color: z.enum(colorsList).nullable(),
        }),
      ),
    }),
  );
  return items;
};

export type CardGridItems = Awaited<
  ReturnType<typeof getCardGridItems>
>["items"];

export const getCardGridItems = async (id: string) => {
  return await queryContent(
    groq`
      *[_id == '${id}'][0]
      {
        title,
        subtitle,
        items[]->{
          illustration,
          title,
          description,
          button{label, href},
          illustration2,
          title2,
          description2,
          button2{label, href},
          backgroundColor,
          customBackgroundColor,
          color,
          border,
          backgroundImage{'url': asset->url, alt},
          image{'url': asset->url, alt},
        },
        quotes[]->{
          text,
          author
        }
      }
    `,
    z.object({
      title: z.string(),
      subtitle: z.string(),
      items: z.array(
        z.object({
          illustration: z.enum(illustrationsList).nullable(),
          title: z.string().nullable(),
          description: z.string().nullable(),
          button: z
            .object({
              label: z.string(),
              href: z.string(),
            })
            .nullable(),
          illustration2: z.enum(illustrationsList).nullable(),
          title2: z.string().nullable(),
          description2: z.string().nullable(),
          button2: z
            .object({
              label: z.string(),
              href: z.string(),
            })
            .nullable(),
          backgroundColor: z.enum(backgroundColorsList).nullable(),
          customBackgroundColor: z.string().nullable(),
          color: z.enum(colorsList).nullable(),
          border: z.boolean().nullable(),
          backgroundImage: z
            .object({
              url: z.string(),
              alt: z.string(),
            })
            .nullable(),
          image: z
            .object({
              url: z.string(),
              alt: z.string(),
            })
            .nullable(),
        }),
      ),
      quotes: z.array(
        z.object({
          text: z.string(),
          author: z.string(),
        }),
      ),
    }),
  );
};

export type Service = Awaited<ReturnType<typeof getService>>;

export const getService = async (id: string) => {
  return await queryContent(
    groq`
      *[_id == '${id}'][0]
      {
        title,
          description,
          quote->{text, author},
          image{'url': asset->url, alt},
      }
    `,
    z.object({
      title: z.string(),
      description: z.string().nullable(),
      quote: z
        .object({
          text: z.string(),
          author: z.string(),
        })
        .nullable(),
      image: z
        .object({
          url: z.string(),
          alt: z.string(),
        })
        .nullable(),
    }),
  );
};

export type ServiceTopics = Awaited<ReturnType<typeof getServiceTopics>>;

export const getServiceTopics = async (id: string) => {
  return await queryContent(
    groq`
    *[_type == 'topic' && service->_id == '${id}']
    {
      title
    }
  `,
    z.array(
      z.object({
        title: z.string(),
      }),
    ),
  );
};

export const getTextSnippet = async (id: string) => {
  return await queryContent(
    groq`
      *[_id == '${id}'][0]
      {
        content,
      }
    `,
    z.object({
      content: z.string(),
    }),
  );
};

export const getMetadata = async (id: string) => {
  return await queryContent(
    groq`
      *[_id == '${id}'][0]
      {
        title,
        description,
        ogImageTitle,
        'ogImageImage': ogImageImage.asset->url,
        ogImageBackgroundColor
      }
    `,
    z.object({
      title: z.string(),
      description: z.string(),
      ogImageTitle: z.string().nullable(),
      ogImageImage: z.string().url().nullable(),
      ogImageBackgroundColor: z.enum(backgroundColorsList).nullable(),
    }),
  );
};

export const getImage = async (id: string) => {
  return await queryContent(
    groq`
      *[_id == '${id}'][0]
      {
        'url': image.asset->url,
        'alt': image.alt,
      }
    `,
    z.object({
      url: z.string().url(),
      alt: z.string(),
    }),
  );
};

export type BlogPost = z.infer<typeof blogPostSchema>;
const blogPostSchema = z.object({
  _id: z.string(),
  slug: z.string(),
  title: z.string(),
  summary: z.string().nullable(),
  image: z.object({
    url: z.string(),
    alt: z.string(),
    border: z.boolean().nullable(),
  }),
  author: z.string(),
  date: z.string(),
  services: z
    .array(
      z.object({
        title: z.string(),
      }),
    )
    .nullable(),
  topics: z
    .array(
      z.object({
        title: z.string(),
      }),
    )
    .nullable(),
  content: z.string(),
});

export const getBlogPosts = async () => {
  return await queryContent(
    groq`
      *[_type == 'blogPost']
      {
        _id,
        'slug': slug.current,
        title,
        summary,
        image{'url': asset->url, alt, border},
        author,
        date,
        services[]->{title},
        topics[]->{title},
        content
      } | order(date desc)
    `,
    z.array(blogPostSchema),
  );
};

export const getBlogPost = async (slug: string) => {
  return await queryContent(
    groq`
      *[_type == 'blogPost' && slug.current == '${slug}'][0]
      {
        _id,
        'slug': slug.current,
        title,
        summary,
        image{'url': asset->url, alt, border},
        author,
        date,
        services[]->{title},
        topics[]->{title},
        content
      }
    `,
    blogPostSchema,
  );
};

export type Project = z.infer<typeof projectSchema>;
const projectSchema = z.object({
  _id: z.string(),
  slug: z.string(),
  title: z.string(),
  hidden: z.boolean().nullable(),
  highlight: z.boolean().nullable(),
  summary: z.string().nullable(),
  image: z.object({
    url: z.string(),
    alt: z.string(),
    border: z.boolean().nullable(),
  }),
  context: z.enum(contexts),
  client: z.string().nullable(),
  date: z.string(),
  period: z.string().nullable(),
  externalLink: z
    .object({
      label: z.string(),
      href: z.string(),
    })
    .nullable(),
  services: z
    .array(
      z.object({
        title: z.string(),
      }),
    )
    .nullable(),
  topics: z
    .array(
      z.object({
        title: z.string(),
      }),
    )
    .nullable(),
  content: z.string(),
});

export const getProjects = async () => {
  return await queryContent(
    groq`
        *[_type == 'project']
        {
          _id,
          'slug': slug.current,
          title,
          hidden,
          highlight,
          summary,
          image{'url': asset->url, alt, border},
          context,
          'client': client->shortName,
          date,
          period,
          externalLink{label, href},
          services[]->{title},
          topics[]->{title},
          content
        } | order(date desc)
      `,
    z.array(projectSchema),
  );
};

export const getProject = async (slug: string) => {
  return await queryContent(
    groq`
      *[_type == 'project' && slug.current == '${slug}'][0]
      {
        _id,
        'slug': slug.current,
        title,
        hidden,
        highlight,
        summary,
        image{'url': asset->url, alt, border},
        context,
        'client': client->shortName,
        date,
        period,
        externalLink{label, href},
        services[]->{title},
        topics[]->{title},
        content
      }
    `,
    projectSchema,
  );
};
