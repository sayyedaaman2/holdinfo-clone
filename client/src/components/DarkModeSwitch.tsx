import { useRef, useEffect } from "react";
import { ThemeConstant } from "../utils/constant";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { setTheme } from "../features/theme/themeSlice";

import {Circle} from '../types'
const DarkModeSwitch = () => {
  const dispatch = useAppDispatch();
  const {darkMode}  = useAppSelector((state)=> state.theme)

  const circleRef = useRef<SVGCircleElement>(null);

  const circle: Circle = {
    on: {
      cx: 45,
      cy: 15,
      r: 12,
    },
    off: {
      cx: 16,
      cy: 15,
      r: 12,
    },
  };

  useEffect(() => {
    if (!darkMode && circleRef.current) {
      circleRef.current.setAttribute("cx", circle.off.cx.toString());
      circleRef.current.setAttribute("cy", circle.off.cy.toString());
      circleRef.current.setAttribute("r", circle.off.r.toString());
    } else if (circleRef.current) {
      circleRef.current.setAttribute("cx", circle.on.cx.toString());
      circleRef.current.setAttribute("cy", circle.on.cy.toString());
      circleRef.current.setAttribute("r", circle.on.r.toString());
    }
    console.log(
      "render circle " + circle.off.cx,
      circle.off.cy,
      circle.off.r,
      circle.on.cx,
      circle.on.cy,
      circle.on.r,
      darkMode
    );
  }, [
    circle.off.cx,
    circle.off.cy,
    circle.off.r,
    circle.on.cx,
    circle.on.cy,
    circle.on.r,
    darkMode,
  ]);

  return (
    <>
      <span
        className="border-0 cursor-pointer w-min mx-3"
        onClick={() => {
          dispatch(
            setTheme(darkMode ? ThemeConstant.dark : ThemeConstant.light)
          );
        }}
      >
        <svg
          className="border-0 border-gray-400 bg-slate-700 rounded-full transition ease-in-out delay-150"
          height="30"
          width="60"
        >
          <circle
            id="slider-on"
            ref={circleRef}
            className="slider-circle transition ease-in-out delay-150"
            cx={circle.on.cx}
            cy={circle.on.cy}
            r={circle.on.r}
            fill="#3dc6c1"
          ></circle>
        </svg>
      </span>
    </>
  );
};

export default DarkModeSwitch;
