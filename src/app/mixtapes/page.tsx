import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chris Topher Young - Mixtapes",
};

const Mixtapes = () => {
  return (
    <div className="container pt-24 px-12 space-y-12 mb-12 lg:mb-auto">
      <h1 className="text-2xl lg:text-4xl">
        <strong>Mixtapes</strong>
        <span className="font-light">
          {" "}
          — Ignite your creativity with personally curated mixtapes for tech
          enthusiasts. Enter the flow state as captivating melodies guide you,
          amplifying focus and sparking innovation.
        </span>
      </h1>

      <article className="flex flex-col items-center bg-[#27363E] grow-0 shrink-0 basis-full p-12 space-y-6 text-white">
        <Image
          src="/mixtapes/tempest.png"
          alt="Test"
          height={395}
          width={500}
          priority
          className="ml-[40px] lg:ml-[100px]"
        />
        <h2 className="text-xl">Tempests of Titan</h2>
        <p className="text-center max-w-xl">
          A playlist that thrusts you into a world of captivating chaos and
          exhilaration. Imagine the slipstream of an F1 Grand Prix or the
          mind-bending velocity of a lunar slingshot. Brace for a wall of sonic
          bliss.
        </p>
        <a
          href="https://open.spotify.com/playlist/2Q6h0XfilzS4PvKS3iznSQ?si=34c4db02ec8e4e27"
          target="_blank"
          className="border py-2 px-4"
        >
          Listen Now
        </a>
      </article>
      <article className="flex flex-col items-center bg-[#E53F26] grow-0 shrink-0 basis-full p-12 space-y-6 text-white">
        <Image
          src="/mixtapes/hakone.png"
          alt="Test"
          height={395}
          width={500}
          priority
          className="ml-[40px] lg:ml-[100px]"
        />
        <h2 className="text-xl">Train to Hakone</h2>
        <p className="text-center max-w-xl">
          Embark on a sonic journey inspired by a trip to Japan and a Shinkansen
          ride to Hakone. This vibrant playlist captures the playful essence of
          the region, blending the picturesque Japanese countryside with the
          allure of volcanic landscapes and soothing thermal hot springs.
        </p>
        <a
          href="https://open.spotify.com/playlist/4WlDF6PrYM1u4Jev2uvhQk?si=c62a715b17f74e4a"
          target="_blank"
          className="border py-2 px-4"
        >
          Listen Now
        </a>
      </article>
    </div>
  );
};

export default Mixtapes;
