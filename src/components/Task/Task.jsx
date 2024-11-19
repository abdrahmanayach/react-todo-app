import PropTypes from "prop-types";
import "./task.css";
import check from "../../assets/icons/true.svg";
import trash from "../../assets/icons/trash.svg";

export function Task({ id, title, isCompleted, setTasks }) {
  const handleMarkCompleted = () => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: true } : task
      )
    );
  };

  const handleDelete = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="task">
      <p className={`title ${isCompleted && "completed"}`}>{title}</p>
      <div className="icons">
        {!isCompleted && (
          <img src={check} className="arrow" onClick={handleMarkCompleted} />
        )}
        <img src={trash} className="trash" onClick={handleDelete} />
      </div>
    </div>
  );
}

Task.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  isCompleted: PropTypes.bool,
  setTasks: PropTypes.func,
};
