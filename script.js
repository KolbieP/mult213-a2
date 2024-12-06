//Header component 
function Header(props) {
    return (
        <div className="header">
            <h1>{props.title}</h1>
            <p>{props.message}</p>
        </div>
    );
}

//Footer component 
function Footer(props) {
    return (
        <div className="footer">
            <p>{props.message}</p>
            <p>Copyright © 2023 My Website. All rights reserved.</p>
        </div>
    );
}


//To Do List component 
function TodoList(props) {
    return (
         <div className="list"> 
             <ul> 
                 {props.todos.map(todo => ( 
                    <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}> 
                        <input type='checkbox' id={todo.id} defaultChecked={todo.completed}></input> 
                        <label htmlFor={todo.id}>{todo.text}</label> 
                    </li> ))} 
             </ul> 
             <button type="button">Delete</button>
         </div>
    );
}

//Card component 
function Card(props) {
    return (
        <div className="card">
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
            
            <Card title="My Card Title" subtitle="My Card Subtitle" content="This is the content of my card." image="media/image.jpeg" />
 
            <Footer message="Contact me at contact@mywebsite.com" />
        </div>
    );
}

//react DOM render
//only ever should have 1
ReactDOM.render(<App />,document.getElementById('root'));