
//should this be a shared function
function closeModal (){
    document.querySelector('#welcome-modal').style.display = 'none';
}



//why is this not valid {clickHandler}
function WelcomeModal({clickHandler}) {

    return (

        //should this be hardcoded instead of component?
        <div>
            <div id="welcome-modal" className="modal">

            <div className="modal-content">
            <span className="close-modal" onClick={closeModal}>&times;</span>
            <p>Welcome!</p>
            <h2>Game Play</h2>
            <p>Instructions here</p>
            {/* why linting error */}
            <button id='start-game' type='button' onClick={clickHandler}>Let's Go</button>
            </div>

            </div>
        </div>
    )
}

export default WelcomeModal