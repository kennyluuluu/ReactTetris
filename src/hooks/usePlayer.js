import {useState, useCallback} from 'react';
import { TETROMINOS, randomTetromino } from '../tetrominos';
import { STAGE_HEIGHT, STAGE_WIDTH } from '../gameHelper';

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: {x: 0, y: 0},
        tetromino: TETROMINOS[0].shape,
        collided: false,
    });

    const rotate = ((stage, matrix) => {
        const newMatrix = matrix.map((row, y) => {
            return row.map((_, x) => matrix[x][matrix.length-1 - y])
        });

        // check bounds and collision
        for(let y = 0; y < newMatrix.length; y++) {
            for(let x = 0; x < newMatrix[0].length; x++) {
                if(newMatrix[y][x] !== 0) {
                    if(player.pos.y + y < 0 || player.pos.x + x < 0 || player.pos.y + y >= STAGE_HEIGHT || player.pos.x + x >= STAGE_WIDTH)
                        return;
                    else if(stage[player.pos.y + y][player.pos.x + x][1] !== 'clear') {
                        return;
                    }
                } 
            }
        }

        setPlayer(prev => ({
            ...prev,
            tetromino: newMatrix,
        }));
    })

    // const rotate = (matrix, dir) => {

    // }

    const updatePlayerPos = ({x, y, collided}) => {
        setPlayer(prev => ({
            pos: {x: (prev.pos.x += x), y: (prev.pos.y += y)},
            tetromino: prev.tetromino,
            collided: collided,
        }))
    }

    const resetPlayer = useCallback(
        () => {
            setPlayer({
                pos: {x: STAGE_WIDTH / 2 - 2, y: 0},
                tetromino: randomTetromino().shape,
                collided: false,
            })
        },
        [])
    
    return [player, rotate, updatePlayerPos, resetPlayer];
}
