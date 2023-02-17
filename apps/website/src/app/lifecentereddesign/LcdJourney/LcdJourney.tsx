import Image from "next/image";
import { Section } from "../../../components/Section/Section";
import { Body } from "../../../design-system/Body/Body";
import { Heading } from "../../../design-system/Heading/Heading";
import journeyImg from "./journey.jpg";

export const LcdJourney = () => {
  return (
    <Section id="my-lcd-journey" color="secondary">
      <div className="flex flex-col items-center gap-8 lg:flex-row">
        <Image
          src={journeyImg}
          alt="Image of a path"
          className="max-h-[500px] object-contain lg:w-1/2"
        />
        <div className="flex flex-col items-start justify-center gap-8 lg:w-1/2">
          <Heading>My Life-centered Design journey</Heading>
          <Body as="p" priority="secondary" family="serif">
            I first came across the term “Life-centered Design” in 2019 in a
            Podcast Episode called “The Future is Life-Centered” – an Interview
            with Jane Fulton Suri (IDEO) in the Podcast “Mixed Methods”. This
            came at a perfect time, as it coincided with an ever growing feeling
            of “not doing important enough work” and the wish to do more good
            with my time and talents.
            <br />
            <br />
            From that moment on, Life-centered Design was my guiding light. I
            started talking about it on my (at that time) very active Instagram
            account with more than 6k followers back then. I wrote a blogpost
            “From Human-centered to Life-centered Design” that surprisingly got
            a lot of traffic and a good Google ranking. I changed the content of
            my lecture and created a “Life-centered Design Assumption Canvas”
            for my students to create life-centered solutions. I was interviewed
            for a paper around Life-centered Design. We founded the
            Life-centered Design Collective and I launched the
            LifeCenteredDesign.Net hub. I adapted my lecture a couple of times
            in the meanwhile, testing more life-centered tools I created.
            <br />
            <br />
            Even though I became way less active on social media, I still
            release a post from time to time and it almost always has got to do
            with LCD. So it is fare to say that Life-centered Design is an
            important part of my life and I am so happy I now get to share it
            with so many amazing people!
          </Body>
        </div>
      </div>
    </Section>
  );
};
