import React from "react";

import { createStage } from "../../gameHelper";

//components
import Stage from "../Stage/Stage";
import Display from "../Display/Display";
import StartButton from "../StartButton/StartButton";

import PropTypes from "prop-types";
import "./Tetris.css";

const Tetris = () => (
  <div className="Tetris">
    <Stage stage={createStage()} />
    <aside>
      <div>
        <Display text="Score" />
        <Display text="Rows" />
        <Display text="Level" />
      </div>
    </aside>
    <StartButton />
  </div>
);

Tetris.propTypes = {};

Tetris.defaultProps = {};

export default Tetris;
