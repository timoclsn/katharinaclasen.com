"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Accordion } from "../../design-system/Accordion/Accordion";
import { Body } from "../../design-system/Body/Body";
import { Button } from "../../design-system/Button/Button";
import { Heading } from "../../design-system/Heading/Heading";
import { Tag } from "../../design-system/Tag/Tag";

const DesignSystemPage = () => {
  return (
    <div className="mt-32 flex flex-col gap-8 p-6">
      <Heading level="1">Design System</Heading>

      <section>
        <Accordion type="single" defaultValue="item-1">
          <Accordion.Item value="item-1" color="blueExtreme">
            <Accordion.Trigger className="flex flex-col justify-end">
              <Heading color="light" className="lg:writing-vertical">
                Trigger
              </Heading>
            </Accordion.Trigger>
            <Accordion.Content>
              <div className="flex h-full flex-col lg:justify-end">
                <Body as="p" color="light">
                  Content
                </Body>
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-2" color="redCandy">
            <Accordion.Trigger className="flex flex-col justify-end">
              <Heading className="lg:writing-vertical">Trigger</Heading>
            </Accordion.Trigger>
            <Accordion.Content>
              <div className="flex h-full flex-col lg:justify-end">
                <Body as="p">Content</Body>
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-3" color="stone">
            <Accordion.Trigger className="flex flex-col justify-end">
              <Heading className="lg:writing-vertical">Trigger</Heading>
            </Accordion.Trigger>
            <Accordion.Content>
              <div className="flex h-full flex-col lg:justify-end">
                <Body as="p">Content</Body>
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-4" color="dark">
            <Accordion.Trigger className="flex flex-col justify-end">
              <Heading color="light" className="lg:writing-vertical">
                Trigger
              </Heading>
            </Accordion.Trigger>
            <Accordion.Content>
              <div className="flex h-full flex-col lg:justify-end">
                <Body as="p" color="light">
                  Content
                </Body>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>

      <section className="flex w-full gap-8">
        <div className="flex flex-1 flex-col items-start gap-4 p-4 ring-2 ring-contrast-primary-dark">
          <Heading>Buttton Dark</Heading>
          <Button style="solid">Solid</Button>
          <Button style="solid">
            Solid + Icon
            <ArrowRight />
          </Button>
          <Button style="solid" size="large">
            Solid large
          </Button>
          <Button style="outline">Outline</Button>
          <Button style="text">Text</Button>
        </div>

        <div className="flex flex-1 flex-col items-start gap-4 bg-background-dark p-4 ring-2 ring-contrast-primary-dark">
          <Heading className="text-contrast-primary-light">
            Buttton Light
          </Heading>
          <Button style="solid" color="white">
            Solid
          </Button>
          <Button style="solid" color="white">
            Solid + Icon
            <ArrowRight />
          </Button>
          <Button style="solid" size="large" color="white">
            Solid large
          </Button>
          <Button style="outline" color="white">
            Outline
          </Button>
          <Button style="text" color="white">
            Text
          </Button>
        </div>
      </section>

      <section className="flex flex-col items-start gap-4 p-4 ring-2 ring-contrast-primary-dark">
        <Heading>Heading</Heading>
        <Heading level="1">Level 1</Heading>
        <Heading level="2">Level 2</Heading>
        <Heading level="3">Level 3</Heading>
        <Heading level="4">Level 4</Heading>
        <Heading level="5">Level 5</Heading>
      </section>

      <section className="flex flex-col items-start gap-4 p-4 ring-2 ring-contrast-primary-dark">
        <Heading>Body</Heading>
        <Body as="p" size="normal">
          Normal
        </Body>
        <Body as="p" size="large">
          Large
        </Body>
        <Body as="p" family="serif">
          Special
        </Body>
      </section>

      <section className="flex gap-8">
        <div className="flex flex-1 flex-col items-start gap-4 p-4 ring-2 ring-contrast-primary-dark">
          <Heading>Tag Dark</Heading>
          <Tag color="dark" outline="solid" size="normal">
            <ArrowDown />
            Tag normal
          </Tag>
          <Tag color="dark" outline="solid" size="normal" prepend={1}>
            Tag number
          </Tag>
          <Tag
            color="dark"
            outline="solid"
            size="normal"
            prepend={
              <Image
                src="/clients/bauder.png"
                alt="logo"
                width={94}
                height={30}
              />
            }
          >
            Tag normal Client
          </Tag>
          <Tag color="dark" outline="solid" size="large">
            <ArrowDown />
            Tag large
          </Tag>
          <Tag color="dark" outline="solid" size="xl">
            <ArrowDown />
            Tag xl
          </Tag>
          <Tag color="dark" outline="solid" size="xxl">
            <ArrowDown />
            Tag xxl
          </Tag>
          <Tag
            color="dark"
            outline="solid"
            size="xxl"
            prepend={
              <Image
                src="/clients/bauder.png"
                alt="logo"
                width={100}
                height={30}
              />
            }
          >
            Tag Client
          </Tag>
          <Tag color="dark" outline="solid" size="xxl" state="deselected">
            <ArrowDown />
            Tag deselected
          </Tag>
          <Tag color="dark" outline="solid" size="xxl" state="selected">
            <ArrowDown />
            Tag selected
          </Tag>
          <Tag color="dark" outline="solid" size="xxl" prepend={1}>
            Tag number
          </Tag>
          <Tag color="dark" outline="dash" size="normal">
            <ArrowDown />
            Tag normal
          </Tag>
          <Tag color="dark" outline="dash" size="large">
            <ArrowDown />
            Tag large
          </Tag>
          <Tag color="dark" outline="dash" size="xl">
            <ArrowDown />
            Tag xl
          </Tag>
          <Tag color="dark" outline="dash" size="xxl">
            <ArrowDown />
            Tag xxl
          </Tag>
          <Tag color="dark" outline="dash" size="xxl" prepend={1}>
            Tag number
          </Tag>
          <Tag color="dark" outline="none" size="normal">
            <ArrowDown />
            Tag normal
          </Tag>
          <Tag color="dark" outline="none" size="large">
            <ArrowDown />
            Tag large
          </Tag>
          <Tag color="dark" outline="none" size="xl">
            <ArrowDown />
            Tag xl
          </Tag>
          <Tag color="dark" outline="none" size="xxl">
            <ArrowDown />
            Tag xxl
          </Tag>
          <Tag color="dark" outline="none" size="xxl" prepend={1}>
            Tag number
          </Tag>
        </div>

        <div className="flex flex-1 flex-col items-start gap-4 bg-background-dark p-4 ring-2 ring-contrast-primary-dark">
          <Heading className="text-contrast-primary-light">Tag Light</Heading>
          <Tag color="light" outline="solid" size="normal">
            <ArrowDown />
            Tag normal
          </Tag>
          <Tag color="light" outline="solid" size="normal" prepend={1}>
            Tag number
          </Tag>
          <Tag
            color="light"
            outline="solid"
            size="normal"
            prepend={
              <Image
                src="/clients/bauder.png"
                alt="logo"
                width={94}
                height={30}
              />
            }
          >
            Tag normal Client
          </Tag>
          <Tag color="light" outline="solid" size="large">
            <ArrowDown />
            Tag large
          </Tag>
          <Tag color="light" outline="solid" size="xl">
            <ArrowDown />
            Tag xl
          </Tag>
          <Tag color="light" outline="solid" size="xxl">
            <ArrowDown />
            Tag xxl
          </Tag>
          <Tag
            color="light"
            outline="solid"
            size="xxl"
            prepend={
              <Image
                src="/clients/bauder.png"
                alt="logo"
                width={94}
                height={30}
              />
            }
          >
            Tag Client
          </Tag>
          <Tag color="light" outline="solid" size="xxl" state="deselected">
            <ArrowDown />
            Tag deselected
          </Tag>
          <Tag color="light" outline="solid" size="xxl" state="selected">
            <ArrowDown />
            Tag selected
          </Tag>
          <Tag color="light" outline="solid" size="xxl" prepend={1}>
            Tag number
          </Tag>
          <Tag color="light" outline="dash" size="normal">
            <ArrowDown />
            Tag normal
          </Tag>
          <Tag color="light" outline="dash" size="large">
            <ArrowDown />
            Tag large
          </Tag>
          <Tag color="light" outline="dash" size="xl">
            <ArrowDown />
            Tag xl
          </Tag>
          <Tag color="light" outline="dash" size="xxl">
            <ArrowDown />
            Tag xxl
          </Tag>
          <Tag color="light" outline="dash" size="xxl" prepend={1}>
            Tag number
          </Tag>
          <Tag color="light" outline="none" size="normal">
            <ArrowDown />
            Tag normal
          </Tag>
          <Tag color="light" outline="none" size="large">
            <ArrowDown />
            Tag large
          </Tag>
          <Tag color="light" outline="none" size="xl">
            <ArrowDown />
            Tag xl
          </Tag>
          <Tag color="light" outline="none" size="xxl">
            <ArrowDown />
            Tag xxl
          </Tag>
          <Tag color="light" outline="none" size="xxl" prepend={1}>
            Tag number
          </Tag>
        </div>
      </section>
    </div>
  );
};

export default DesignSystemPage;