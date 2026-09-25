const Task = (props) => {

    let priorityColour;

    if (props.level === "Low") {
        priorityColour = "green";
    } else if (props.level === "Medium") {
        priorityColour = "#ffd580";
    } else if (props.level === "High") {
        priorityColour = "red";
    }

    return (
        <div className="card" style={{ backgroundColor: props.done ? 'lightgrey' : '#5bb4c4' }}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="description">{props.description}</p>
            <p className="level" style={{backgroundColor: priorityColour, borderRadius: "4px"}}>{props.level}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
    )
}

export default Task;