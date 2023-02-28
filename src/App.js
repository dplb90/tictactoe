
import { useState } from 'react';
import './App.css';
import Board from './Components/Board/Board';
import ScoreBoard from './Components/ScoreBoard/ScoreBoard';

 const winnerPositions = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];

const App = () => {

  const [turn, setTurn]= useState('X');
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winnerSquares, setWinnerSquares]= useState([]);
  const [score, setScore] =  useState({
    X: 0,
    O: 0,
  });

  const reset = () => {
    setTurn('X');
    setSquares(Array(9).fill(null));
    setWinnerSquares([]);
  }


  const checkForWinner = newSquares => {
    for(let i = 0; i < winnerPositions.length; i++){
      const [a,b,c] = winnerPositions[i];
      if(newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c]){
        //hay ganador si se da
        endGame(newSquares[a], winnerPositions[i]);
        return
      }
    }
      if(!newSquares.includes(null)){
        //es empate
        endGame(null, Array.from(Array(10).keys()));
        return
      }
      setTurn(turn === 'X' ? 'O' : 'X');
  }

  const handleClick = square => {
    let newSquares = [...squares];
    newSquares.splice(square, 1 , turn);
    setSquares(newSquares);
    checkForWinner(newSquares);
  }

  const endGame = (result, winnerPositions) => {
    setTurn(null);
    if(result !== null){
      setScore({
        ...score,
        [result]: score[result] + 1,
      })
      alert(`ha ganado ${result}`)
    }
    setWinnerSquares(winnerPositions);
    setTimeout(reset,2500);
    
  }

  return (
    <div className="container">
      <Board winnerSquares={winnerSquares} turn={turn} squares={squares} onClick={handleClick}/>
      <ScoreBoard scoreO={score.O} scoreX={score.X}/>
    </div>
  );
}

export default App;
