import ContactMain from "../../containers/contact-main/ContactMain";
import Header from "../../containers/header/Header";
import Projects from "../../containers/projects/Projects";
import Presentation from "../presentation/Presentation";
import { useContext } from "react";
import { LanguageContext } from "../../containers/header/LanguageContext";
import Tecnologias from "../../containers/tecnologias/Tecnologias";

function Main() {
  const { language, setLanguage } = useContext(LanguageContext);
  const date = new Date();
  const hour = date.getHours();
  const greeting =
    hour > 12 && hour < 18
      ? "Good afternoon!"
      : hour > 18 && hour < 4
      ? "Good morning!"
      : "Good night!";
  return (
    <div className="w-[90%] 2xl:w-[80%] bg-white m-auto">
      <div className="w-[90%] pt-40 m-auto">
        {language === "ingles" ? (
          <Presentation
            texto1={`Full-stack developer, technology lover, and a passionate learner.`}
            texto2={`${greeting} I am a full-stack developer with expertise in ReactJs and NodeJs. I have experience in building scalable, secure and reliable web applications using many frameworks and technologies. I enjoy very much solving complex problems and learning new skills along the way. Also am very passionate about technology and love to spend lots of time into coding and researching new awesome breakthroughs.`}
          ></Presentation>
        ) : (
          <Presentation
            texto1={`Desenvolvedor Full-stack, amante da tecnologia e apaixonado por novos aprendizados!`}
            texto2={`Eu sou um desenvolvedor Full-stack especializado em ReactJs e NodeJs. Tenho uma boa experiência na construção de aplicações web 100% escaláveis, seguras e confiáveis usando diversos frameworks e tecnologias. Eu me divirto muito resolvendo problemas complexos para aumentar cada vez mais o meu conhecimento. Sou apaixonado pela tecnologia e adoro gastar horas do meu dia escrevendo códigos e descobrindo os novos avanços da atualidade.`}
          ></Presentation>
        )}
        <Tecnologias></Tecnologias>
        <Projects></Projects>
      </div>
    </div>
  );
}

export default Main;
