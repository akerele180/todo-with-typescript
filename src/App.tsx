import React, { FC, useState, ChangeEvent, useEffect } from "react";
import { TodoTask } from "./TodoTask";
import { ITask } from "./Interface";
import "./styles.css";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);

  useEffect(() => {}, [task]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.className === "input-text") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addEvent = (): void => {
    const newEvent = {
      task: task,
      deadline: deadline
    };
    setTodo([...todo, newEvent]);
    setDeadline(0);
    setTask("");
  };

  const completeTask = (taskNameToDelete: string): void => {
    todo.filter((task) => {
      return task.task !== taskNameToDelete;
    });
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Add Event"
        className="input-text"
        value={task}
        onChange={handleChange}
      />
      <input
        type="number"
        className="input-number"
        value={deadline}
        placeholder="Enter deadline (in years)"
        onChange={handleChange}
      />
      <button className="add-button" onClick={addEvent}>
        Add Event
      </button>
      <div className="tasks-display">
        {todo.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
