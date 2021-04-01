import { useEffect, useRef } from "react";
import { sculptToMinimalRenderer } from "shader-park-core";
import { spCode } from "./spCode.js";
/****************USE HOOKS TO LOAD SHADER **********************/
const Framie = ({ src }) => {
  const shadeRef = useRef(null);
  useEffect(() => {
    if (shadeRef.current) {
      const canvas = document.querySelector(".my-canvas");
      console.log(canvas);
      sculptToMinimalRenderer(canvas, spCode);
    }
  }, [src]);

  return (
    <div>
      <canvas className="my-canvas"></canvas>
      <iframe id="bigfram" title="miframie" ref={shadeRef}>
        {" "}
      </iframe>
    </div>
  );
};

export default Framie;
