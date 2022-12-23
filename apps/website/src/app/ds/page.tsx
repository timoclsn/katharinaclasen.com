import { ArrowRight } from "lucide-react";
import { Body } from "../../design-system/Body/Body";
import { Button } from "../../design-system/Button/Button";
import { Heading } from "../../design-system/Heading/Heading";

const DesignSystemPage = () => {
  return (
    <section className="flex flex-col gap-8 p-6">
      <div className="flex w-full gap-8">
        <div className="flex flex-1 flex-col items-start gap-4 p-4 ring-2 ring-contrast-primary-dark">
          <Heading>Buttton</Heading>
          <Button style="solid">Solid</Button>
          <Button style="solid">
            <ArrowRight />
            Solid + Icon
          </Button>
          <Button style="solid" size="large">
            Solid large
          </Button>
          <Button style="outline">Outline</Button>
          <Button style="text">Text</Button>
        </div>

        <div className="flex flex-1 flex-col items-start gap-4 bg-background-dark p-4 ring-2 ring-contrast-primary-dark">
          <Heading className="text-contrast-primary-light">Buttton</Heading>
          <Button style="solid" color="white">
            Solid
          </Button>
          <Button style="solid" color="white">
            <ArrowRight />
            Solid + Icon
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
      </div>

      <div className="flex flex-col items-start gap-4 p-4 ring-2 ring-contrast-primary-dark">
        <Heading>Heading</Heading>
        <Heading level="1">Level 1</Heading>
        <Heading level="2">Level 2</Heading>
        <Heading level="3">Level 3</Heading>
        <Heading level="4">Level 4</Heading>
        <Heading level="5">Level 5</Heading>
      </div>

      <div className="flex flex-col items-start gap-4 p-4 ring-2 ring-contrast-primary-dark">
        <Heading>Body</Heading>
        <Body size="normal">Normal</Body>
        <Body size="large">Large</Body>
        <Body special>Special</Body>
      </div>
    </section>
  );
};

export default DesignSystemPage;
