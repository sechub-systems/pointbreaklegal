import React from "react";
import "../PI/PageIndicator.css";

const PageIndicator = (props) => {
  document.title = "Point Break Legal - " + props.title;
  return <div className="PI">{props.children}</div>;
};
export default PageIndicator;
