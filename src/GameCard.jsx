import React from "react";

export default function GameCard(props) {
  return (
    <div>
      <img className="projectImg" src={props.img} alt="Not found" />
      <div className="content">
        <a href="games/JS_10_">
          <button>Preview</button>
        </a>
      </div>
    </div>
  );
}
