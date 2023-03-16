import Link from "next/link";
import { ReactNode } from "react";
import { Card } from "../../design-system/Card/Card";
import { Tag } from "../../design-system/Tag/Tag";
import { Markdown } from "../Markdown/Markdown";

interface Props {
  children: ReactNode;
  links?: Array<{
    title: string;
    url: string;
  }>;
}

export const ContentBox = ({ children, links }: Props) => {
  return (
    <Card color="secondary" inset="normal">
      <Markdown>{children}</Markdown>
      {links && (
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-100 ease-in hover:scale-105 active:scale-95"
            >
              <Tag>{link.title}</Tag>
            </Link>
          ))}
        </div>
      )}
    </Card>
  );
};
