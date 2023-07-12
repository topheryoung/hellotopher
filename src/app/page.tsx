import Image from "next/image";
import { EmblaOptionsType } from "embla-carousel-react";
import Showcase from "@/components/showcase";
import Carousel from "@/components/slider";

export default function Home() {
  return (
    <div className="container pt-24 px-12 space-y-52">
      <h1 className="text-8xl my-48">Developer. Designer. Music Nerd.</h1>

      <Showcase
        index={{ current: 1, total: 1 }}
        name="Embed/FTX"
        header="Building a industry defining clearing &
      custody platform that transforms the ancient ways by building for
      developers by developers"
        roles="Lead Frontend Developer & Product Lead"
        dates="2020-2023"
        desc="Lorem ipsum dolor sit amet consectetur. Venenatis morbi malesuada
      scelerisque placerat donec arcu tincidunt rhoncus praesent. Dapibus
      non porttitor lorem tristique libero. Feugiat egestas est pretium a.
      Integer velit tempus gravida in."
      >
        <Carousel
          slides={[
            {
              src: "/test.png",
              alt: "01",
            },
            {
              src: "/test2.jpg",
              alt: "02",
            },
            {
              src: "/test3.png",
              alt: "03",
            },
          ]}
        />
      </Showcase>

      <article className="relative flex flex-col space-y-12 my-24">
        <div>
          <small>01/05</small>
          <h1 className="text-4xl">
            <strong>Embed/FTX</strong> - Building a industry defining clearing &
            custody platform that transforms the ancient ways by building for
            developers by developers
          </h1>
        </div>
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            fill
            src="/test.png"
            alt="Next.js Logo"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="grid gap-4 grid-cols-2 grid-rows-1">
          <ul>
            <li>Roles: Lead Frontend Developer & Product Leader</li>
            <li>Dates: 2020 - 2023</li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet consectetur. Venenatis morbi malesuada
            scelerisque placerat donec arcu tincidunt rhoncus praesent. Dapibus
            non porttitor lorem tristique libero. Feugiat egestas est pretium a.
            Integer velit tempus gravida in.
          </p>
        </div>
      </article>
    </div>
  );
}
