import acadSite from "../../assets/gym.PNG"
import gpt from "../../assets/3.PNG"
import popflix from "../../assets/popflix.PNG"
import tiago from "../../assets/tiago.PNG"
import songfy from "../../assets/songfy.JPG"
import nodeLogo from "../../assets/nodelogo.jpg"
import { useContext } from 'react';
import { LanguageContext } from "../header/LanguageContext"

function  Projects(){
    const {language, setLanguage} = useContext(LanguageContext)
    return (
        <div className="flex flex-col pb-12 md:pb-32 pt-28 font-navbar">
            <h1 className="text-2xl mb-12 font-bold">{language === "ingles" ? "Ultimate Gym Project" : "Projeto Academia Ultimate"}</h1>
            <div className="pb-12">
                <a target="__blank" href="https://caiogsan.github.io/proj-acad/"><img alt="academia" className="rounded-2xl hover:scale-105 duration-300" src={acadSite}></img></a>
            </div>
            <h1 className="text-2xl mb-12 font-bold">{language === "ingles" ? "Chat GPT-3 Project" : "Projeto Chat GPT-3"}</h1>
            <div className="pb-12">
                <a target="__blank" href="https://caiogsan.github.io/app-gpt3/"><img alt="gpt-3" className="rounded-2xl hover:scale-105 duration-300" src={gpt}></img></a>
            </div>
            <h1 className="text-2xl mb-12 font-bold">Songfy</h1>
            <div className="pb-12">
                <a target="__blank" href="https://caiogsan.github.io/songfy"><img alt="songfy" className="rounded-2xl hover:scale-105 duration-300" src={songfy}></img></a>
            </div>
            <h1 className="text-2xl hidden md:flex pb-12 font-bold">{language === "ingles" ? "Other Projects" : "Outros Projetos"}</h1>
            <div className="md:grid hidden gap-8 font-bold grid-cols-3">
                <div className="h-[12rem]">
                    <h1 className="pb-4">Popflix</h1>
                    <a target="__blank" href="https://caiogsan.github.io/pop-flix/"><img alt="popflix" src={popflix} className="hover:scale-110 duration-300 rounded-2xl h-full"></img></a>
                </div>
                <div className="h-[12rem]">
                   <h1 className="pb-4">{language === "ingles" ? "Tiago Tattoo" : "Tiago Tatuagens"}</h1>
                    <a target="__blank" href="https://caiogsan.github.io/Projeto-tiago"><img alt="tiago" className="hover:scale-110 duration-300 h-full rounded-2xl" src={tiago}></img></a>
                </div>
                <div className="h-[12rem]">
                    <h1 className="pb-4">{language === "ingles" ? "Ultimate Gym Database" : "Academia Ultimate Database"}</h1>
                    <a href="https://github.com/Caiogsan/gym_database"><img alt="database_gym" className="hover:scale-110 duration-300 h-full rounded-2xl" src={nodeLogo}></img></a>
                </div>
            </div>
        </div>
    )
}

export default Projects