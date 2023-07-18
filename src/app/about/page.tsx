import Image from "next/image";
import Social from "@/components/social";

const About = () => {
  return (
    <div className="flex px-12 pt-24 space-x-6">
      <aside className="basis-1/3">
        <div className="relative h-[512px]">
          <Image
            fill
            src="/topher.jpg"
            alt="Hello World, I'm Christopher"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <Social />
      </aside>
      <article className="text-3xl leading-tight font-light basis-2/3 ">
        <p className="mb-12">
          Hi, I&apos;m Chris “Topher” Young - a software engineering, design,
          and product leader with a passion for creating exceptional web-based
          applications, products, and experiences.
        </p>
        <p className="mb-12">
          Currently looking for my next big opportunity. Previously served at
          Acorns, FTX.
        </p>
        <p className="mb-12">
          My journey began with a passion for blending my Computer Science
          background with compelling, innovative design, ultimately leading me
          to becoming a dynamic engineer and product leader who can seamlessly
          integrate design, technology, and business.
        </p>
        <p className="mb-12">
          At the core of my methodology is a focus on engineering abstraction,
          simplicity, and reusability by strategic use of modern technology
          tools, custom-built design systems, and optimized build processes.
        </p>
        <p className="mb-12">
          While my 10 years of expertise lies in fintech, I have extensive
          experience in the agency space, building award-winning solutions for
          an array of clients ranging from non-profits to startups to
          enterprise-level organizations.
        </p>
      </article>
    </div>
  );
};

export default About;
