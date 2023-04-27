function TaskToComplete({key, step,section}){
    return(
        <div className="task-to-complete">
            <p>{step}</p>
            <p>3/23/2023</p>
            <p className="type-of-task">Finance</p>
        </div>
    )
}
export default TaskToComplete