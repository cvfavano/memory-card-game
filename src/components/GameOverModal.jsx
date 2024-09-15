function GameOverModal({clickHandler}) {

function closeModal (){
    document.querySelector('#game-over-modal').style.display = 'none';
}

    return(
        <div>
            <div id="game-over-modal" className="modal">

<div className="modal-content">
<span className="close-modal" onClick={closeModal}>&times;</span>
<p>Game Over</p>
<p>stats</p>
{/* why linting error */}
<button id='start-game' type='button' onClick={clickHandler}>Bye</button>
{/* <button id='start-game' type='button' onClick={clickHandler}>Play Again</button> */}
</div>

</div>
        </div>
    )
}

export default GameOverModal

