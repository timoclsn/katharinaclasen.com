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
            description: z.string(),
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