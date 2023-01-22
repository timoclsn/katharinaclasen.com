import { groq } from "next-sanity";
import { z } from "zod";
import { Section } from "../../../components/Section/Section";
import { Body } from "../../../design-system/Body/Body";
import { Heading } from "../../../design-system/Heading/Heading";
import { markdownToHtml } from "../../../lib/markdown";
import { queryContent } from "../../../lib/sanity";
import { MyLCDProjectsCarousel } from "./MyLCDProjectsCarousel";

export type Projects = Awaited<ReturnType<typeof queryCarousel>>["items"];

const queryCarousel = async () => {
  const result = await queryContent(
    groq`
    *[_id == 'b3ecfa0d-e710-4955-b798-136dedc97b37']
    {
      title,
      subtitle,
      items[]->{
        title,
        summary,
        externalLink{label, href},
        'slug': slug.current,
        image{'url': asset->url, alt},
      },
    }
    `,
    z.array(
      z.object({
        title: z.string(),
        subtitle: z.string(),
        items: z.array(
          z.object({
            title: z.string(),
            summary: z
              .string()
              .transform(async (value) => markdownToHtml(value))
              .nullable(),
            externalLink: z
              .object({
                label: z.string(),
                href: z.string(),
              })
              .nullable(),
            slug: z.string().nullable(),
            image: z.object({
              url: z.string(),
              alt: z.string(),
            }),
          })
        ),
      })
    )
  );

  return result[0];
};

export const MyLCDProjects = async () => {
  const { title, subtitle, items } = await queryCarousel();
  return (
    <Section id="my-lcd-projects" color="secondary">
      <Heading as="h2" level="1" className="mb-6">
        {title}
      </Heading>
      <Body as="p" size="large" priority="secondary" className="mb-16">
        {subtitle}
      </Body>
      <MyLCDProjectsCarousel projects={items} />
    </Section>
  );
};
