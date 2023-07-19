import Image from "next/image";
import Social from "@/components/social";

const About = () => {
  return (
    <div className="container pt-24 px-12">
      <article className="relative flex flex-col space-y-12 mt-24">
        <h1 className="text-4xl">
          <strong>Hello World</strong>
          <span className="font-light">
            {" "}
            — I&apos;m Chris “Topher” Young - a software engineering, design,
            and product leader with a passion for creating exceptional web-based
            applications, products, and experiences.
          </span>
        </h1>
        <div className="relative grow-0 shrink-0 basis-full aspect-video">
          <Image
            fill
            src="/toph0.jpg"
            alt="Hello World, I'm Christopher"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="grid gap-4 grid-cols-2 grid-rows-1 font-light">
          <Social />
          <div>
            <p className="mb-4">
              Currently looking for my next big opportunity. Previously served
              at Acorns, FTX.
            </p>
            <p className="mb-4">
              My journey began with a passion for blending my Computer Science
              background with compelling, innovative design, ultimately leading
              me to becoming a dynamic engineer and product leader who can
              seamlessly integrate design, technology, and business.
            </p>
            <p className="mb-4">
              At the core of my methodology is a focus on engineering
              abstraction, simplicity, and reusability by strategic use of
              modern technology tools, custom-built design systems, and
              optimized build processes.
            </p>
            <p className="mb-4">
              While my 10 years of expertise lies in fintech, I have extensive
              experience in the agency space, building award-winning solutions
              for an array of clients ranging from non-profits to startups to
              enterprise-level organizations.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default About;
