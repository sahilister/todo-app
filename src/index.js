import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

function App() {
    const date = new Date()
    const timeOfDay = date.getHours()
    let printStat
    if(timeOfDay > 0 && timeOfDay < 12)
        printStat = "Good Morning"
    else if(timeOfDay >= 12 && timeOfDay <= 17)
        printStat = "Good Afternoon"
    else 
        printStat = "Good Night";
    
    return(<h1> {printStat} </h1>)
}

ReactDOM.render(<App />, document.getElementById("root"));