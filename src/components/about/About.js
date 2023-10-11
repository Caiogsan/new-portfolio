import Tecnologias from "../../containers/tecnologias/Tecnologias"
import Presentation from "../presentation/Presentation"
import { useContext } from 'react';
import { LanguageContext } from "../../containers/header/LanguageContext";

function About(){

    const {language, setLanguage} = useContext(LanguageContext)
    return (
        <div className="w-[90%] pt-40 bg-white m-auto">
            <div className="w-[90%] m-auto pb-28">
                <Presentation texto1={language === "ingles" ? "My name is Caio Santos. I live in Brazil, Minas Gerais and i am 21 years old." : 'Meu nome é Caio Santos. Eu vivo no Brasil, Minas Gerais e tenho 21 anos de idade.'} texto2={
                
                language === "ingles" ? "I've worked on a variety of projects over the year and I'm very proud of the progress I've made. Many of these projects are open-source and available for others to see. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow and I'm always open to new ideas. Thank you for your time and i hope we can get to know each other better!" : "Eu trabalhei em uma grande variedade de projetos durante o ano e estou muito orgulhoso do progresso que eu venho tendo. Muitos desses projetos são open-source e estão disponiveis para visualização. Caso você esteja interessado em qualquer um dos meus projetos, por favor fique a vontade para avaliar o código e sugerir qualquer tipo de melhoria ou aprimoramento que você tenha em mente, estou sempre aberto para novas ideias ou pensamentos. muito obrigado pelo seu tempo e espero nos vermos novamente!"
                    
                }></Presentation>
                <Tecnologias stylesTitulo={'hidden'} stylesGeral={'pt-8'}></Tecnologias>
            </div>
        </div>
    )
}

export default About