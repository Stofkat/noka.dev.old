
import React from "react";
import "./style.scss";
import { faBars, faArrowLeft, faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ICON = {
  menu: faBars,
  arrowLeft: faArrowLeft,
  arrowRight: faArrowRight,
  close: faTimes,
};

export const SIZE = {
  small: "1x",
  medium: "2x",
  large: "3x",
};


export default function Icon({ icon, size, onClick }) {
  return (
    <FontAwesomeIcon
      className="button-icon"
      icon={icon}
      size={size | "1x"}
    />
  );
}