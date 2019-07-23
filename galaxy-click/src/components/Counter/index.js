import React from 'react';
import './style.css';

function Counter(event){
    return(
        <div className="jumbotron jumbotron-fluid" id="counter">
        <div className="container">
            <h1 className="display-4" id="scoreClicked" >{event.score}</h1>
            <h2 className="lead" id="winLose"> {event.userMessage}</h2>
        </div>
        </div>
    )
}

export default Counter;

