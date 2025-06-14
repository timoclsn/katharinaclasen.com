"use client";

import { ArrowDown } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Body } from "../../../design-system/Body/Body";
import { Select } from "../../../design-system/Select/Select";
import { Tag } from "../../../design-system/Tag/Tag";
import { track } from "../../../lib/tracking";

interface Props {
  services: Array<string>;
  topics: Array<string>;
}

export const ProjectFilter = ({ services, topics }: Props) => {
  const nextSearchParams = useSearchParams();
  const searchParams = new URLSearchParams(nextSearchParams.toString());

  const { replace } = useRouter();
  const pathname = usePathname();

  const filter = () => {
    const searchParamsString = searchParams.toString();
    replace(`${pathname}${searchParamsString ? "?" : ""}${searchParamsString}`);
  };

  const handleValueChange = (
    param: "service" | "topic" | "sort",
    value: string,
  ) => {
    searchParams.set(param, value);
    filter();

    // Tracking
    if (param === "service") {
      track("Filter projects by service", {
        service: value,
      });
    }

    if (param === "topic") {
      track("Filter projects by topic", {
        topic: value,
      });
    }

    if (param === "sort") {
      track("Sort projects by", {
        sort: value,
      });
    }
  };

  return (
    <div className="flex flex-wrap justify-between gap-8">
      <div className="flex flex-wrap gap-3">
        <Select
          value={searchParams.get("service") || undefined}
          onValueChange={(value) => {
            handleValueChange("service", value);
          }}
        >
          <Select.Trigger className="outline-hidden transition-transform duration-100 ease-in will-change-transform hover:scale-105">
            <Tag color="dark" size="xxl" outline-solid="solid">
              <Select.Value placeholder="Services" />
              <Select.Icon>
                <ArrowDown />
              </Select.Icon>
            </Tag>
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="all">All Services</Select.Item>
            <Select.Separator />
            {services.map((service) => (
              <Select.Item key={service} value={service}>
                {service}
              </Select.Item>
            ))}
          </Select.Content>
        </Select>

        <Select
          value={searchParams.get("topic") || undefined}
          onValueChange={(value) => {
            handleValueChange("topic", value);
          }}
        >
          <Select.Trigger className="outline-hidden transition-transform duration-100 ease-in hover:scale-105 hover:opacity-80">
            <Tag color="dark" size="xxl" outline-solid="dash">
              <Select.Value placeholder="Topics" />
              <Select.Icon>
                <ArrowDown />
              </Select.Icon>
            </Tag>
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="all">All Topics</Select.Item>
            <Select.Separator />
            {topics.map((topic) => (
              <Select.Item key={topic} value={topic}>
                {topic}
              </Select.Item>
            ))}
          </Select.Content>
        </Select>
      </div>

      <div className="flex items-center gap-6 self-end">
        <Body size="large" color="dark" priority="secondary">
          Sort by:
        </Body>
        <Select
          defaultValue="dateDesc"
          value={searchParams.get("sort") || undefined}
          onValueChange={(value) => {
            handleValueChange("sort", value);
          }}
        >
          <Select.Trigger className="flex items-center gap-2 text-left text-xl font-medium outline-hidden hover:opacity-80">
            <Select.Value />
            <Select.Icon>
              <ArrowDown />
            </Select.Icon>
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="dateDesc">Date (newest first)</Select.Item>
            <Select.Item value="dateAsc">Date (oldest first)</Select.Item>
            <Select.Item value="title">Title</Select.Item>
          </Select.Content>
        </Select>
      </div>
    </div>
  );
};
