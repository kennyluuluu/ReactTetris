import React from "react";
import PropTypes from "prop-types";
import "./Cell.css";
import {StyledCell} from '../styles/StyledCell'
import {TETROMINOS} from  '../../tetrominos'

const Cell = ({ type }) => 
    <StyledCell type={'L'} color={TETROMINOS['L'].color}></StyledCell>;

Cell.propTypes = {};

Cell.defaultProps = {};

export default Cell;
