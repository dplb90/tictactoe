import './ScoreBoard.css';

const ScoreBoard = ({scoreX,scoreO}) =>(
    <div className='score-board'>
        <div>X = {scoreX}</div>
        <div>O = {scoreO}</div>
    </div>
)

export default ScoreBoard;