import styled from "styled-components";
import Client from "../components/Client";
import { ReactComponent as Embed } from "../assets/clients/embed.svg";
import { ReactComponent as Acorns } from "../assets/clients/acorns.svg";
import { ReactComponent as Batchgeo } from "../assets/clients/batchgeo.svg";
import { ReactComponent as Gates } from "../assets/clients/gates.svg";
import { ReactComponent as Gigaphoton } from "../assets/clients/gigaphoton.svg";

const ClientList = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Work = () => (
  <div>
    <section className="content">
      <h1>Making Kickass Things for Kickass People</h1>
      <p>
        Over the last 10 years, I have had the privaledge of working with and
        for these awesome companies. For more detail, view my resume.
      </p>
      <hr />
    </section>
    <ClientList className="content full-width">
      <Client
        logo={<Embed />}
        desc="Lead front-end engineer for the Smart Deposit feature/product and the Google Chrome Extension plugin for the financial tech startup, Acorns."
        role="Product Lead / Lead UX & Front-end Engineer"
        date="2020-2023"
        website="https://www.embed.com/"
      />
      <Client
        logo={<Acorns />}
        desc="Lead front-end engineer for the Smart Deposit feature/product and the Google Chrome Extension plugin for the financial tech startup, Acorns."
        role="Senior Software Engineer"
        date="2019-2020"
        website="https://www.acorns.com/"
      />
      <Client
        logo={<Batchgeo />}
        desc="Lead front-end engineer for the Smart Deposit feature/product and the Google Chrome Extension plugin for the financial tech startup, Acorns."
        role="Software Engineer"
        date="2018-2020"
        website="https://www.acorns.com/"
      />
      <Client
        logo={<Gates />}
        desc="Lead front-end engineer for the Smart Deposit feature/product and the Google Chrome Extension plugin for the financial tech startup, Acorns."
        role="Software Engineer"
        date="2018-2020"
        website="https://www.acorns.com/"
      />
      <Client
        logo={<Gigaphoton />}
        desc="Lead front-end engineer for the Smart Deposit feature/product and the Google Chrome Extension plugin for the financial tech startup, Acorns."
        role="Software Engineer"
        date="2016-2019"
        website="https://www.acorns.com/"
      />
    </ClientList>
  </div>
);

export default Work;
