import { Presentation, ProjectImg } from "./projectExport";
import {
  javascript,
  react,
  node,
  typescript
} from "../project/projectData";
import { useContext } from "react";
import { LanguageContext } from "../../containers/header/LanguageContext";

function Project() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="w-[90%] bg-white font-navbar m-auto">
      <div className="pt-32">
        <Presentation
          texto1={
            language === "ingles"
              ? "Projects i've made during these last years."
              : "Projetos que eu construi durante os ultimos anos"
          }
          stylesContact={"hidden"}
          stylesGeneral={"w-[80%]  m-auto"}
          stylesTxt={"md:w-[80%] justify-around"}
          stylesImg={"hidden"}
          texto2={
            language === "ingles"
              ? "During my time as a developer, i have made several projects and i enjoyed doing every one of them, it helped me to study and improve my skills in coding. Many of these projects are available right below this text, please go ahead if you want to check it out. I have mostly used ReactJs and NodeJs with a few using typescript, but i'm also very familiar with Tailwind, Bootstrap, Jquery, NextJs, Jest, and also used GitHub for version management. All of my projects are exclusively done by me, every single code and design of every project, Thank you very much for your time and if you are interested, i would love to talk more about them!"
              : "Durante o meu tempo como desenvolvedor, consegui finalizar diversos projetos e me diverti muito criando cada um deles, tenho confiança de que me ajudaram muito a aprimorar minhas habilidades e a entender melhor essa area. Muitos desses projetos estão exibidos logo abaixo deste texto, por favor vá fique a vontade caso queira dar uma olhada. Eu uso principalmente ReactJs e NodeJs para desenvolver com alguns utilizando typescript mas tambem sou bem familiarizado com Tailwind, Jest, NextJs, Bootstrap e Jquery, tambem utilizo GitHub para controle de versões. Todos os meus projetos, todos os códigos e todos os designs são feitos exclusivamente por mim, muito obrigado pelo seu tempo e se você estiver interessado, adoraria contar mais sobre qualquer um dos projetos."
          }
        ></Presentation>
        <div className="pt-14 pb-20 m-auto">
          <ProjectImg
            titulo={"Javascript"}
            tecnologia={javascript}
          ></ProjectImg>
          <ProjectImg
            titulo={"ReactJs"}
            tecnologia={react}
          ></ProjectImg>
          <ProjectImg
            titulo={"NodeJs"}
            tecnologia={node}
          ></ProjectImg>
          <ProjectImg
            titulo={"Typescript"}
            tecnologia={typescript}
          ></ProjectImg>
        </div>
      </div>
    </div>
  );
}

export default Project;
