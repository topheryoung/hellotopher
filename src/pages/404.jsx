import { Link } from "react-router-dom";

const FourOhFour = () => (
  <section className="content">
    <h3>404</h3>
    <h1>Dude! Where's my page?</h1>
    <p>
      I don't know how it is possible but you have somehow become lost on a 3
      page website. I'm quite impressed actually.
    </p>
    <p>
      <Link to="/" className="inline-link">
        Return back to home
      </Link>
    </p>
    <hr />
  </section>
);

export default FourOhFour;
