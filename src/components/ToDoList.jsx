import React from 'react'


const ToDoList = (props) => {

    const handleDelete=(e, delIdx) => {
        const filtertodo = props.toDoList.filter((entry,i) => {
            return i!==delIdx;
        });
    props.updatedList(filtertodo)
    }

    const handleComplete=(idx)=>{
        const updatedTodos=props.toDoList.map((entry,i)=>{
            if(idx==i){
                entry.complete=!entry.complete;
            }
            return entry;
        })
    props.updatedList(updatedTodos)
    }


    return (
        <div>
            <h1>To Do List:</h1>
            {
                props.toDoList.map((entry, i) => {
                    let todoClasses=""
                    if (entry.complete){
                        todoClasses="line-through"
                    }
                    return(
                        <div key={i}>
                            <ul>
                                <li>
                                    <span className={todoClasses}>{entry.text}</span>
                                </li>
                                <button onClick={(e)=>{
                                    handleDelete(e, i);
                                }}>Delete</button>
                                <input onChange={(e)=>{
                                    handleComplete(i);
                                }} checked={entry.complete} type="checkbox"
                                />
                            </ul>
                            
                        </div>
                )})
            }
        </div>
    )
}

export default ToDoList