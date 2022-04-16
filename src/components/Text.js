import React from "react";
import "./Text.css";

export default function Text({ text, opaque = false, asTitle = false }) {
  let classes = opaque ? "custom-text opaque" : "custom-text";

  classes = asTitle ? classes + " as-title" : classes;

  return <p className={classes}>{text}</p>;
}
