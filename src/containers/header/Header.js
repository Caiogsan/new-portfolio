import { Link } from "react-router-dom";
import eu from "../../assets/me.PNG";
import ReactCountryFlag from "react-country-flag";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import Main from "../../components/main/Main";
import { LanguageContext } from "./LanguageContext";
import { useContext } from "react";

function Header() {
  // ingles === true
  // portugues == false
  const { language, setLanguage } = useContext(LanguageContext);
  const [showOpt, setShowOpt] = useState(true);

  function switchOpt() {
    setShowOpt(!showOpt);
  }

  function switchLang() {
    if (language === "ingles") {
      setLanguage("portugues");
    }
    if (language === "portugues") {
      setLanguage("ingles");
    }
  }

  const port = "portugues";
  const ing = "ingles";

  return (
    <LanguageContext.Provider value={language}>
      <div className="fixed z-10 w-full">
        <div className=" m-auto w-[80%] md:w-[90%]">
          <div className="flex justify-between m-auto w-[90%] 2xl:w-[80%] relative top-6 items-center">
            <div className="h-10 hidden md:flex">
              <Link to={"/new-portfolio"}>
                <img className="h-full rounded-full" src={eu}></img>
              </Link>
            </div>
            {language === "ingles" ? (
              <ul className="flex bg-white font-navbar sm:gap-10 gap-2 md:gap-12 font-semibold justify-between text-xs shadow-lg py-3 px-6 sm:px-8 border-[1px] border-gray-100 text-[#27272a] rounded-full">
                <li className="hover:cursor-pointer duration-300 hover:text-blue-300">
                  <Link to={"/new-portfolio"}>Home</Link>
                </li>
                <li className="hover:cursor-pointer duration-300 hover:text-blue-300">
                  <Link to={"/new-portfolio/about"}>About</Link>
                </li>
                <li className="hover:cursor-pointer duration-300 hover:text-blue-300">
                  <Link to={"/new-portfolio/project"}>Projects</Link>
                </li>
                <li className="hover:cursor-pointer duration-300 hover:text-blue-300">
                  <Link to={"/new-portfolio/contact"}>Contact</Link>
                </li>
              </ul>
            ) : (
              <ul className="flex bg-white font-navbar w-[25rem] font-semibold justify-between text-xs shadow-lg py-3 px-8 border-[1px] border-gray-100 text-[#27272a] rounded-full">
                <li className="hover:cursor-pointer duration-300 hover:text-blue-300">
                  <Link to={"/new-portfolio"}>Inicio</Link>
                </li>
                <li className="hover:cursor-pointer duration-300 hover:text-blue-300">
                  <Link to={"/new-portfolio/about"}>Sobre</Link>
                </li>
                <li className="hover:cursor-pointer duration-300 hover:text-blue-300">
                  <Link to={"/new-portfolio/project"}>Projetos</Link>
                </li>
                <li className="hover:cursor-pointer duration-300 hover:text-blue-300">
                  <Link to={"/new-portfolio/contact"}>Contato</Link>
                </li>
              </ul>
            )}
            <div className=" rounded p-2">
              {language === "ingles" ? (
                showOpt ? (
                  <div className="flex items-center gap-1">
                    <ReactCountryFlag
                      id="ingles"
                      onClick={switchOpt}
                      className="text-xl hover:cursor-pointer"
                      countryCode="US"
                      svg
                    />
                    <ReactCountryFlag />
                    <IoIosArrowBack
                      onClick={switchOpt}
                      className=" hover:cursor-pointer"
                    ></IoIosArrowBack>
                  </div>
                ) : (
                  <div className="flex gap-1 items-center">
                    <ReactCountryFlag
                      onClick={switchOpt}
                      id="ingles"
                      className="text-xl hover:cursor-pointer z-10"
                      countryCode="US"
                      svg
                    />
                    <ReactCountryFlag />
                    <IoIosArrowDown
                      onClick={switchOpt}
                      className=" z-10 hover:cursor-pointer"
                    ></IoIosArrowDown>

                    <div className="absolute rounded right-0 h-16 top-1 w-[3.5rem]">
                      <div className="flex pt-8 h-full w-full justify-start pl-2">
                        <ReactCountryFlag
                          onClick={switchLang}
                          id="portugues"
                          className="text-xl hover:cursor-pointer"
                          countryCode="BR"
                          svg
                        />
                        <ReactCountryFlag />
                      </div>
                    </div>
                  </div>
                )
              ) : showOpt ? (
                <div className="flex items-center gap-1">
                  <ReactCountryFlag
                    id="portugues"
                    onClick={switchOpt}
                    className="text-xl hover:cursor-pointer"
                    countryCode="BR"
                    svg
                  />
                  <ReactCountryFlag />
                  <IoIosArrowBack
                    onClick={switchOpt}
                    className=" hover:cursor-pointer"
                  ></IoIosArrowBack>
                </div>
              ) : (
                <div className="flex gap-1 items-center">
                  <ReactCountryFlag
                    id="ingles"
                    onClick={switchOpt}
                    className="text-xl hover:cursor-pointer z-10"
                    countryCode="BR"
                    svg
                  />
                  <ReactCountryFlag />
                  <IoIosArrowDown
                    onClick={switchOpt}
                    className=" z-10 hover:cursor-pointer"
                  ></IoIosArrowDown>

                  <div className="absolute rounded right-0 h-16 top-1 w-[3.5rem]">
                    <div className="flex pt-8 h-full w-full pl-2 justify-start">
                      <ReactCountryFlag
                        onClick={switchLang}
                        id="ingles"
                        className="text-xl hover:cursor-pointer"
                        countryCode="US"
                        svg
                      />
                      <ReactCountryFlag />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden">
        <Main language={language}></Main>
      </div>
    </LanguageContext.Provider>
  );
}

export default Header;
