import React, {Component} from 'react'
import todoData from './todoData'
import TodoItem from './TodoItem'



class App extends Component {
    constructor() {
        super()
        this.state = {
            todos: todoData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id) {
        
    }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
            )
        return(
            <div>
                {todoItems}
            </div>
        )
    }
}
export default App;