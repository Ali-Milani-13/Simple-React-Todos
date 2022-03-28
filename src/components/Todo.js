import React from 'react'
import td from '../styles/Td.module.css'
const Todo = ({text,setTodos,todos,todo}) => {
    const deleteHandler = ()=>{
        setTodos(todos.filter(el=>el.ID !== todo.ID))
    }
    const completeHandler = ()=>{
        setTodos(todos.map(el=>{
            if(el.ID === todo.ID){
                return{
                    ...el,completed:!el.completed
                }
            }
            return el
        }))
    }
    return (
    <div className={td.todoList} style={todo.completed?{transition:'background .5s ease',background:'green'}:{transition:'background .5s ease',background:'steelblue'}}>
     <li>{text}</li>
     <div style={{display:'flex' , gap:'1rem'}}>
     <button className={td.delBtn} onClick={deleteHandler}>X</button>
     <button className={td.compBtn}onClick={completeHandler}>V</button>
     </div>
    </div>
    )
}

export default Todo
