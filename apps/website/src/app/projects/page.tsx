import { CalendarDays, Contact } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { z } from "zod";
import { Body } from "../../design-system/Body/Body";
import { Container } from "../../design-system/Container/Container";
import { Heading } from "../../design-system/Heading/Heading";
import { Tag } from "../../design-system/Tag/Tag";
import { queryContent } from "../../lib/sanity";

const ProjectsPage = async () => {
  const projects = await queryContent(
    "*[_type == 'project']{_id, title, 'slug': slug.current, 'image': {'url': image.asset->url, 'alt': image.alt}, 'client': client->name, date, services[]->{title}, topics[]->{title}} | order(date desc)",
    z.array(
      z.object({
        _id: z.string(),
        title: z.string(),
        slug: z.string(),
        image: z.object({
          url: z.string(),
          alt: z.string(),
        }),
        client: z.string(),
        date: z.string(),
        services: z
          .array(
            z.object({
              title: z.string(),
            })
          )
          .nullable(),
        topics: z
          .array(
            z.object({
              title: z.string(),
            })
          )
          .nullable(),
      })
    )
  );

  return (
    <div className="pt-40">
      <Container inset>
        <Heading>Have a look at my projects:</Heading>
        <section className="py-20">
          <ul className="grid grid-cols-1 gap-14 md:grid-cols-2">
            {projects.map((project) => {
              return (
                <li key={project._id}>
                  <Link href={`/projects/${project.slug}`}>
                    <Image
                      src={project.image.url}
                      alt={project.image.alt}
                      width={500}
                      height={500}
                      sizes="100vw, (min-width: 768px) 50vw"
                      className="mb-8 h-auto w-full rounded-6xl"
                    />
                    <Heading className="mb-6">{project.title}</Heading>
                    <div className="flex flex-wrap items-center gap-x-9 gap-y-4">
                      <div className="flex items-center gap-2">
                        <Contact className="text-contrast-secondary-dark" />
                        <Body weight="medium">{project.client}</Body>
                      </div>
                      <div className="flex items-center gap-2">
                        <CalendarDays className="text-contrast-secondary-dark" />
                        <Body weight="medium">
                          {new Date(project.date).getFullYear()}
                        </Body>
                      </div>
                    </div>
                    {(project.services || project.topics) && (
                      <div className="mt-12 flex flex-wrap items-center gap-1">
                        {project.services?.map((service, idx) => {
                          return (
                            <Tag size="normal" key={idx}>
                              {service.title}
                            </Tag>
                          );
                        })}
                        {project.topics?.map((topic, idx) => {
                          return (
                            <Tag size="normal" outline="dash" key={idx}>
                              {topic.title}
                            </Tag>
                          );
                        })}
                      </div>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </Container>
    </div>
  );
};

export default ProjectsPage;
