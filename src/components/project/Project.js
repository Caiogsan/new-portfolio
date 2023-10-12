import { Presentation, ProjectImg } from "./projectExport"
import { html, tailwind, javascript, react } from "../project/projectData";
import { useContext } from "react";
import { LanguageContext } from "../../containers/header/LanguageContext";

function Project(){

    const {language, setLanguage} = useContext(LanguageContext)

    return (
        <div className="w-[90%] bg-white font-navbar m-auto">
            <div className="pt-32">
                <Presentation texto1={language === "ingles" ? "Projects I've made trying to get better every day." : "Projetos que eu construi buscando ser melhor a cada dia"}
                stylesContact={'hidden'}
                stylesGeneral={'w-[80%]  m-auto'}
                stylesTxt={'w-[80%] justify-around'}
                stylesImg={'hidden'}
                texto2={language === "ingles" ? "Over the last year, i have made several projects and i enjoyed doing every one of them, it helped me to study and improve my skills in coding, many of these projects are available right below this text, please go ahead if you want to check it out. I have mostly used React and Tailwind for developing but i'm also familiar with Node, Bootstrap and Jquery, also used GitHub for version management. All of my projects are exclusively done by me, every single code and design of every project, Thank you very much for your time and if you are interested, i would love to talk more about them!" : "Durante o ultimo ano eu consegui finalizar diversos projetos e me diverti criando cada um deles, tenho confiança de que me ajudaram muito a aprimorar minhas habilidades e a entender melhor os estudos. Muitos desses projetos estão exibidos logo abaixo deste texto, por favor vá em frente caso queira dar uma olhada. Eu uso principalmente React e Tailwind para desenvolver mas tambem sou familiarizado com Node, Bootstrap e Jquery, tambem utilizo GitHub para controle de versões. Todos os meus projetos, todos os códigos e todos os designs são feitos exclusivamente por mim, muito obrigado pelo seu tempo e se você estiver interessado, adoraria contar mais sobre qualquer um dos projetos"}
                ></Presentation>
                <div className="pt-14 pb-20 m-auto">
                    <ProjectImg titulo={'HTML/CSS'} tecnologia={html} url1={'https://caiogsan.github.io/Gym-Project/'} url2={'https://caiogsan.github.io/projeto4/'} url3={'https://caiogsan.github.io/projeto1/'}></ProjectImg>
                    <ProjectImg titulo={'Tailwind Css'} tecnologia={tailwind} url1={'https://caiogsan.github.io/Gym-Project/'} url2={'https://caiogsan.github.io/projeto4/'} url3={'https://caiogsan.github.io/projeto1/'}></ProjectImg>
                    <ProjectImg titulo={'Javascript'} tecnologia={javascript} url1={'https://caiogsan.github.io/Gym-Project/'} url2={'https://caiogsan.github.io/projeto4/'} url3={'https://caiogsan.github.io/projeto1/'}></ProjectImg>
                    <ProjectImg titulo={'React'} tecnologia={react} url1={'https://caiogsan.github.io/Gym-Project/'} url2={'https://caiogsan.github.io/projeto4/'} url3={'https://caiogsan.github.io/projeto1/'}></ProjectImg>
                </div>
            </div>
        </div>
    )
}

export default Project