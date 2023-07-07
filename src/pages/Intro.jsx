import Social from "../components/Social";

const Intro = () => (
  <section className="content">
    <h3>Introduction</h3>
    <h1>Topher Young</h1>
    <p>
      I am a software engineering and product leader with a passion for creating
      exceptional web-based applications and products, building and mentoring
      talented teams, and delivering top-quality software.
    </p>
    <p>
      While my expertise lies in fintech, I have extensive experience in the
      agency space, building solutions for an array of clients ranging from
      non-profits to startups to enterprise-level organizations.
    </p>
    <p>
      Currently, I am looking for my next exciting opportunity. If you are
      interested in working together, contact me at{" "}
      <a href="mailto:topher@hellotopher.com" className="inline-link">
        topher@hellotopher.com
      </a>
    </p>
    <hr />
    <Social />
  </section>
);

export default Intro;
