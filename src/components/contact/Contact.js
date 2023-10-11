import Presentation from "../presentation/Presentation"
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { useContext } from 'react';
import { LanguageContext } from "../../containers/header/LanguageContext";

function Contact(){

    const {language, setLanguage} = useContext(LanguageContext)

    return (
        <div className="w-[90%] bg-white m-auto">
            <div className="pt-32">
                <Presentation texto1={language === "ingles" ? "Let's Get in Touch: Ways you can get in Contact with Me" : "Vamos entrar em contato: Formas para entrar em contato comigo"}
                    stylesContact={'hidden'}
                    stylesGeneral={'w-[80%] m-auto'}
                    stylesTxt={'w-full justify-around'}
                    stylesImg={'hidden'}
                    texto2={"Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific question or comment, please feel free to email me directly at   mail@tharindu.dev. I make an effort to respond to all messages within 24 hours, although it may take me longer during busy periods. Alternatively, you can use the contact form on my website to get in touch. Simply fill out the required fields and I'll get back to you as soon as possible. Finally, if you prefer to connect on social media, you can find me on https://instagram.com/. I post regular updates and engage with my followers there, so don't hesitate to reach out. Thanks again for your interest, and I look forward to hearing from you!"}
                ></Presentation>
                <ul className={`flex flex-col w-[80%] pt-10 pb-14 m-auto gap-4  text-gray-500`}>
                    <li className="hover:cursor-pointer hover:text-black duration-300">
                        <a target="__blank" href="https://www.linkedin.com/in/caio-santos1206/" className="flex items-center">
                            <AiFillLinkedin className="text-2xl mr-4"></AiFillLinkedin>
                            <p className="text-sm">Me envie uma mensagem pelo Linkedin</p>
                        </a>
                    </li>
                    <li className="hover:cursor-pointer hover:text-black duration-300">
                        <a href="" className="flex items-center">
                            <AiOutlineInstagram className="text-2xl mr-4"></AiOutlineInstagram>
                            <p className="text-sm">Me envie uma mensagem pelo instagram</p>
                        </a>
                    </li>
                    <li className="hover:cursor-pointer hover:text-black duration-300">
                        <a target="__blank" href="mailto:caiogsan@hotmail.com" className="flex items-center">
                            <AiOutlineMail className="text-2xl mr-4"></AiOutlineMail>
                            <p className="text-sm">Me envie um Email</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contact