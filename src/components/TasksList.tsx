import React, { FC, useContext } from "react";

import { ActionType } from "@app/types/actionTypes";
import { Task } from "@app/types/tasksTypes";
import { ContextApp } from "@app/App";

const TasksList: FC = () => {
  const { state, changeState } = useContext(ContextApp);

  const removeTask = (task: Task) => {
    changeState!({ type: ActionType.REMOVE, payload: task });
  };

  const toggleTask = (task: Task) => {
    changeState!({ type: ActionType.TOGGLE, payload: task });
  };

  return (
    <>
      <ul>
        {state!.tasks.map((task, i) => (
          <li key={i} className={task.isDone ? "ready" : ""}>
            <label>
              <input type="checkbox" onChange={() => toggleTask(task)} checked={task.isDone} />
            </label>
            <div className="task-name">{task.name}</div>
            <button className="remove-button" onClick={() => removeTask(task)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TasksList;
