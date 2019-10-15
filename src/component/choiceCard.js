import React from "react";

function ChoiceCard(props) {

  return (
    <div className="col-lg-6 col-md-12 col-xs-12">
      <div className={`custom-card ${props.default} ${props.type}`}>
        <h1>{props.title}</h1>
        <div>
          <img src={props.element} />
        </div>
        <div>{props.playTitle}</div>
      </div>
    </div>
  );
}

export default ChoiceCard;
