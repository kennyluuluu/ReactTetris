import React from "react";
import PropTypes from "prop-types";
import "./Stage.css";
import Cell from "../Cell/Cell";

const Stage = ({ stage }) => (
  <div className="Stage">
    <Cell />
  </div>
);

Stage.propTypes = {};

Stage.defaultProps = {};

export default Stage;
