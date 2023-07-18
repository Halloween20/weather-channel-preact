import { useState } from "preact/hooks";
import WCLogo from "../assets/wchannel.svg";
import "./WCHeader.css";

export const WCHeader = () => {
  //live update with time

  const [time, setTime] = useState(new Date());

  const timeFormat = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };

  //TUE AUG 5
  const dateFormat = {
    weekday: "short",
    month: "short",
    day: "numeric",
  };

  setInterval(() => {
    setTime(new Date());
  }, 1000);

  return (
    <>
    <div className={"gradientOverlay"}></div>
    <div className={"blueTopBar"}></div>
    <header className={"WCHeader"}>
      <div className={"logo"}>
        <img src={WCLogo} alt="WChannel Logo" />
      </div>
      <div className={"main"}>
        <a className={"subtitle"}> NAT'L WEATHER SERVICE</a>
        <div className={"titleArea"}>
          <div className={"title"}>
            <a className={"title"}>Local Update</a>
          </div>
          <div className={"datetime"}>
            <a className={"date"}>
              {time.toLocaleTimeString("en-US", timeFormat)}
            </a>
            <a className={"time"}>
              {time
                .toLocaleDateString("en-US", dateFormat)
                .toUpperCase()
                .replace(",", "")}
            </a>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};
