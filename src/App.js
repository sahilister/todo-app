import React, {Component} from 'react'
import todoData from './todoData'
import TodoItem from './TodoItem'



class App extends Component {
    constructor() {
        super()
        this.state = {
            todos: todoData
        }
    }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem item={item} />)
        return(
            <div>
                {todoItems}
            </div>
        )
    }
}
export default App;