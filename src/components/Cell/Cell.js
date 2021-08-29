import React from "react";
import PropTypes from "prop-types";
import "./Cell.css";

const Cell = ({ type }) => <div className="Cell">{type}</div>;

Cell.propTypes = {};

Cell.defaultProps = {};

export default Cell;
