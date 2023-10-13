import { BiLogoTailwindCss } from "react-icons/bi";
import { SiCanva } from "react-icons/si";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import {
  html5,
  css3,
  javascript,
  tailwind,
  react,
  nodeJs,
  github,
  canva
} from "./techImports";


import { useState } from "react";

function Tecnologias({ stylesTitulo, stylesGeral }) {


  

  const [atualTech, setAtualTech] = useState(html5)
  const [textTech, setTextTech] = useState('HTML5')

  function btnSwitchTechRight(){
    switch (atualTech){
      case html5: setAtualTech(css3)
      break
      case css3: setAtualTech(javascript)
      break
      case javascript: setAtualTech(tailwind)
      break
      case tailwind: setAtualTech(react)
      break
      case react: setAtualTech(nodeJs)
      break
      case nodeJs: setAtualTech(canva)
      break
      case canva: setAtualTech(github)
      break
      case github:
      break

      default:
        break
    }
  }

  function btnSwitchTechLeft(){
    switch (atualTech){
      case github: setAtualTech(canva)
      break
      case canva: setAtualTech(nodeJs)
      break
      case nodeJs: setAtualTech(react)
      break
      case react: setAtualTech(tailwind)
      break
      case tailwind: setAtualTech(javascript)
      break
      case javascript: setAtualTech(css3)
      break
      case css3: setAtualTech(html5)
      break
      case html5:
      break

      default:
        break
    }
  }
  
  function switchTech(tech, text){
    setAtualTech(tech)
    setTextTech(text)
  }
  const tecnologias = [
    html5, css3, javascript, tailwind
  ];
  return (
    <div className={`pt-28 2xl:pt-40 ${stylesGeral}`}>
      <h1 className={`w-[80%] xl:w-full m-auto text-2xl ${stylesTitulo} font-bold font-navbar`}>
        Tecnologias
      </h1>
      <div>
        <ul className="flex gap-4 sm:gap-8 md:gap-12 py-14 justify-center text-3xl sm:text-5xl">
          <li onClick={() => {switchTech(html5, 'HTML5')}} className="fa-brands hover:cursor-pointer hover:scale-110 duration-300 fa-html5"></li>
          <li  onClick={() => {switchTech(css3, 'CSS3')}} className="fa-brands hover:cursor-pointer hover:scale-110 duration-300  fa-css3-alt"></li>
          <li onClick={() => {switchTech(javascript, 'JavaScript')}} className="fa-brands hover:cursor-pointer hover:scale-110 duration-300 fa-square-js"></li>
          <BiLogoTailwindCss onClick={() => {switchTech(tailwind, 'Tailwind Css')}} className="hover:scale-110 hover:cursor-pointer duration-300"></BiLogoTailwindCss>
          <li onClick={() => {switchTech(react, 'React')}} className="fa-brands hover:scale-110 hover:cursor-pointer duration-300  fa-react"></li>
          <li onClick={() => {switchTech(nodeJs, 'Node')}} className="fa-brands hover:scale-110 hover:cursor-pointer duration-300 fa-node-js"></li>
          <SiCanva onClick={() => {switchTech(canva, 'Canva')}} className="hover:scale-110 hover:cursor-pointer duration-300"></SiCanva>
          <li onClick={() => {switchTech(github, 'GitHub')}} className="fa-brands hover:scale-110 hover:cursor-pointer duration-300 fa-github"></li>
        </ul>

        <div className="h-[8rem] sm:h-[15rem] md:h-[20rem] flex">
          <div className="sm:w-[25%] w-[20%] flex justify-end items-center"><BsFillArrowLeftCircleFill onClick={btnSwitchTechLeft} className="hover:text-black hover:cursor-pointer text-2xl text-gray-200 duration-300"></BsFillArrowLeftCircleFill></div>
          <div className="h-full w-[50%] flex justify-center m-auto">
            <img className="rounded-md bg-transparent h-full" src={atualTech} alt="tecnologia"/>
          </div>
          <div className="sm:w-[25%] w-[20%] flex items-center"><BsFillArrowRightCircleFill onClick={btnSwitchTechRight} className="text-2xl text-gray-200 hover:text-black duration-300 hover:cursor-pointer"></BsFillArrowRightCircleFill></div>
        </div>
        <h2 className="text-center mt-10 text-2xl font-bold font-navbar tracking-wider">
          {textTech}
        </h2>
      </div>
    </div>
  );
}

export default Tecnologias;
