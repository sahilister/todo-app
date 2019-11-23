import React from 'react';

function Joke(props) {
    return(
        <div>
            <h2 style={{display: props.info.question ? "block":"none"}}>Question: {props.info.question}</h2>
            <h2>Answer: {props.info.answer}</h2>
            <hr />
        </div>
    );
}
export default Joke;