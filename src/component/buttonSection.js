import React from "react";

export default function buttonSection(props) {
    console.log(props.checkStart)
  return (
    <div className="row button-section">
      <button
        disabled={props.checkStart}
        className="btn custom-button"
        onClick={() => props.onPlayerChoose("Fire")}
      >
        <img src={props.ele.fire.source}></img>
        Fire ball
      </button>
      <button
        disabled={props.checkStart}
        className="btn custom-button"
        onClick={() => props.onPlayerChoose("Water")}
      >
        <img src={props.ele.water.source}></img>
        Water arrow
      </button>
      <button
        disabled={props.checkStart}
        className="btn custom-button"
        onClick={() => props.onPlayerChoose("Grass")}
      >
        <img src={props.ele.grass.source}></img>
        Windslash
      </button>
    </div>
  );
}
