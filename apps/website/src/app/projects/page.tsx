import { CalendarDays, Contact } from "lucide-react";
import Link from "next/link";
import { z } from "zod";
import { ArticlePreview } from "../../components/ArticlePreview/ArticlePreview";
import { Container } from "../../design-system/Container/Container";
import { Heading } from "../../design-system/Heading/Heading";
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
                    <ArticlePreview
                      title={project.title}
                      titleImage={project.image}
                      metaData={[
                        {
                          icon: Contact,
                          text: project.client,
                        },
                        {
                          icon: CalendarDays,
                          text: new Date(project.date).getFullYear().toString(),
                        },
                      ]}
                      tags={[
                        ...(project.services
                          ? project.services.map(
                              (service) =>
                                ({
                                  outline: "solid",
                                  text: service.title,
                                } as const)
                            )
                          : []),
                        ...(project.topics
                          ? project.topics.map(
                              (topic) =>
                                ({
                                  outline: "dash",
                                  text: topic.title,
                                } as const)
                            )
                          : []),
                      ]}
                    />
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