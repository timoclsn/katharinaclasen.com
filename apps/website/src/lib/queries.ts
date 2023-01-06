import { serialize } from "next-mdx-remote/serialize";
import { z } from "zod";
import { backgroundColorsList, colorsList } from "./colors";
import { illustrationsList } from "./illustrations/illustrations";
import { queryContent } from "./sanity";

export type AccordeonItems = Awaited<ReturnType<typeof getAccordionItems>>

export const getAccordionItems = async (id: string) => {
  const result = await queryContent(
    `
    *[_id == '${id}']
    {
      item[]->{
        illustration,
        title,
        description,
        button{label, href},
        backgroundColor,
        color
      }
    }
    `,
    z.array(
      z.object({
        item: z.array(
          z.object({
            illustration: z.enum(illustrationsList),
            title: z.string(),
            description: z.string().transform(async (value) => await serialize(value, {
              mdxOptions: {
                development: false
              },
            })),
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
    )
  );
  return result[0].item;
};

export type CardGridItems = Awaited<ReturnType<typeof getCardGridItems>>;

export const getCardGridItems = async (id: string) => {
  const result = await queryContent(
    `
    *[_id == '${id}']
    {
      item[]->{
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
      }
    }
    `,
    z.array(
      z.object({
        item: z.array(
          z.object({
            illustration: z.enum(illustrationsList).nullable(),
            title: z.string().nullable(),
            description: z.string().transform(async (value) => await serialize(value, {
              mdxOptions: {
                development: false
              },
            })).nullable(),
            button: z
              .object({
                label: z.string(),
                href: z.string(),
              })
              .nullable(),
            illustration2: z.enum(illustrationsList).nullable(),
            title2: z.string().nullable(),
            description2: z.string().transform(async (value) => await serialize(value, {
              mdxOptions: {
                development: false
              },
            })).nullable(),
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
                src: z.string(),
                alt: z.string(),
              })
              .nullable(),
            image: z
              .object({
                src: z.string(),
                alt: z.string(),
              })
              .nullable(),
          })
        ),
      })
    )
  );

  return result[0].item;
};