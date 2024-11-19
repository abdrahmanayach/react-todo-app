import { useState } from "react";
import { Form } from "./components/Form/Form";
import { TaskList } from "./components/TaskList/TaskList";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const completedTasks = tasks.filter((task) => task.isCompleted);
  const incompletedTasks = tasks.filter((task) => !task.isCompleted);

  console.log(completedTasks);
  console.log(incompletedTasks);
  return (
    <div className="container">
      <Form setTasks={setTasks} tasks={tasks} />
      <TaskList
        title="Tasks to do"
        tasks={incompletedTasks}
        setTasks={setTasks}
      />
      <TaskList title="Done" tasks={completedTasks} setTasks={setTasks} />
    </div>
  );
}
