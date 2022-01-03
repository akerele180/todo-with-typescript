import React from "react";
import { MdDelete } from "react-icons/md";
import { ITask } from "./Interface";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}
const style = {
  cursor: "pointer"
};
export const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div key={Math.round(Math.random() * 1000)}>
      {task.task} {task.deadline}
      <MdDelete
        style={style}
        onClick={() => {
          completeTask(task.task);
        }}
      />
    </div>
  );
};
