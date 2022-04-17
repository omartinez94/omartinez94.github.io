import React from "react";
import "./Image.css";

export default function Image({ src, alt, light }) {

  return (
    <img className={light ? "custom-img bg-light" : "custom-img"} src={src} alt={alt} />
  );
}
