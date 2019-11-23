import React from 'react';
import Joke from './Joke.js'

function App() {
    return(
        <div>
            <Joke 
                info={{ answer:"Make me one with everything." }}
            />
            <Joke 
                info={{question:"You know why you never see elephants hiding up in trees?", answer:"Because they’re really good at it." }}
            />
            <Joke 
                info={{question:"What is red and smells like blue paint?", answer:"Red paint." }}
            />
            <Joke 
                info={{question:"Where does the General keep his armies?", answer:"In his sleevies!" }}
            />
        </div>
    );
}
export default App;