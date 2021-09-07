import {useState, useEffect, useCallback} from 'react'

export const useGameStatus = (rowsCleared) => {
    const [score, setScore] = useState(0);
    const [rows, setRows] = useState(0);
    const [level, setLevel] = useState(0);

    const linePoints = [40, 100, 300, 1200];

    const calcScore = useCallback(() => {
        if(rowsCleared > 0) {
            setScore(prev => prev + linePoints[rowsCleared-1] * (level+1));
            setRows(prev => prev + rowsCleared);
            if(rows > (level+1)*10) {
                setLevel(prev => prev + 1);
            }
        }
    }, [level, linePoints, rowsCleared]);

    useEffect(() => {
        calcScore();
    }, [calcScore, rowsCleared]);

    return [score, setScore, rows, setRows, level, setLevel];
}
