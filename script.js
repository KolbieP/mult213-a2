//Header component 
function Header(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.message}</p>
        </div>
    );
}

//Footer component 
function Footer(props) {
    return (
        <div>
            <p>{props.message}</p>
            <p>Copyright © 2023 My Website. All rights reserved.</p>
        </div>
    );
}


//To Do List component 
function TodoList(props) {
    return (
        // <div>
        //     <ul>
        //         <li>
        //             <input type='checkbox' id="Todo" defaultChecked={false}></input>
        //             <label for="Todo">{props.todos}</label>
        //         </li>
        //     </ul>
        //     <button type="button">Delete</button>
        // </div>
        <div> 
            <ul> 
                {props.todos.map(todo => ( <li key={todo.id}> 
                    <input type='checkbox' id={`todo-${todo.id}`} defaultChecked={todo.completed}></input> 
                    <label htmlFor={`todo-${todo.id}`}>{todo.text}</label> </li> ))} 
            </ul> 
            <button type="button">Delete</button>
        </div>
    );
}


// const TodoListArr = (props) => {
//     // create empty student array
//      let todo_array = props.todos.map(todo => (
//          <TodoList {todo.todos} />
//      ));

//      return (
//          {todo_array}
//      )
// }


//Card component 
function Card(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <p>{props.content}</p>
            <img src={props.image} alt={props.title}/>
        </div>
    );
}


// App component 
//Root of the entrie web application
function App() {
    return (
        <div>
            <Header title="Welcome to My Website!" message="Thanks for visiting my site."/>

            <TodoList todos={[
                { id: 1, text: "Complete React assignment", completed: false },
                { id: 2, text: "Study for math test", completed: false },
                { id: 3, text: "Do laundry", completed: true }
                ]} />  
            
            <Card title="My Card Title" subtitle="My Card Subtitle" content="This is the content of my card." image="https://example.com/my-image.jpg" />
 
            <Footer message="Contact me at contact@mywebsite.com" />
        </div>
    );
}

//react DOM render
//only ever should have 1
ReactDOM.render(<App />,document.getElementById('root'));