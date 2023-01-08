import Image from "next/image";
import { Card } from "../../../design-system/Card/Card";
import { Container } from "../../../design-system/Container/Container";
import { Heading } from "../../../design-system/Heading/Heading";
import thinkingImg from "./thinking.png";

export const LcdThinking = () => {
  return (
    <section className="bg-background-primary pb-28">
      <Container inset>
        <Card
          color="secondary"
          className="flex flex-col overflow-hidden lg:flex-row"
        >
          <div className="p-20">
            <Heading level="3" className="mb-8">
              Life-centered Design expands our thinking and doing along two axes
            </Heading>
            <div className="prose max-w-none leading-6">
              <p>
                This is how I view it: Life-centered Design basically expands
                our thinking and doing in design along two axes:
              </p>
              <ol>
                <li>
                  The first one is the time axes. If we want to create a
                  sustainable, or better yet, a regenerative solution, we need
                  to expand the time we consider while designing. Instead of
                  looking only at what serves short-sighted human desires or
                  current problems of users, we also consider indirect and
                  long-term effects of a solution and off all its parts. Another
                  way the time-axes is being expanded is regarding the lifetime
                  of a solution. In Life-centered Design, we consider the whole
                  life-span of a solution – from it’s building blocks all the
                  way to whatever remains of it and the effects that has.
                  Ideally creating a circle, where the remaining parts can be
                  used to create something new or where the solution or parts of
                  it regenerate something else.
                </li>
                <li>
                  The second one is the Stakeholder axes. Instead of only
                  looking at human needs and human problems, in Life-centered
                  Design we consider the needs of all life and address
                  challenges that non-human life is facing. We not only want to
                  make sure that our solutions do not harm non-human life, we
                  also need to start builidng products, services, and systems
                  that serve or regenrate non-human life.
                </li>
              </ol>
            </div>
          </div>
          <div className="w-1/3 flex-none">
            <Image
              src={thinkingImg}
              alt="Image of some crossroads from the top."
              className="hidden h-full w-full object-cover lg:block"
            />
          </div>
        </Card>
      </Container>
    </section>
  );
};
