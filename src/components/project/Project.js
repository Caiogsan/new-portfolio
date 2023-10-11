import { Presentation, ProjectImg } from "./projectExport"
import { html, tailwind, javascript, react } from "../project/projectData";

function Project(){
    return (
        <div className="w-[90%] bg-white font-navbar m-auto">
            <div className="pt-32">
                <Presentation texto1={"Things I’ve made trying to get better every day."}
                stylesContact={'hidden'}
                stylesGeneral={'w-[80%]  m-auto'}
                stylesTxt={'w-[80%] justify-around'}
                stylesImg={'hidden'}
                texto2={"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback."}
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