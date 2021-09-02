import React, {useState} from "react";

import { checkCollision, createStage } from "../../gameHelper";

//components
import Stage from "../Stage/Stage";
import Display from "../Display/Display";
import StartButton from "../StartButton/StartButton";

import PropTypes from "prop-types";

// Styled Components
import "./Tetris.css";
import { StyledTetris, StyledTetrisWrapper } from "../styles/StyledTetris";

// Custom Hooks
import {usePlayer} from '../../hooks/usePlayer';
import { useStage } from "../../hooks/useStage";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const[stage, setStage] = useStage(player, resetPlayer);

  const movePlayer = dir => {
    if(!checkCollision(player, stage, {x: dir, y:0})) {
      updatePlayerPos({x: dir, y: 0})
    }
  }

  const startGame = () => {
    setStage(createStage());
    resetPlayer();
    setGameOver(false);
  }

  const drop = () => {
    if(!checkCollision(player, stage, {x: 0, y:1})) {
      updatePlayerPos({x: 0, y:1, collided: false});
    } else {
      if(player.pos.y < 1) {
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({x: 0, y: 0, collided: true});
    }
  }

  const dropPlayer = () => {
    drop();
  }
  
  const move = ({keyCode}) => {
    if(!gameOver) {
      if(keyCode === 37) {
        movePlayer(-1)
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if(keyCode === 40) {
        dropPlayer();
      }
    }
  }
  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (<Display gameOver={gameOver} text="Game Over"/>):
          (<div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>)}
          <StartButton callback={startGame}/>
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
};

Tetris.propTypes = {};

Tetris.defaultProps = {};

export default Tetris;
