import React from "react";
import PropTypes from "prop-types";
import "./Stage.css";
import Cell from "../Cell/Cell";

const Stage = ({ stage }) => (
  <div className="Stage">
    {stage.map((row) => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </div>
);

Stage.propTypes = {};

Stage.defaultProps = {};

export default Stage;
