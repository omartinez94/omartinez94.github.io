import React from "react";
import ReactPlayer from "react-player";
import "./Header.css";

export default function Header(props) {
  return (
    <section>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          playing={true}
          controls={false}
          muted={true}
          loop={true}
          url={require("../assets/video/video_alt.mp4")}
        />
        <div className="player-content">{props.children}</div>
      </div>
    </section>
  );
}
