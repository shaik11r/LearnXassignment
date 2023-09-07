import React from "react";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import RadialSeparators from "../RadialSeparators";

const Progressbarfun = () => (
  <div style={{ width: "200px" }}>
    <Progressbar>
      <CircularProgressbarWithChildren
        value={40}
        text={`${350}`}
        strokeWidth={10}
        styles={buildStyles({
          textColor: "#383461",
          strokeLinecap: "butt",
          pathColor: "#6965fa",
          color: "#6965fa",
        })}>
        <RadialSeparators
          count={10}
          style={{
            background: "#fff",
            width: "2px",
            height: `${10}%`,
          }}
        />
      </CircularProgressbarWithChildren>
    </Progressbar>
  </div>
);

function Progressbar(props) {
  return (
    <div className="progressbar">
      <div>Wheel of opportunity</div>
      <div>{props.children}</div>
    </div>
  );
}
export default Progressbarfun;
