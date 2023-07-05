import styled from "styled-components";
import Social from "../components/Social";
import Topher from "/topher.jpg";

const TwoCol = styled.div`
  /* display: flex;
  align-items: flex-start;
  justify-content: space-between; */
  img {
    width: 90%;
    @media (min-width: 821px) {
      width: 33%;
    }
    @media (min-width: 415px) {
      float: right;
      width: 42%;
      height: auto;
      margin: 0 0 0 36px;
    }
  }
`;

const Content = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

const Bio = () => (
  <div>
    <section className="content full-width">
      <h3>About Me</h3>
      <h1>Hello World</h1>
      <TwoCol>
        <img src={Topher} alt="Hello, I'm Topher" />
        <Content>
          <p>
            The name is Topher (short for Christopher) and I like making awesome
            things for the web. While I love diving into the latest technologies
            and pushing the limits of what's possible online, I also know how
            important it is to step away from the computer and appreciate life's
            other joys.
          </p>
          <p>
            One of my favorite pastimes is music. I'm a self-proclaimed music
            nerd and a multi-instrumentalist, so you might find me strumming a
            guitar, banging on some keys, or fiddling with guitar pedal knobs in
            my free time.
          </p>
          <p>
            I also enjoy spending quality time with my amazing family, hitting a
            round of golf, catching a soccer match, or immersing myself in the
            world of a Soulsborne video game. But there's nothing quite like
            having a pint of beer in the great outdoors - that's my happy place.
          </p>
          <p>
            If you're looking for a creative and skilled collaborator for your
            next project, please don't hesitate to contact me at{" "}
            <a href="mailto:topher@hellotopher.com" className="inline-link">
              topher@hellotopher.com
            </a>
            . Let's make something awesome together!
          </p>
        </Content>
      </TwoCol>
      <hr />
      <Social />
    </section>
  </div>
);

export default Bio;
