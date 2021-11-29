import Image from "next/image";

import profilePic from "../public/assets/katharina-clasen.png";

import { Footer } from "../components/Footer";
import { Layout } from "../components/Layout";
import { Navigation } from "../components/Navigation";
import { Social } from "../components/Social";
import { Vita } from "../components/Vita";

export default function Home() {
  return (
    <Layout
      title="Katharina Clasen"
      description="Leiterin Strategie und Design bei Codeatelier, Vorstand in der Makers League e. V. Esslingen, Lehrbeauftragte für UX Design an der Hochschule der Medien und für Mediengestaltung an der Hochschule Esslingen"
    >
      <div className="padding-main">
        <Navigation />
        <div className="text-boxes">
        <Vita
            title="Selfemployed UX Designer"
            date="Since 2013"
            link={{
              url: "https://informationlovers.com",
              name: "Information Lovers",
            }}
            description="Helping businesses create lasting and positive digital experiences."
          />
          <Vita
            title="Formerly: Head of Strategy & UX"
            date="2020 - 2021"
            link={{
              url: "https://codeatelier.com",
              name: "Codeatelier GmbH",
            }}
            description="Building a culture, team and environment to co-create smart
              products & services for a positive future."
          />
          <Vita
            title="Lecturer (Media Design)"
            date="Since 2020"
            link={{
              url: "https://www.hs-esslingen.de",
              name: "University of Applied Sciences Esslingen",
            }}
            description="Exploring how to design digital products that address
              environmental challenges."
          />
          <Vita
            title="Board member"
            date="Since 2019"
            link={{
              url: "https://makersleague.de",
              name: "Makers League",
            }}
            description="Creating space, community & opportunity for important ideas to
              become a reality."
          />
          <Vita
            title="Lecturer (UX Design)"
            date="Since 2014"
            link={{
              url: "https://www.hdm-stuttgart.de",
              name: "Stuttgart Media University",
            }}
            description="Exploring how to design digital products that address
              environmental challenges."
          />
        </div>
      </div>

      <div className="quote-container">
        <div className="quote padding-main-left">
          <figure>
            <blockquote>
              <p>
                „What drives me is the opportunity to co-create a better future
                by the use of life-centered design.“
              </p>
            </blockquote>
            <figcaption>Katharina Clasen</figcaption>
          </figure>
        </div>
        <div className="quote-image">
          <Image
            src={profilePic}
            alt="Portrait of Katharina Clasen"
            quality="100"
            placeholder="blur"
          />
        </div>
      </div>

      <div className="about-container">
        <div className="text padding-main-left">
          <h2>Hi, I am Katha!</h2>
          <p>
          I am a technology enthusiast and creative thinker. I am passionate about the world we life in and want to bring a life-centered view into every part of my life.
            <br />
            Our world is changing so rapidly. There are a lot of great developments but sadly, there are also a lot of bad ones. And I would really like to be a part of the changes for the better. Since I have worked with technology for my whole professional life and have a decade of experience as a problem solver and User Experience expert, I try to find ways to to be a positive impact by combining creative problem solving, strategic design and UX design with technology to find new solutions. For the different parts of my professional life this takes and took different forms:
          </p>
          <h3>Head of Strategy & UX at Codeatelier GmbH (until dec 2021)</h3>
          <p>
          After building my own little UX studio with 2 amazing employees, Tanja and Carine, we joined Codeatelier in early 2020. I was very lucky to be offered a position, in which I was able to build up the UX (research, concept and design) and marketing departments and to form the agencies strategy as part of the companies leadership. For me that meant bringing a life-centered perspective and sustainability into the core of the value system, the mission of the agency and the services. With that in mind I sharpened and defined the overall brand, the processes, values and service offering and made sure that this sharpened perspective was transported through the new website, the content marketing and every touchpoint with our customers.
          </p>
          <h3>
            User Experience Lecturer at Stuttgart Media University and
            University of Applied Sciences Esslingen
          </h3>
          <p>
            I have been teaching UX Design at the Stuttgart Media University
            since early 2014 and at the University of Applied Sciences Esslingen
            since early 2020. In the course, the students learn how to build digital products that create lasting positive experiences. A human-centered approach has always been the underlying foundation. They get acquainted with important UX terms, methods and frameworks and get to apply their learnings practically by creating a concept and design for an app themselves. They conduct interviews, build out personas, create storyboards, build and usability test interactive prototypes and create a visual Screendesign of their app. This semester (and maybe the next to come), I chose to base the course on a recent report by the German Environment Agency (Umweltbundesamt – UBA) around increasing sustainable consumption through digital product information. The students get to envision solutions, that help consumers make more environmentally-friendly decisions.
          </p>
          <h3>Board member at Makers League e. V.</h3>
          <p>
            We are still at the very beginning with the Makers League, an
            association that aims to support makers of all kind (founders,
            freelancers, employees...). My personal goal for my contributions in
            the Makers League is to support ecological and social innovations
            and to help organizations to provide workplaces that respect human
            needs and helps them to self-actualize and thrive.
          </p>
          <br />
          <br />I am still at the very beginning of my Life-centered Design
          journey. I am experimenting and trying to learn a lot. If you want to
          exchange ideas around this topic or have some information to share,
          please fell free to reach out!
        </div>
        <Social />
      </div>
      <Footer />
    </Layout>
  );
}
