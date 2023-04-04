//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

import SecondsCounter from "./component/SecondsCounter";
import MinutesCounter from "./component/MinutesCounter";
import HoursCounter from "./component/HoursCounter";
import ClockButton from "./component/ClockButton";
//render your react application

let seconds = 0;
let minutes = 0;
let hours = 0;

setInterval(() => {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
  ReactDOM.render(
    <div className="clock">
      <ClockButton>
        <i class="fas fa-clock"></i>{" "}
      </ClockButton>
      <HoursCounter hours={hours} />
      <MinutesCounter minutes={minutes} />
      <SecondsCounter seconds={seconds} />
    </div>,
    document.querySelector("#app")
  );
}, 1000);
