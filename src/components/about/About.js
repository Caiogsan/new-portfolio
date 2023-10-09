import Presentation from "../presentation/Presentation"

function About(){
    return (
        <div className="w-[90%] pt-40 bg-white m-auto">
            <div className="w-[80%] m-auto pb-28">
                <Presentation texto1={"I am Tharindu N. I live in Sri Lanka, where I design the future."} texto2={"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback."}></Presentation>
            </div>
        </div>
    )
}

export default About