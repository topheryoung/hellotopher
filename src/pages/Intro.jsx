import Social from "../components/Social";

const Intro = () => (
  <section className="content">
    <h1>Topher Young</h1>
    <p>
      I am a software product and engineering leader currently in Portland, OR
      who specializes in creating highly usable, unique, and captivating
      interactive web/native applications and products.
    </p>
    <p>
      Fintech is my specialty but I have extensive experience in the agency
      world building solutions for non-profits, startups, and enterprise
      clients.
    </p>
    <p>
      I am currently working at{" "}
      <a href="https://embed.com" target="_blank" className="inline-link">
        Embed Financial Technologies
      </a>{" "}
      (acquired by FTX.US).
    </p>
    <hr />
    <Social />
  </section>
);

export default Intro;
