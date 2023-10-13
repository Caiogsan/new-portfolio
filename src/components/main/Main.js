import ContactMain from "../../containers/contact-main/ContactMain"
import Header from "../../containers/header/Header"
import Projects from "../../containers/projects/Projects"
import Presentation from "../presentation/Presentation"
import { useContext } from 'react';
import { LanguageContext } from "../../containers/header/LanguageContext";
import Tecnologias from "../../containers/tecnologias/Tecnologias";


function Main(){
    const { language, setLanguage } = useContext(LanguageContext);
    return (
        
        <div className="w-[90%] 2xl:w-[80%] bg-white m-auto">
            <div className="w-[90%] pt-32 m-auto">
                {language === 'ingles' ? <Presentation texto1={"Front-end web developer, technology lover, and a passionate learner."} texto2={"I am a front-end web developer with expertise in React.js and Tailwind Css. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies as i enjoy solving complex problems and learning new skills. I am passionate about technology and love to spend loads of time into coding and studying. That is why i'm always looking for new challenges and opportunities to grow as a developer and as a person."}></Presentation> : <Presentation texto1={"Desenvolvedor Front-end, amante da tecnologia e apaixonado por aprender coisas novas"} texto2={"Eu sou um desenvolvedor front-end especializado em React.js. Tenho experiência na construção de aplicações web 100% escaláveis, seguras e confiáveis usando diversos frameworks e tecnologias. Eu me divirto resolvendo problemas complexos e aprendendo novas habilidades. Sou apaixonado pela tecnologia e adoro gastar horas do meu dia escrevendo códigos e estudando. Estou sempre buscando novos desafios e oportunidades para crescer como desenvolvedor e como pessoa."}></Presentation>}
                <Tecnologias></Tecnologias>
                <Projects></Projects>
            </div>
            
        </div>
    )
}

export default Main