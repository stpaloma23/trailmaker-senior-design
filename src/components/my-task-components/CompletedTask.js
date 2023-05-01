function CompletedTask({id, task}){
    return(
        <div className="task-to-complete">
            <div className="next-step-text">
                <p id="article-step">{task}</p>
            </div>
        </div>
    )
}
export default CompletedTask;