import { Footer } from "../components/Footer";
import { Layout } from "../components/Layout";
import { Navigation } from "../components/Navigation";
import { Social } from "../components/Social";

export default function Imprint() {
  return (
    <Layout
      title="Katharina Clasen | Imprint"
      description="Leiterin Strategie und Design bei Codeatelier, Vorstand in der Makers League e. V. Esslingen, Lehrbeauftragte für UX Design an der Hochschule der Medien und für Mediengestaltung an der Hochschule Esslingen"
    >
      <div className="padding-main">
        <Navigation />
      </div>

      <div className="headline padding-main">
        <h1>Site Notice</h1>
      </div>

      <div className="about-container">
        <div className="text padding-main-left imprint">
          <h2>Information in accordance with Section 5 TMG</h2>
          <br />
          <br />
          Katharina Clasen
          <br />
          Richard-Hirschmann-Str. 14/2
          <br />
          73728 Esslingen
          <br />
          Germany
          <br />
          <h2>Contact Information</h2>
          +49176 44484593
          <br />
          <a href="mailto:katharina@katharinaclasen.de">
            katharina@katharinaclasen.de
          </a>
          <br />
          <a href="katharinaclasen.de" target="_blank">
            katharinaclasen.de
          </a>
          <br />
          <br />
          <h2>Disclaimer</h2>
          <h3>Accountability for content</h3>
          The contents of our pages have been created with the utmost care.
          However, we cannot guarantee the contents' accuracy, completeness or
          topicality. According to statutory provisions, we are furthermore
          responsible for our own content on these web pages. In this matter,
          please note that we are not obliged to monitor the transmitted or
          saved information of third parties, or investigate circumstances
          pointing to illegal activity. Our obligations to remove or block the
          use of information under generally applicable laws remain unaffected
          by this as per §§ 8 to 10 of the Telemedia Act (TMG).
          <h3>Accountability for links</h3>
          Responsibility for the content of external links (to web pages of
          third parties) lies solely with the operators of the linked pages. No
          violations were evident to us at the time of linking. Should any legal
          infringement become known to us, we will remove the respective link
          immediately.
          <h3>Copyright</h3>
          Our web pages and their contents are subject to German copyright law.
          Unless expressly permitted by law, every form of utilizing,
          reproducing or processing works subject to copyright protection on our
          web pages requires the prior consent of the respective owner of the
          rights. Individual reproductions of a work are only allowed for
          private use. The materials from these pages are copyrighted and any
          unauthorized use may violate copyright laws.
          <br />
          <br />
          <i>Quelle: </i>
          <a href="http://www.translate-24h.de" target="_blank">
            translate-24h.de - Das Übersetzungsbüro im Internet
          </a>{" "}
          <br />
          <br />
        </div>
        <Social />
      </div>

      <Footer />
    </Layout>
  );
}
