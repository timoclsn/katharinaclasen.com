"use client";

import { ArrowDown } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Body } from "../../../design-system/Body/Body";
import { Select } from "../../../design-system/Select/Select";
import { Tag } from "../../../design-system/Tag/Tag";

interface Props {
  services: Array<string>;
  topics: Array<string>;
}

export const ProjectFilter = ({ services, topics }: Props) => {
  const nextSearchParams = useSearchParams();
  const searchParams = new URLSearchParams(nextSearchParams);

  const { replace } = useRouter();
  const pathname = usePathname();

  const filter = () => {
    const searchParamsString = searchParams.toString();
    replace(`${pathname}${searchParamsString ? "?" : ""}${searchParamsString}`);
  };

  const handleValueChange = (param: string, value: string) => {
    if (value === "all") {
      searchParams.delete(param);
    } else {
      searchParams.set(param, value);
    }
    filter();
  };

  return (
    <div className="flex flex-wrap justify-between gap-8">
      <div className="flex flex-wrap gap-3">
        <Select
          value={searchParams.get("service") || "all"}
          onValueChange={(value) => {
            handleValueChange("service", value);
          }}
        >
          <Select.Trigger className="outline-none transition-transform duration-100 ease-in hover:scale-105 hover:opacity-80">
            <Tag color="dark" size="xxl" outline="solid">
              <Select.Value />
              <Select.Icon>
                <ArrowDown />
              </Select.Icon>
            </Tag>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content>
              <Select.Viewport>
                <Select.Item value="all">
                  <Select.ItemText>All Services</Select.ItemText>
                </Select.Item>
                {services.map((service) => (
                  <Select.Item key={service} value={service}>
                    <Select.ItemText>{service}</Select.ItemText>
                  </Select.Item>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select>

        <Select
          value={searchParams.get("topic") || "all"}
          onValueChange={(value) => {
            handleValueChange("topic", value);
          }}
        >
          <Select.Trigger className="outline-none transition-transform duration-100 ease-in hover:scale-105 hover:opacity-80">
            <Tag color="dark" size="xxl" outline="dash">
              <Select.Value />
              <Select.Icon>
                <ArrowDown />
              </Select.Icon>
            </Tag>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content>
              <Select.Viewport>
                <Select.Item value="all">
                  <Select.ItemText>All Topics</Select.ItemText>
                </Select.Item>
                {topics.map((topic) => (
                  <Select.Item key={topic} value={topic}>
                    <Select.ItemText>{topic}</Select.ItemText>
                  </Select.Item>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select>
      </div>
      <div className="flex items-center gap-6 self-end">
        <Body size="large" color="dark" priority="secondary">
          Sort by:
        </Body>
        <Select
          value={searchParams.get("sort") || "dateDesc"}
          onValueChange={(value) => {
            handleValueChange("sort", value);
          }}
        >
          <Select.Trigger className="outline-none hover:opacity-80">
            <div className="flex items-center gap-2 text-left text-xl font-medium">
              <Select.Value />
              <Select.Icon>
                <ArrowDown />
              </Select.Icon>
            </div>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content>
              <Select.Viewport>
                <Select.Item value="dateDesc">
                  <Select.ItemText>Date (newest first)</Select.ItemText>
                </Select.Item>
                <Select.Item value="dateAsc">
                  <Select.ItemText>Date (oldest first)</Select.ItemText>
                </Select.Item>
                <Select.Item value="title">
                  <Select.ItemText>Title</Select.ItemText>
                </Select.Item>
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select>
      </div>
    </div>
  );
};
