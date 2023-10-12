import { Link } from "react-router-dom"


function Footer(){
    return (
        <div>
            <div className="border-t-2  py-12 border-gray-500 bg-white m-auto w-[90%]">
                <div className="sm:w-[80%] w-[90%] m-auto flex">
                    <div className="w-[40%]">
                        <ul className="flex flex-col sm:flex-row gap-1 justify-between text-sm text-gray-400">
                            <li className="hover:cursor-pointer duration-300 hover:text-blue-300"><Link to={"/new-portfolio/home"}>Home</Link></li>
                            <li className="hover:cursor-pointer duration-300 hover:text-blue-300"><Link to={"/new-portfolio/home/about"}>About</Link></li>
                            <li className="hover:cursor-pointer duration-300 hover:text-blue-300"><Link to={"/new-portfolio/home/project"}>Projects</Link></li>
                            <li className="hover:cursor-pointer duration-300 hover:text-blue-300"><Link to={"/new-portfolio/home/contact"}>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="w-[60%] lg:pl-14 text-gray-300 font-semibold text-end">
                        <p className="text-sm ">© 2023 Caio Santos. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer