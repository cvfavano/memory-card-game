
function closeModal (){
    document.querySelector('#welcome-modal').style.display = 'none';
}


function WelcomeModal({clickHandler}) {

    return (
        <div>
            <div id="welcome-modal" className="modal">

            <div className="modal-content">
            <span className="close-modal" onClick={closeModal}>&times;</span>
            <p>Welcome!</p>
            <h2>Game Play</h2>
            <p>Instructions here</p>
            <button id='start-game' type='button' onClick={clickHandler}>Let's Go</button>
            </div>

            </div>
        </div>
    )
}

export default WelcomeModal