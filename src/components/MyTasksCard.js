import { useEffect, useState } from "react";
import {useCollapse} from 'react-collapsed';

function MyTasksCard() {
//   const [nextStepsOpen, setNextStepsOpen] = useState(false);
//   const [completedStepsOpen, setCompletedStepsOpen] = useState(false);
//   const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

//   const toggleNextSteps = () => {
//     setNextStepsOpen((prevState) => !prevState);
//   };

//   const toggleCompletedSteps = () => {
//     setCompletedStepsOpen((prevState) => !prevState);
//   };
    const [inOpen, setIncompleteOpen] = useState(false);
    const [comOpen, setCompleteOpen] = useState(false);
    const incompleteToggle = () => {
        setIncompleteOpen(!inOpen);
    };
    const completeToggle = () => {
        setCompleteOpen(!comOpen);
    };
 


  return (
    <div className="my-trail-card">
        <h1>My Tasks</h1>
        <div className="task-filers">
            <h4>All</h4>
            <h4>Finance</h4>
            <h4>Academic</h4>
            <h4>Personal</h4>
            <h4>Professional</h4>
        </div>
        <div className="next-step-section">
            <button type="button" className="collapse" onClick={incompleteToggle}>
            Next Steps
            </button>
            {inOpen && (
            <div className="content">
                <div className="task-to-complete">

                    <p>get game dev done</p>
                    <p>3/23/2023</p>
                    <p className="type-of-task">Finance</p>
                </div>
                <div className="task-to-complete">
                    <p>get this layout completed</p>
                </div>
            </div>
            )}
        </div>
        <div className="completed-step-section">
            <button type="button" className="collapse" onClick={completeToggle}>
            Completed Steps            V
            </button>
            {comOpen && (
            <div className="content">
                <div className="task-to-complete">
                    <p>get game dev done</p>
                </div>
                <div className="task-to-complete">
                    <p>get this layout completed</p>
                </div>
            </div>
            )}
      </div>
    </div>
  );
}

export default MyTasksCard;
/*


        {completedStepsOpen && (
          <div className="content">
            <p className="task-to-complete">get game dev done</p>
            <p className="task-to-complete">get this layout completed</p>
          </div>
        )}
function MyTasksCard() {
    var coll = document.getElementsByClassName("collapse");
    var i;
    for (i = 0; i<coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
            content.style.display = "none";
            } else {
            content.style.display = "block";
            }
        });
    };

    return (
        <div className="my-trail-card">
            <h1>My Tasks</h1>
            <div className="task-filers">
                <h4>All</h4>
                <h4>Finance</h4>
                <h4>Academic</h4>
                <h4>Personal</h4>
                <h4>Professional</h4>
            </div>
            <div className="next-step-section">
                <button type="button" className="collapse" >Next Steps</button>
                <div className="content">
                    <p className="task-to-complete"> get game dev done</p>
                    <p className="task-to-complete"> get this layout completed</p>
                </div>
            </div>
            <div className="completed-step-section">
                <button type="button" className="collapse" >Completed Steps</button>
                <div className="content">
                    <p className="task-to-complete"> get game dev done</p>
                    <p className="task-to-complete"> get this layout completed</p>
                </div>
            </div>
        </div>
    )
}
export default MyTasksCard;
*/