import { Link } from "react-router-dom"
import { useContext } from "react"
import { LanguageContext } from "../header/LanguageContext"

function Footer(){
    const { language } = useContext(LanguageContext)

    return (
        <div>
            <div className="border-t-2  py-12 border-gray-500 bg-white m-auto w-[90%]">
                <div className="sm:w-[80%] w-[90%] m-auto flex">
                    <div className="w-[40%]">
                        <ul className="flex flex-col sm:flex-row gap-1 justify-between text-sm text-gray-400">
                            <li className="hover:cursor-pointer duration-300 hover:text-blue-300"><Link to={"/new-portfolio"}>Home</Link></li>
                            <li className="hover:cursor-pointer duration-300 hover:text-blue-300"><Link to={"/new-portfolio/about"}>{language === 'ingles' ? 'About' : 'Sobre'}</Link></li>
                            <li className="hover:cursor-pointer duration-300 hover:text-blue-300"><Link to={"/new-portfolio/project"}>{language === 'ingles' ? 'Projects' : 'Projetos'}</Link></li>
                            <li className="hover:cursor-pointer duration-300 hover:text-blue-300"><Link to={"/new-portfolio/contact"}>{language === 'ingles' ? 'Contact' : 'Contato'}</Link></li>
                        </ul>
                    </div>
                    <div className="w-[60%] lg:pl-14 text-gray-300 font-semibold text-end">
                        <p className="text-sm ">{language === 'ingles' ? '© 2023 Caio Santos. All Rights Reserved.' : '© 2023 Caio Santos. Todos os Direitos Reservados.'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer