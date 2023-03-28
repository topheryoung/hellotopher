import Social from "../components/Social";

const Intro = () => (
  <section className="content">
    <h3>Introduction</h3>
    <h1>Topher Young</h1>
    <p>
      I am a software product and engineering leader located in Portland, OR,
      with a passion for creating exceptional web-based applications and
      products, building and mentoring talented teams, and delivering
      top-quality software.
    </p>
    <p>
      While my expertise lies in fintech, I have a extensive of experience in
      the agency space, building solutions for an array of clients ranging from
      non-profits to startups to enterprise-level organizations.
    </p>
    <p>
      Currently, I am applying my skills as a member of the team at{" "}
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
