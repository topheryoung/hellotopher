import Image from "next/image";
import { EmblaOptionsType } from "embla-carousel-react";
import Showcase from "@/components/showcase";
import Carousel from "@/components/slider";

export default function Home() {
  return (
    <div className="container pt-24 px-12 space-y-52">
      <h1 className="text-8xl my-48">Developer. Designer. Music Nerd.</h1>

      <Showcase
        index={{ current: 1, total: 5 }}
        name="Embed/FTX"
        header="Building a industry defining clearing & custody platform that transforms the ancient ways by building an event driven API and UI platform for developers by developers"
        roles="Lead Frontend Developer & Product Lead"
        dates="2020-2023"
        desc="Embed was a fintech startup that challenged the status quo of how clearing and custody of US equities, mutual funds, crypto are done in the industry. This API driven platform launched in 2021 and was acquired by FTX.US in 2022."
      >
        <Carousel
          slides={[
            {
              src: "/embed/branding.png",
              alt: "Embed style guide",
            },
            {
              src: "/embed/documentation.png",
              alt: "Embed API Documentation & Reference Mockup",
            },
            {
              src: "/embed/designlib.png",
              alt: "Embed Design System components",
            },
          ]}
        />
      </Showcase>

      <Showcase
        index={{ current: 2, total: 5 }}
        name="Acorns"
        header="Making passive investing even easier with the launch of the Smart Deposit feature as well as a complete overhaul on the Found Money Chrome Extension"
        roles="Senior Software Engineer"
        dates="2019-2020"
        website="https://acorns.com"
        desc="Acorns Smart Deposit feature was an automatic investment that would take in a users percentage preference and withdraw it based on their anticipated payday. Found Money Chrome Extension was an in-browser bonus earner that would track purchases from Acorns' brand partners"
      >
        <Carousel
          slides={[
            {
              src: "/acorns/sd.png",
              alt: "Acorns Smart Deposit product",
            },
            {
              src: "/acorns/ext.png",
              alt: "Acorns Found Money Chrome Extension",
            },
          ]}
        />
      </Showcase>

      <Showcase
        index={{ current: 3, total: 5 }}
        name="Gigaphoton"
        header="Simple and effective fintech logo product that creates a useable, designer friendly source of truth for the Dow 20 and Nasdaw 100 US financial brands"
        roles="UX/Frontend Developer"
        dates="2018-2029"
        website="https://batchgeo.com"
        desc="Acorns Smart Deposit feature was an automatic investment that would take in a users percentage preference and withdraw it based on their anticipated payday. Found Money Chrome Extension was an in-browser bonus earner that would track purchases from Acorns' brand partners"
      >
        <Carousel
          slides={[
            {
              src: "/gigaphoton/ui.png",
              alt: "Gigaphoton in web browser",
            },
            {
              src: "/gigaphoton/screenset.png",
              alt: "Gigaphoton screen set",
            },
          ]}
        />
      </Showcase>

      <Showcase
        index={{ current: 4, total: 5 }}
        name="Finicons"
        header="Simple and effective fintech logo product that creates a useable, designer friendly 'source of truth' resources for the Dow 20 and Nasdaq 100 US financial brands"
        roles="Founder, Designer, & Developer"
        dates="2023-2023"
        website="https://topheryoung.github.io/finicons/"
        desc="Finicons is a simple, lightweight app (and future API) that can be used as a design resource for fintech products. Logo searching tends to be a convoluted process and getting them into a product can be time and resource consuming."
      >
        <Carousel
          slides={[
            {
              src: "/finicons/app.png",
              alt: "Finicons Home Page",
            },
            {
              src: "/finicons/logoset.png",
              alt: "Finicons logo source",
            },
          ]}
        />
      </Showcase>

      <Showcase
        index={{ current: 5, total: 5 }}
        name="Batchgeo"
        header="Launching tiered pricing and iPad native support for a geocoding powerhouse application that has created over 17 million maps from Excel datasets"
        roles="UX/Frontend Developer"
        dates="2018-2029"
        website="https://batchgeo.com"
        desc="Acorns Smart Deposit feature was an automatic investment that would take in a users percentage preference and withdraw it based on their anticipated payday. Found Money Chrome Extension was an in-browser bonus earner that would track purchases from Acorns' brand partners"
      >
        <Carousel
          slides={[
            {
              src: "/batchgeo/ipadapp.png",
              alt: "Batchgeo Pricing mockup",
            },
            {
              src: "/batchgeo/pricingpage.png",
              alt: "Batchgeo iPad application",
            },
          ]}
        />
      </Showcase>
    </div>
  );
}
