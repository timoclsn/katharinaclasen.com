import { ArrowDown, ArrowRight } from "lucide-react";
import { Body } from "../../design-system/Body/Body";
import { Button } from "../../design-system/Button/Button";
import { Heading } from "../../design-system/Heading/Heading";
import { Tag } from "../../design-system/Tag/Tag";

const DesignSystemPage = () => {
  return (
    <div className="flex flex-col gap-8 p-6">
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
        <Body size="normal">Normal</Body>
        <Body size="large">Large</Body>
        <Body special>Special</Body>
      </section>

      <section className="flex gap-8">
        <div className="flex flex-1 flex-col items-start gap-4 p-4 ring-2 ring-contrast-primary-dark">
          <Heading>Tag Dark</Heading>
          <Tag color="dark" outline="solid" size="normal">
            <ArrowDown />
            Tag normal
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
          <Tag color="dark" outline="solid" size="xxl" state="deselected">
            <ArrowDown />
            Tag deselected
          </Tag>
          <Tag color="dark" outline="solid" size="xxl" state="selected">
            <ArrowDown />
            Tag selected
          </Tag>
          <Tag color="dark" outline="solid" size="xxl" number={1}>
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
          <Tag color="dark" outline="dash" size="xxl" number={1}>
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
          <Tag color="dark" outline="none" size="xxl" number={1}>
            Tag number
          </Tag>
        </div>
        <div className="flex flex-1 flex-col items-start gap-4 bg-background-dark p-4 ring-2 ring-contrast-primary-dark">
          <Heading className="text-contrast-primary-light">Tag Light</Heading>
          <Tag color="light" outline="solid" size="normal">
            <ArrowDown />
            Tag normal
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
          <Tag color="light" outline="solid" size="xxl" state="deselected">
            <ArrowDown />
            Tag deselected
          </Tag>
          <Tag color="light" outline="solid" size="xxl" state="selected">
            <ArrowDown />
            Tag selected
          </Tag>
          <Tag color="light" outline="solid" size="xxl" number={1}>
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
          <Tag color="light" outline="dash" size="xxl" number={1}>
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
          <Tag color="light" outline="none" size="xxl" number={1}>
            Tag number
          </Tag>
        </div>
      </section>
    </div>
  );
};

export default DesignSystemPage;
