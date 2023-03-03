import { groq } from "next-sanity";
import "server-only";
import { z } from "zod";
import { backgroundColorsList, colorsList } from "./colors";
import { illustrationsList } from "./illustrations/illustrations";
import { markdownToHtml } from "./markdown";
import { queryContent } from "./sanity";

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
        })
      ),
    })
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
        })
      ),
      quotes: z.array(
        z.object({
          text: z.string(),
          author: z.string(),
        })
      ),
    })
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
    })
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
      })
    )
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
    })
  );
};

export const getMetadata = async (id: string) => {
  return await queryContent(
    groq`
      *[_id == '${id}'][0]
      {
        title,
        description,
      }
    `,
    z.object({
      title: z.string(),
      description: z.string(),
    })
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
    })
  );
};
