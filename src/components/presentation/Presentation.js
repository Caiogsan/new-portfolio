import caio from "../../assets/personal.PNG"
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { SiCodewars } from "react-icons/si";


function Presentation({texto1, texto2, stylesGeneral, stylesImg, stylesTxt, stylesTxt2, stylesContact}){
    return (
        <div>
            <div className={`flex ${stylesGeneral} h-[25rem] gap-4 font-navbar pb-4`}>
                <div className={`w-[60%] flex flex-col justify-between ${stylesTxt}`}>
                    <h1 className="text-[40px] text-5xl leading-tight font-bold ">{texto1}</h1>
                    <p className={`text-md flex leading-7`}>{texto2}</p>
                    
                </div>  
                <div className={`w-[40%] ${stylesImg} flex justify-center`}>
                    <img className="rounded-[30px] rotate-3" src={caio}></img>
                </div>
            </div>
            <ul className={`flex gap-4 ${stylesContact} text-3xl text-gray-500`}>
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