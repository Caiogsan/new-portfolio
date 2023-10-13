import Presentation from "../presentation/Presentation"
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { useContext } from 'react';
import { LanguageContext } from "../../containers/header/LanguageContext";

function teste (){
    return <a>caiogsan@hotmail.com</a>
    
}

function Contact(){

    const {language, setLanguage} = useContext(LanguageContext)

    return (
        <div className="w-[90%] h-full bg-white m-auto">
            <div className="pt-32 w-full">
                <Presentation texto1={language === "ingles" ? "Ways that you can get in Contact with Me" : "Formas para entrar em contato comigo"}
                    stylesContact={'hidden'}
                    stylesGeneral={''}
                    stylesTxt={''}
                    stylesImg={'hidden'}
                    texto2={language === "ingles" ? `Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific question or comment, please feel free to email me directly at caiogsan@hotmail.com, i respond to all messages within 24 hours. If you prefer to connect on social media, you can find me on Linkedin or Instagram where i post regular updates of my new projects and engage with all my connections, so please don't hesitate to reach out. Thanks again for your interest, and I look forward to hearing from you!` : "Muito obrigado pelo seu interesse em entre em contato comigo. Eu apreciaria muito o seu feedback, perguntas ou qualquer tipo de sugestão, se você tiver alguma, por favor fique a vontade para me enviar um email em caiogsan@hotmail.com, eu respondo todas as mensagens em até 24 horas. Se você preferir me contactar por rede social, você consegue me encontrar no Linkedin e no Instagram aonde eu posto todos os meus novos projetos e interajo com todas as minhas conexões. Muito obrigado novamente pelo seu interesse e aguardo ansiosamente pela chegada da sua mensagem."}
                ></Presentation>
                <ul className={`flex flex-col w-[90%] md:w-[80%] pt-10 pb-14 m-auto gap-4  text-gray-500`}>
                    <li className="hover:cursor-pointer hover:text-black duration-300">
                        <a target="__blank" href="https://www.linkedin.com/in/caio-santos1206/" className="flex items-center">
                            <AiFillLinkedin className="text-2xl mr-4"></AiFillLinkedin>
                            <p className="text-sm">{language === "ingles" ? "Follow me on Linkedin" : "Me siga no Linkedin"}</p>
                        </a>
                    </li>
                    <li className="hover:cursor-pointer hover:text-black duration-300">
                        <a href="" className="flex items-center">
                            <AiOutlineInstagram className="text-2xl mr-4"></AiOutlineInstagram>
                            <p className="text-sm">{language === "ingles" ? "Follow me on Instagram" : "Me siga no Instagram"}</p>
                        </a>
                    </li>
                    <li className="hover:cursor-pointer hover:text-black duration-300">
                        <a target="__blank" href="mailto:caiogsan@hotmail.com" className="flex items-center">
                            <AiOutlineMail className="text-2xl mr-4"></AiOutlineMail>
                            <p className="text-sm">{language === "ingles" ? "Send me an email" : "Me envie um email"}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contact