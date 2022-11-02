import React, {useState} from 'react'

const ToDoForm = (props) => {
    const [entry, setEntry] = useState({
        text:"",
        complete: false
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewEntry(entry);
        setEntry({
            text:"",
            complete: false
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>To Do Entry: </label>
                <input type="text" onChange={(e) => setEntry({text: e.target.value, complete: false})} value={entry.text}></input>
                <br/>
                <input type="submit" value="Add"/>
            </form>
        </div>
    )
}

export default ToDoForm