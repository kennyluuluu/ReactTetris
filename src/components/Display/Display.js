import React from "react";
import PropTypes from "prop-types";
// import "./Display.css";
import { StyledDisplay } from "../styles/StyledDisplay";

const Display = ({ gameOver, text }) => <StyledDisplay>{text}</StyledDisplay>;

export default Display;
