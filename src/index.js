import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
// import TodoItems from './TodoItems.js'
// import ContactCard from './ContactCard';
import App from './App.js';


// function App() {
//     return(
//         <div className="todo">
//             <TodoItems />
//             <TodoItems />
//             <TodoItems />
//             <TodoItems />
//         </div>
//     );
// }

// function App1() {
//     return(
//         <div>
//             <ContactCard 
//                 contact={{name:"superman", phone:"12", email:"@superman"
//                 }}
//             />
//             <ContactCard 
//                 contact={{name:"spiderman", phone:"34", email:"@spiderman"
//                 }}
//             />
//             <ContactCard 
//                 contact={{name:"batman", phone:"56", email:"@batmnan"
//                 }}
//             />
//             <ContactCard 
//                 contact={{name:"ironman", phone:"78", email:"@ironman"
//                 }}
//             />
//         </div>
//    );
// }


ReactDOM.render(<App />, document.getElementById('root'));