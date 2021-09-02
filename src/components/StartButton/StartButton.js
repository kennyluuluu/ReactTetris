import React from "react";
import PropTypes from "prop-types";
// import "./StartButton.css";
import { StyledStartButton } from "../styles/StyledStartButton";

const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
);

StartButton.propTypes = {};

StartButton.defaultProps = {};

export default StartButton;
