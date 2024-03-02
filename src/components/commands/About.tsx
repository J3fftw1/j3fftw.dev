import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Jeffrey Kosse</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a Geek</HighlightAlt> based in the Netherlands.
      </p>
      <p>
        I won't call my self a developer but I do code sometimes, <br/>
        the languaes I code in are Java and JS. <br/>
        For my job I am not a developer. I currently work as a support engineer. <br/>
        Trying to work up to something with cyber security.
      </p>
    </AboutWrapper>
  );
};

export default About;
