import { Link } from "react-router-dom"

function Header(){
    return (
        <div className="fixed z-10 w-full">
            <div className="flex justify-center m-6 items-center ">
                <ul className="flex bg-white font-navbar w-[25rem] font-semibold justify-between text-xs shadow-lg py-3 px-8 border-[1px] border-gray-100 text-[#27272a] rounded-full">
                    <li className="hover:cursor-pointer duration-300 hover:text-blue-300"><Link to={"/home"}>Home</Link></li>
                    <li className="hover:cursor-pointer duration-300 hover:text-blue-300"><Link to={"/home/about"}>About</Link></li>
                    <li className="hover:cursor-pointer duration-300 hover:text-blue-300"><Link to={"/home/project"}>Projects</Link></li>
                    <li className="hover:cursor-pointer duration-300 hover:text-blue-300"><Link to={"/home/contact"}>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header