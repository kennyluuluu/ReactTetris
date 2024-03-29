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
import {useInterval} from  '../../hooks/useInterval';
import {usePlayer} from '../../hooks/usePlayer';
import { useStage } from "../../hooks/useStage";
import { useGameStatus} from "../../hooks/useGameStatus";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, rotate, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

  const movePlayer = dir => {
    if(!checkCollision(player, stage, {x: dir, y: 0})) {
      updatePlayerPos({x: dir, y: 0})
    }
  }

  const startGame = () => {
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(0);
  }

  const drop = () => {
    if(rows > (level+1)*10) {
      setLevel(prev => prev + 1);
      setDropTime(1000/(level+1) + 200);
  }
    if(!checkCollision(player, stage, {x: 0, y: 1})) {
      updatePlayerPos({x: 0, y: 1, collided: false});
    } else {
      if(player.pos.y < 1) {
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({x: 0, y: 0, collided: true});
    }
  }

  const keyUp = ({keyCode}) => {
    if(!gameOver) {
      if(keyCode === 40) {
        setDropTime(1000/(level+1) + 200);
      }
    }
  }

  const dropPlayer = () => {
    setDropTime(null);
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
      } else if(keyCode === 38) {
        rotate(stage, player.tetromino);
      }
    }
  }

  useInterval(()=> {
    drop();
  }, dropTime)

  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)} onKeyUp={keyUp}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (<Display gameOver={gameOver} text="Game Over"/>):
          (<div>
            <Display text={"Score: " + score} />
            <Display text={"Rows: " + rows} />
            <Display text={"Level: " + level} />
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
