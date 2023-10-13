import caio from "../../assets/personal.PNG"
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { SiCodewars } from "react-icons/si";


function Presentation({texto1, texto2, stylesGeneral, stylesImg, stylesTxt, stylesTxt2, stylesContact}){
    return (
        <div>
            <div className={`flex xl:flex-row items-center flex-col-reverse w-full ${stylesGeneral} gap-4 font-navbar mb-8`}>
                <div className={`${stylesTxt} mt-16 xl:mt-0 mb-4 md:w-[80%] gap-16  lg:w-[80%] h-full w-[90%] sm:w-[90%] m-auto flex flex-col`}>
                    <h1 className="lg:text-5xl  md:text-4xl mr-2 xl:text-3xl sm:text-4xl 2xl:text-5xl text-3xl leading-snug font-bold ">{texto1}</h1>
                    <p className={`lg:text-xl xl:text-lg text-lg md:text-xl w-[90%] 2xl:text-2xl sm:text-lg flex`}>{texto2}</p>
                    
                </div>  
                <div className={`w-[90%] md:w-[80%] xl:w-[40%] ${stylesImg} flex justify-start`}>
                    <img className="rounded-[30px]  w-[60%] xl:w-full rotate-3" src={caio}></img>
                </div>
            </div>
            <ul className={`flex xl:w-full w-[90%] md:w-[80%]  m-auto gap-4 ${stylesContact} text-3xl text-gray-500`}>
                <li className="hover:cursor-pointer hover:text-black duration-300"><a target="__blank" href="https://github.com/Caiogsan"><AiOutlineGithub></AiOutlineGithub></a></li>
                <li className="hover:cursor-pointer hover:text-black duration-300"><a target="__blank" href=""><AiOutlineInstagram></AiOutlineInstagram></a></li>
                <li className="hover:cursor-pointer hover:text-black duration-300"><a target="__blank" href="mailto:caiogsan@hotmail.com"><AiOutlineMail></AiOutlineMail></a></li>
                <li className="hover:cursor-pointer hover:text-black duration-300"><a target="__blank" href="https://www.linkedin.com/in/caio-santos1206/"><AiFillLinkedin></AiFillLinkedin></a></li>
                <li className="hover:cursor-pointer hover:text-black duration-300"><a target="__blank" href="https://www.codewars.com/users/Caiogsan"><SiCodewars></SiCodewars></a></li>
            </ul>
        </div>
        
    )
}

export default Presentation