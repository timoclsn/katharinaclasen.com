import {
  BookOpen,
  FileText,
  GraduationCap,
  Laptop,
  Newspaper,
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { Card } from "../../design-system/Card/Card";
import { Tag } from "../../design-system/Tag/Tag";
import { Markdown } from "../Markdown/Markdown";

const iconMap = {
  laptop: Laptop,
  document: FileText,
  book: BookOpen,
  course: GraduationCap,
  article: Newspaper,
} as const;

interface Props {
  children: ReactNode;
  links?: Array<{
    title: string;
    url: string;
    icon?: keyof typeof iconMap;
  }>;
}

export const ContentBox = ({ children, links }: Props) => {
  return (
    <Card color="secondary" inset="normal">
      <Markdown size="large">{children}</Markdown>
      {links && (
        <div className="not-prose mt-8 flex flex-wrap items-center gap-2">
          {links.map((link, index) => {
            const { title, url, icon } = link;
            const Icon = icon && iconMap[icon];
            return (
              <Link
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-100 ease-in hover:scale-105 active:scale-95"
              >
                <Tag>
                  {Icon && <Icon />}
                  {title}
                </Tag>
              </Link>
            );
          })}
        </div>
      )}
    </Card>
  );
};
