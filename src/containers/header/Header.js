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
        <div className=" m-auto w-[90%]">
          <div className="flex justify-between m-auto w-[90%] relative top-6 items-center">
            <div className="h-10">
              <Link to={"/home"}>
                <img className="h-full rounded-full" src={eu}></img>
              </Link>
            </div>
            {language === "ingles" ? (
              <ul className="flex bg-white font-navbar w-[25rem] font-semibold justify-between text-xs shadow-lg py-3 px-8 border-[1px] border-gray-100 text-[#27272a] rounded-full">
                <li className="hover:cursor-pointer duration-300 hover:text-blue-300">
                  <Link to={"/home"}>Home</Link>
                </li>
                <li className="hover:cursor-pointer duration-300 hover:text-blue-300">
                  <Link to={"/home/about"}>About</Link>
                </li>
                <li className="hover:cursor-pointer duration-300 hover:text-blue-300">
                  <Link to={"/home/project"}>Projects</Link>
                </li>
                <li className="hover:cursor-pointer duration-300 hover:text-blue-300">
                  <Link to={"/home/contact"}>Contact</Link>
                </li>
              </ul>
            ) : (
              <ul className="flex bg-white font-navbar w-[25rem] font-semibold justify-between text-xs shadow-lg py-3 px-8 border-[1px] border-gray-100 text-[#27272a] rounded-full">
                <li className="hover:cursor-pointer duration-300 hover:text-blue-300">
                  <Link to={"/home"}>Inicio</Link>
                </li>
                <li className="hover:cursor-pointer duration-300 hover:text-blue-300">
                  <Link to={"/home/about"}>Sobre</Link>
                </li>
                <li className="hover:cursor-pointer duration-300 hover:text-blue-300">
                  <Link to={"/home/project"}>Projetos</Link>
                </li>
                <li className="hover:cursor-pointer duration-300 hover:text-blue-300">
                  <Link to={"/home/contact"}>Contato</Link>
                </li>
              </ul>
            )}
            <div className=" bg-gray-200 rounded p-2">
              {language === "ingles" ? (
                showOpt ? (
                  <div className="flex items-center gap-1">
                    <ReactCountryFlag
                      id="ingles"
                      className="text-xl"
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
                      id="ingles"
                      className="text-xl  z-10"
                      countryCode="US"
                      svg
                    />
                    <ReactCountryFlag />
                    <IoIosArrowDown
                      onClick={switchOpt}
                      className=" z-10 hover:cursor-pointer"
                    ></IoIosArrowDown>

                    <div className="absolute rounded right-0 h-16 top-1 bg-gray-100 w-[3.5rem]">
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
                    className="text-xl"
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
                    className="text-xl  z-10"
                    countryCode="BR"
                    svg
                  />
                  <ReactCountryFlag />
                  <IoIosArrowDown
                    onClick={switchOpt}
                    className=" z-10 hover:cursor-pointer"
                  ></IoIosArrowDown>

                  <div className="absolute rounded right-0 h-16 top-1 bg-gray-100 w-[3.5rem]">
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
