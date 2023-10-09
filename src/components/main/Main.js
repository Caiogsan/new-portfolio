import ContactMain from "../../containers/contact-main/ContactMain"
import Projects from "../../containers/projects/Projects"
import Presentation from "../presentation/Presentation"

function Main(){
    return (
        <div className="w-[90%] bg-white m-auto">
            <div className="w-[80%] pt-52 m-auto">
                <Presentation texto1={"Full-stack web and mobile app developer, and amateur astronaut."} texto2={"I am a backend developer with expertise in Node.js. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer."}></Presentation>
                <Projects></Projects>
            </div>
            
        </div>
    )
}

export default Main