import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useRef, useState } from "react";
import "./ProjectImg.css";

function ProjectImg({ tecnologia, titulo, stylesRoll }) {
  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);
  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };
  return (
    <div className="pb-6 ">
      <h1 className="pb-6 w-[80%] m-auto text-lg font-bold">{titulo}</h1>
      <div className="h-[12rem] flex items-center justify-center">
        <BsFillArrowLeftCircleFill
          disabled={arrowDisable}
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 15, 400, -10);
          }}
          className="w-[10%] text-lg text-gray-400 hover:text-gray-800 duration-300 hover:cursor-pointer"
        ></BsFillArrowLeftCircleFill>
        <div id="grider" className="h-[15rem] w-[80%]">
          <div
            ref={elementRef}
            id="slider"
            className={`no-scrollbar ${stylesRoll} h-[15rem] flex items-center gap-8`}
          >
            {tecnologia.map((item) => (
              <a target="__blank" href={item.link}>
              <img src={item.img}
                key={item.id}
                className="h-[10rem] rounded-2xl" />
              </a>
            ))}
          </div>
        </div>
        <BsFillArrowRightCircleFill
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 15, 400, 10);
          }}
          className="w-[10%] text-lg text-gray-400 hover:text-gray-800 duration-300 hover:cursor-pointer"
        ></BsFillArrowRightCircleFill>
      </div>
    </div>
  );
}

export default ProjectImg;
