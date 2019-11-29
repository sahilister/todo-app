import React from 'react';
import TodoItem from './TodoItem'
import tododata from './todoData'


function App() {
    const todoItems = tododata.map(item => <TodoItem item={item}/>)
    
    return(
        
        
        <div className="todo-list">
            {todoItems}
        </div>
    )
}
export default App;