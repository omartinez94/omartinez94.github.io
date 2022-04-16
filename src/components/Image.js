import React from "react";
import "./Image.css";

export default function Image({ src, alt }) {
  return <img className="custom-img" src={src} alt={alt} />;
}
