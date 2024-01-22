// import React, { Component } from "react";

// class TodoList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       task: "",
//       tasks: [],
//       editingTaskId: null,
//     };
//   }

//   handleChange = (event) => {
//     this.setState({ task: event.target.value });
//   };

//   handleAddClick = () => {
//     if (!this.state.task.length) {
//       return;
//     }

//     if (this.state.editingTaskId !== null) {
//       // if editing an existing task
//       const updatedTasks = this.state.tasks.map((t, index) =>
//         index === this.state.editingTaskId ? this.state.task : t
//       );

//       this.setState({
//         task: "",
//         tasks: updatedTasks,
//         editingTaskId: null,
//       });
//     } else {
//       // if adding a new task
//       this.setState({
//         task: "",
//         tasks: [...this.state.tasks, this.state.task],
//       });
//     }
//   };

//   handleEditClick = (taskId) => {
//     const taskToEdit = this.state.tasks[taskId];
//     this.setState({
//       task: taskToEdit,
//       editingTaskId: taskId,
//     });
//   };

//   handleDeleteClick = (taskId) => {
//     const updatedTasks = this.state.tasks.filter((task, index) => index !== taskId);
//     this.setState({
//       tasks: updatedTasks,
//       editingTaskId: null,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h1>Todo List</h1>
//         <input
//           type="text"
//           value={this.state.task}
//           onChange={this.handleChange}
//           placeholder="Add a task"
//         />
//         <button onClick={this.handleAddClick}>
//           {this.state.editingTaskId !== null ? "Edit Task" : "Add Task"}
//         </button>
//         <ul>
//           {this.state.tasks.map((task, index) => (
//             <li key={index}>
//               {task}
//               <button onClick={() => this.handleEditClick(index)}>Edit</button>
//               <button onClick={() => this.handleDeleteClick(index)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default TodoList;


// TodoList.jsx
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddClick = () => {
    if (!task.length) {
      return;
    }

    if (editingTaskId !== null) {
      // if editing an existing task
      const updatedTasks = tasks.map((t, index) =>
        index === editingTaskId ? task : t
      );

      setTask("");
      setTasks(updatedTasks);
      setEditingTaskId(null);
    } else {
      // if adding a new task
      setTask("");
      setTasks([...tasks, task]);
    }
  };

  const handleEditClick = (taskId) => {
    const taskToEdit = tasks[taskId];
    setTask(taskToEdit);
    setEditingTaskId(taskId);

    // Navigate to Task Detail page with the task ID and task data
    navigate(`/TaskDetail/${taskId}`, { state: { taskData: taskToEdit } });
  };

  const handleDeleteClick = (taskId) => {
    const updatedTasks = tasks.filter((_, index) => index !== taskId);
    setTasks(updatedTasks);
    setEditingTaskId(null);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="Add a task"
      />
      <button onClick={handleAddClick}>
        {editingTaskId !== null ? "Edit Task" : "Add Task"}
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleEditClick(index)}>Edit</button>
            <button onClick={() => handleDeleteClick(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;


