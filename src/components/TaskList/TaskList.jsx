import { Task } from "../Task/Task";
import "./tasklist.css";
import PropTypes from "prop-types";

export function TaskList({ title, tasks, setTasks }) {
  return (
    <div>
      <div className="todo-title">
        <p className="title">
          {title} - {tasks.length}
        </p>
      </div>
      <div className="todo-list">
        {tasks.map((task, index) => (
          <Task
            key={index}
            title={task.title}
            isCompleted={task.isCompleted}
            id={task.id}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))}
      </div>
    </div>
  );
}

TaskList.propTypes = {
  title: PropTypes.string,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      isCompleted: PropTypes.bool,
    })
  ),
  setTasks: PropTypes.func,
};
