import { BiLogoTailwindCss } from "react-icons/bi";
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
} from "./techImports";

import { tech } from "./techData";

function Tecnologias({ stylesTitulo, stylesGeral }) {

  const tecnologias = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Tailwind Css",
    "React JS",
    "Node JS",
    "GitHub",
  ];
  return (
    <div className={`pt-28 ${stylesGeral}`}>
      <h1 className={`text-2xl ${stylesTitulo} font-bold font-navbar`}>
        Tecnologias
      </h1>
      <div>
        <ul className="flex gap-10 py-14 justify-center">
          <li className="fa-brands text-5xl fa-html5"></li>
          <li className="fa-brands text-5xl fa-css3-alt"></li>
          <li className="fa-brands text-5xl fa-square-js"></li>
          <li className="text-5xl">
            <BiLogoTailwindCss></BiLogoTailwindCss>
          </li>
          <li className="fa-brands text-5xl fa-react"></li>
          <li className="fa-brands text-5xl fa-node-js"></li>
          <li className="fa-brands text-5xl fa-github"></li>
        </ul>

        <div className="h-[20rem] flex">
          <div className="w-[25%] flex justify-end items-center"><BsFillArrowLeftCircleFill className="hover:text-black hover:cursor-pointer text-2xl text-gray-200 duration-300"></BsFillArrowLeftCircleFill></div>
          <div className="h-full w-[50%] flex justify-center m-auto">
            <img className="rounded-md bg-transparent h-full" src={tech[4].tech} />
          </div>
          <div className="w-[25%] flex items-center"><BsFillArrowRightCircleFill className="text-2xl text-gray-200 hover:text-black duration-300 hover:cursor-pointer"></BsFillArrowRightCircleFill></div>
        </div>
        <h2 className="text-center mt-10 text-2xl font-bold font-navbar tracking-wider">
          {'HTML'}
        </h2>
      </div>
    </div>
  );
}

export default Tecnologias;
