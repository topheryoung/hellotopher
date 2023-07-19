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
        name="Embed/FTX.US"
        header="Revolutionizing clearing & custody with an event-driven API and dedicated UI platform that modernizes archaic practices, setting new standards in the industry."
        roles="Lead Frontend Developer | Product Lead"
        dates="2020 - 2023"
        desc="Embed, a trailblazing fintech startup, disrupted the norms of clearing and custody for US equities, mutual funds, and crypto. Its API-driven platform debuted in 2021 and was acquired by FTX.US in 2022."
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
        header="Simplifying passive investing through the launch of Smart Deposit and the Found Money Chrome Extension, empowering users with seamless investment opportunities."
        roles="Senior Software Engineer"
        dates="2019 - 2020"
        website="https://acorns.com"
        desc="Acorns Smart Deposit feature automated investments by withdrawing a user's preferred percentage on their anticipated payday. The Found Money Chrome Extension tracked purchases from Acorns' brand partners, rewarding users with in-browser bonuses for their transactions."
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
        header="Creating an immersive internal visualization Product Roadmap by harnessing isometric design and leveraging the power of D3.js for a dynamic and engaging user experience."
        roles="Frontend Developer & UX Designer"
        dates="2018 - 2019"
        desc="After architecting their Fabscape UI platform, Gigaphoton contracted me out to build out an interactive, highly visual representation of their product roadmap to be used in a wide array of presentations."
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
        header="Crafting a sleek and impactful fintech logo product that serves as a reliable and user-friendly resource, providing designers with a 'source of truth' for US financial brands."
        roles="Founder, Designer, & Developer"
        dates="2023 - Current"
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
        header="Introduced tiered pricing, iPad native support, and website redesigns to a powerful geocoding application, which has generated over 17 million maps from Excel datasets."
        roles="UX/Frontend Developer"
        dates="2018 - 2019"
        website="https://batchgeo.com"
        desc="Batchgeo sought expert design and frontend assistance to revamp their website and tiered pricing system. Additionally, we collaborated on implementing a robust search feature for their native applications and single-page application (SPA), enhancing their overall user experience."
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
