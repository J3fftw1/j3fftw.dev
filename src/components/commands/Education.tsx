import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Mbo ICT-beheerder (Niveau 4 - Crebo 25189)",
    desc: "Landstede | 2018 ~ 2020",
  },
  {
    title: "Mbo Medewerker beheer ICT (Niveau 3 - Crebo 25191)",
    desc: "Alfa College | 2016 ~ 2018",
  },
];

export default Education;
