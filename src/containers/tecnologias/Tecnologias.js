import { BiLogoTailwindCss } from "react-icons/bi";
import { html5, css3, javascript, tailwind, react, nodeJs, github } from "./techImports"

function Tecnologias() {
  return (
    <div className="pt-28">
      <h1 className="text-2xl font-bold font-navbar">Tecnologias</h1>
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
        <div className="h-[20rem]">
            <div className="h-full w-[30%] flex justify-center m-auto">
                <img className="rounded-md bg-transparent h-full" src={github}></img>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Tecnologias;
