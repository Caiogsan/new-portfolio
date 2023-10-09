import { Link } from "react-router-dom"


function Footer(){
    return (
        <div>
            <div className="border-t-2  py-12 border-gray-500 bg-white m-auto w-[90%]">
                <div className="w-[80%] m-auto flex">
                    <div className="w-[40%]">
                        <ul className="flex justify-between text-sm text-gray-400">
                            <li className="hover:cursor-pointer duration-300 hover:text-blue-300"><Link to={"/home"}>Home</Link></li>
                            <li className="hover:cursor-pointer duration-300 hover:text-blue-300"><Link to={"/home/about"}>About</Link></li>
                            <li className="hover:cursor-pointer duration-300 hover:text-blue-300"><Link to={"/home/project"}>Projects</Link></li>
                            <li className="hover:cursor-pointer duration-300 hover:text-blue-300"><Link to={"/home/contact"}>Contact</Link></li>
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