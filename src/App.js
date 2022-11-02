import './App.css';
import React, {useState} from 'react'
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {
    const [toDoList, setToDoList] = useState([])
    const newEntry = (newTodo) => {
        setToDoList([...toDoList,newTodo])
        console.log(toDoList);
    }
    const updatedList=(list)=>{
        setToDoList(list)
    }


    return (
        <div className="App">
    <header className="App-header">
        <ToDoForm onNewEntry={newEntry}/>
        <br />
        <ToDoList toDoList={toDoList} updatedList={updatedList}/>
    </header>
    </div>
);
}

export default App;
