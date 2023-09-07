import React from "react";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import RadialSeparators from "./RadialSeparators";

const Progressbarfun = () => (
  <div style={{}}>
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
    <div className="progressbar" >
      <div  style={{ display: "flex", border: "1px solid black" }}>
        <div style={{ width: "100%" }}>{props.children}</div>
        <div style={{ width: "100%" }}>
          <h3 className="h5">{props.label}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
export default Progressbarfun;
