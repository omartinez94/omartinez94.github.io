import React from 'react'
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader">
      <img className="" src={require("../assets/img/loader.gif")} alt="loader" />
    </div>
  );
}
