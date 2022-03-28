import React from 'react'
import Todo from './Todo'
import List from '../styles/List.module.css'
const TodoList = ({todos,setTodos}) => {
    return (
        <ul className={List.todoHolder}>
            {
                todos.map(todo=>(
                    <Todo text={todo.text} key={todo.ID} todos={todos} setTodos={setTodos} todo={todo}/>
                ))
            }
        </ul>
    )
}

export default TodoList
