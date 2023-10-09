import { acadSite, ProjectImg, Presentation, cordel, android, popflix, portfolioOld, tiago, match, gpt3, escorpiao } from "./projectExport"


function Project(){
    return (
        <div className="w-[90%] bg-white font-navbar m-auto">
            <div className="pt-32">
                <Presentation texto1={"Things I’ve made trying to put my dent in the universe."}
                stylesContact={'hidden'}
                stylesGeneral={'w-[80%] m-auto'}
                stylesTxt={'w-[80%]'}
                stylesImg={'hidden'}
                texto2={"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback."}
                ></Presentation>
                <div className="pt-14 pb-20 m-auto">
                    <ProjectImg titulo={'HTML/CSS'} img1={escorpiao} img2={cordel} img3={android} url1={'https://caiogsan.github.io/Gym-Project/'} url2={'https://caiogsan.github.io/projeto4/'} url3={'https://caiogsan.github.io/projeto1/'}></ProjectImg>
                    <ProjectImg titulo={'Tailwind Css'} img1={tiago} img2={acadSite} img3={popflix} url1={'https://caiogsan.github.io/Projeto-tiago/'} url2={'https://caiogsan.github.io/proj-acad/'} url3={'https://caiogsan.github.io/pop-flix/'}></ProjectImg>
                    <ProjectImg titulo={'Bootstrap'} img1={acadSite} img2={acadSite} img3={acadSite}></ProjectImg>
                    <ProjectImg titulo={'Javascript'} img1={portfolioOld} img2={match} img3={acadSite} url1={'https://caiogsan.github.io/My-PortFolio/'} url2={'https://caiogsan.github.io/match-game/'} url3={'https://caiogsan.github.io/proj-acad/'}></ProjectImg>
                    <ProjectImg titulo={'React'} img1={acadSite} img2={tiago} img3={gpt3} url1={'https://caiogsan.github.io/proj-acad/'} url2={'https://caiogsan.github.io/Projeto-tiago/'} url3={'https://caiogsan.github.io/app-gpt3/'}></ProjectImg>
                </div>
            </div>
        </div>
    )
}

export default Project