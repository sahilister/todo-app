import React from 'react';
import Joke from './Joke.js'
import jokesData from './jokesData.js'

function App() {
    
    const jokeComponents = jokesData.map(num => {
            return( 
                <Joke question={num.question} answer={num.answer} />
                )
            })
    return(
        <div>
            {jokeComponents}
        </div>
    )
}
export default App;