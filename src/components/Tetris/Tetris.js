import React from "react";

import { createStage } from "../../gameHelper";

//components
import Stage from "../Stage/Stage";
import Display from "../Display/Display";
import StartButton from "../StartButton/StartButton";

import PropTypes from "prop-types";
import "./Tetris.css";
import { StyledTetris, StyledTetrisWrapper } from "../styles/StyledTetris";

const Tetris = () => (
  <StyledTetrisWrapper>
    <StyledTetris>
      <Stage stage={createStage()} />
      <aside>
        <div>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </div>
      </aside>
      <StartButton />
    </StyledTetris>
  </StyledTetrisWrapper>
);

Tetris.propTypes = {};

Tetris.defaultProps = {};

export default Tetris;
