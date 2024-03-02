import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        Here you can see the projects I am currently working on. <br/>
        It's something...
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "No550.com",
    desc: "No550 is a project I have been working of with a great friend.",
    url: "https://no550.com/",
  },
  {
    id: 2,
    title: "Slimefun",
    desc: "Slimefun is a Java project were I try to actively work on.",
    url: "https://github.com/Slimefun/Slimefun4",
  },
  {
    id: 3,
    title: "Panda Progress Bar",
    desc: "Panda progress bar is a progress bar for InteliJ which shows my love for pandas.",
    url: "https://github.com/J3fftw1/PandaProgressBar",
  },
  {
    id: 4,
    title: "You won't pass IPv4",
    desc: "This is a joke website which makes IPv4 not pass.",
    url: "https://youwontpassipv4.com/",
  },
  {
    id: 5,
    title: "You won't pass IPv6",
    desc: "This is a joke website which makes IPv6 not pass.",
    url: "https://youwontpassipv6.com/",
  },
];

export default Projects;
