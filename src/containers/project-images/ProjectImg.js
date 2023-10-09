import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import acadSite from "../../assets/gym.PNG"


function ProjectImg({img1, img2, img3, titulo, url1, url2, url3}){
    return (
        <div className="pb-6 pt-20">
            <h1 className="pb-6 w-[80%] m-auto text-lg font-bold">{titulo}</h1>
            <div className="h-[12rem] flex items-center justify-center">
                <BsFillArrowLeftCircleFill className="w-[10%] text-lg text-gray-400 hover:text-gray-800 duration-300 hover:cursor-pointer"></BsFillArrowLeftCircleFill>
                <div className="grid gap-8 font-bold w-[80%] m-auto grid-cols-3">
                    <div className="h-full">
                        <a target="__blank" href={url1}><img alt="popflix" src={img1} className="hover:scale-110 duration-300 rounded-2xl h-full"></img></a>
                    </div>
                    <div className="h-[12rem]">
                        <a target="__blank" href={url2}><img alt="memory-game" className="hover:scale-110 duration-300 h-full rounded-2xl" src={img2}></img></a>
                    </div>
                    <div className="h-[12rem]">
                        <a target="__blank" href={url3}><img alt="old port" className="hover:scale-110 duration-300 h-full rounded-2xl" src={img3}></img></a>
                    </div>
                </div>
                <BsFillArrowRightCircleFill className="w-[10%] text-lg text-gray-400 hover:text-gray-800 duration-300 hover:cursor-pointer"></BsFillArrowRightCircleFill>
            </div>
        </div>
    )
}

export default ProjectImg