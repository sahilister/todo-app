import React from 'react';

function TodoItem(props) {
    return(
        <div className="todo-items">
            <input type="checkbox" checked={props.item.completed}/>
            <h3>{props.item.text}</h3>
        </div>
    )
}
export default TodoItem;