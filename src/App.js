import {useState} from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
function App() {
  const[inputText,setinputText] = useState('')
  const[todos,setTodos] = useState([])
  return (
    <div className="App">
      <TodoForm inputText={inputText} setinputText={setinputText} todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
