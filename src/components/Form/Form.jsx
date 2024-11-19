import "./form.css";
import add from "../../assets/icons/add.svg";
import { useState } from "react";
import PropTypes from "prop-types";

export function Form({ setTasks }) {
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!task) return;
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), title: task, isCompleted: false },
    ]);
    setTask("");
  }

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        placeholder="Add a new task"
        onChange={handleChange}
        value={task}
      />
      <button type="submit">
        <img src={add} alt="Add" />
      </button>
    </form>
  );
}

Form.propTypes = {
  setTasks: PropTypes.func,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      isCompleted: PropTypes.bool,
    })
  ),
};
