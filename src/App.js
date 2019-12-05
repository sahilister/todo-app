import React, {Component} from 'react'
// import todoData from './todoData'
// import TodoItem from './TodoItem'
import Conditional from './Conditional'



// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             todos: todoData
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }
//     handleChange(id) {
//         this.setState(prevState => {
//             const updatedTodos = prevState.todos.map(todo => {
//                 if(todo.id === id) {
//                     todo.completed = !todo.completed
//                 }
//                 return todo
//             })
//             return {
//                 todos: updatedTodos
//             }
//         })
//     }

//     render() {
//         const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
//             )
//         return(
//             <div>
//                 {todoItems}
//             </div>
//         )
//     }
// }

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }

    render() {
        return(
            <div>
                <Conditional isLoading={this.state.isLoading} />
            </div>
        )
    }
}
export default App;