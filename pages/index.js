import Image from "next/image";

import profilePic from "../public/assets/katharina-clasen.png";

import { Footer } from "../components/Footer";
import { Layout } from "../components/Layout";
import { Navigation } from "../components/Navigation";
import { Social } from "../components/Social";

export default function Home() {
  return (
    <Layout
      title="Katharina Clasen"
      description="Leiterin Strategie und Design bei Codeatelier, Vorstand in der Makers League e. V. Esslingen, Lehrbeauftragte für UX Design an der Hochschule der Medien und für Mediengestaltung an der Hochschule Esslingen"
    >
      <div className="padding-main">
        <Navigation />

        <div className="text-boxes">
          <div className="text-box">
            <h2>Head of Strategy & UX</h2>
            <h3>Since 2020</h3>
            <div className="text-box-link">
              <a href="https://codeatelier.com">@ Codeatelier GmbH</a>
            </div>
            <p>
              Building a culture, team and environment to co-create smart
              products & services for a positive future.
            </p>
          </div>
          <div className="text-box">
            <h2>Lecturer (Media Design)</h2>
            <h3>Since 2020</h3>
            <div className="text-box-link">
              <a href="https://www.hs-esslingen.de">
                @ University of Applied Sciences Esslingen
              </a>
            </div>
            <p>
              Exploring how to design digital products that address
              environmental challenges.
            </p>
          </div>
          <div className="text-box">
            <h2>Board member</h2>
            <h3>Since 2019</h3>
            <div className="text-box-link">
              <a href="https://makersleague.de">@ Makers League</a>
            </div>
            <p>
              Creating space, community & opportunity for important ideas to
              become a reality.
            </p>
          </div>
          <div className="text-box">
            <h2>Lecturer (UX Design)</h2>
            <h3>Since 2014</h3>
            <div className="text-box-link">
              <a href="https://www.hdm-stuttgart.de">
                @ Stuttgart Media University
              </a>
            </div>
            <p>
              Exploring how to design digital products that address
              environmental challenges.
            </p>
          </div>
          <div className="text-box">
            <h2>Formerly: Founder</h2>
            <h3>2013 - 2020</h3>
            <div className="text-box-link">
              <a href="https://informationlovers.com">Information Lovers</a>
            </div>
            <p>Helping businesses create digital experiences.</p>
          </div>
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
            I am a technology enthusiast and creative thinker. I am passionate
            about our environment and want to bring a life-centered view into
            every part of my life.
            <br />
            Our world is changing so rapidly – in many regards not in a good
            way. I would really like to be at least a small part of the solution
            – if there is any. Since I have worked with technology for my whole
            professional life and have a decade of experience as a problem
            solver and User Experience expert, I try to find ways to to be a
            positive impact by combining creative problem solving with
            technology to find new solutions. For the different parts of my
            professional life this takes different forms:
          </p>
          <h3>Head of Strategy & UX at Codeatelier GmbH</h3>
          <p>
            After building my own little UX studio with 2 amazing employees,
            Tanja and Carine, we joined Codeatelier in early 2020. I was very
            lucky to be offered a position, in which I am able to build up the
            UX (research, conept and design) and marketing departments and to
            form the agencies strategy as part of the companies leadership. For
            me that meant bringing a life-centered perspective and
            sustainability into the core of the value system, the mission of the
            agency and our services.
          </p>
          <h3>
            User Experience Lecturer at Stuttgart Media University and
            University of Applied Sciences Esslingen
          </h3>
          <p>
            I have been teaching UX Design at the Stuttgart Media University
            since early 2014 and at the University of Applied Sciences Esslingen
            since early 2020. There I am teaching the students how to build
            digital products that create positive experiences. A user-centered
            approach has always been the basis. During the recent years, I came
            up with a very simple framework to create digital product solutions
            that aim to solve environmental problems. I am still in the testing
            phase with that approach.
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
