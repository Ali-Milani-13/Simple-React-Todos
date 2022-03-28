import React from 'react'
import Form from '../styles/Form.module.css'
const TodoForm = ({setinputText,inputText,todos,setTodos}) => {
    
    const inputHandler = e=>{
        setinputText(e.target.value)
    }
    const submitHandler = e=>{
        e.preventDefault()
        if(inputText.trim()){
            setTodos([
                ...todos,{
                    text:inputText,
                    completed:false,
                    ID:Math.pow(Math.random(),Math.random())
                }
            ])
            setinputText('')
        }

    }
    return (
    <form onSubmit={submitHandler}>
        <div className={Form.submitSection}>
            <input type='text' onChange={inputHandler} value={inputText}/>
            <button type='submit'>Add</button>
        </div>
    </form>
    )
}

export default TodoForm
