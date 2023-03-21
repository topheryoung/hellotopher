import styled from "styled-components";
import Client from "../components/Client";
import { ReactComponent as Embed } from "../assets/clients/embed.svg";
import { ReactComponent as Acorns } from "../assets/clients/acorns.svg";
import { ReactComponent as Batchgeo } from "../assets/clients/batchgeo.svg";
import { ReactComponent as Gates } from "../assets/clients/gates.svg";
import { ReactComponent as Gigaphoton } from "../assets/clients/gigaphoton.svg";
import { ReactComponent as Siemens } from "../assets/clients/siemens.svg";
import { ReactComponent as Vibe } from "../assets/clients/vibevans.svg";

const ClientList = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Work = () => (
  <div>
    <section className="content">
      <h3>Work Experience</h3>
      <h1>Partnering with Industry Leaders</h1>
      <p>
        Over the past decade, I've had the privilege of collaborating with some
        amazing companies and startups. My career journey began with a passion
        for blending my Computer Science background with compelling design,
        ultimately leading me to become a dynamic engineer and product leader
        who can seamlessly integrate design, technology, and business.
      </p>
      <p>
        At the core of my methodology is a focus on engineering abstraction,
        simplicity, and reusability by strategic use of modern technology tools,
        custom-built design systems, and optimized build processes.
      </p>
      <p>
        For further insight into my background and experience, please refer to
        my{" "}
        <a
          href="/topher_young_resume.pdf"
          target="_blank"
          className="inline-link"
        >
          resume
        </a>
        .
      </p>
      <hr />
    </section>
    <ClientList className="content full-width">
      <Client
        logo={<Embed />}
        desc="Defined, prioritized, managed, and delivered web/UI products for Embed Financial Technologies that resulted in an acquisition from FTX.US in July 2022."
        role="Product Lead / Lead UX & Front-end Engineer"
        date="2020-2023"
        website="https://www.embed.com/"
      />
      <Client
        logo={<Acorns />}
        desc="Led front-end development and launch of the Acorns Smart Deposit product and the redesigned, refactored Found Money Google Chrome Extension."
        role="Senior Software Engineer"
        date="2019-2020"
        website="https://www.acorns.com/"
      />
      <Client
        logo={<Batchgeo />}
        desc="Designed, developed, and collaborated on the native UI and settings feature for the GPS mapping web and native application Batchgeo."
        role="Front-end Engineer / UX Designer"
        date="2018-2020"
        website="https://batchgeo.com/"
      />
      <Client
        logo={<Gates />}
        desc="Developed and launched an internal research dashboard for the Gates Foundation that leveraged data visualization and GPS mapping."
        role="[Contractor] Full-stack Engineer"
        date="2018-2020"
        website="https://www.acorns.com/"
      />
      <Client
        logo={<Gigaphoton />}
        desc="Launched the two Gigaphoton software products: Fabscape, a customizable platform to manage equipment data and an internal interactive visualization Product Roadmap."
        role="Tech Lead / Full-stack Engineer"
        date="2016-2019"
        website="https://www.gigaphoton.com/"
      />
      <Client
        logo={<Vibe />}
        desc="Full-stack contractor for the LA-based startup, Vibe Vans. Built and launched their iOS/Android application to integrate into their IoT service for their van fleet."
        role="Full-stack Engineer"
        date="2018-2019"
        website="https://www.gigaphoton.com/"
      />
      <Client
        logo={<Siemens />}
        desc="Front-end engineer contracted via Graybox for Mentor Graphics (now Siemens) responsible for building their internal employee Time Tracking mobile/web application."
        role="[Contractor] Front-end Engineer"
        date="2016-2017"
        website="https://www.gigaphoton.com/"
      />
    </ClientList>
  </div>
);

export default Work;
