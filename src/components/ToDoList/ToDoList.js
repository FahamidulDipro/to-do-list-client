import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ToDoList = () => {
  const [toDoItems, setToDoItems] = useState([]);
  const [completed, setCompleted] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/todos")
      .then((res) => res.json())
      .then((data) => setToDoItems(data));
  }, []);
  const navigate = useNavigate();
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };
  const handleDelete = (id) => {
    const taskForDelete = toDoItems.find((task) => task._id === id);
    fetch(`http://localhost:5000/deleteTask/${taskForDelete._id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(taskForDelete),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    window.location.reload();
  };
  const handleCompleted = (id) => {
    const taskCompleted = toDoItems.find((task) => task._id === id);
    if (completed === true) {
      fetch(`http://localhost:5000/completedTasks`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(taskCompleted),
      })
        .then((res) => res.json())
        .then((result) => console.log(result));
      console.log(taskCompleted);
    } else {
      const taskForDelete = toDoItems.find((task) => task._id === id);

      fetch(`http://localhost:5000/deleteFromCompleted/${taskForDelete._id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(taskForDelete),
      })
        .then((res) => res.json())
        .then((result) => console.log(result));
    }
    console.log(id);
  };
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Status</th>
            <th>Tasks</th>
            <th>Edit Task</th>
            <th>Delete Task</th>
          </tr>
        </thead>
        <tbody>
          {toDoItems.map((task, count = 0) => (
            <tr key={task._id}>
              <th>{count + 1}</th>
              <td>
                <div className="form-control">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-accent"
                    onChange={(e) => setCompleted(e.target.checked)}
                    onClick={() => {
                      handleCompleted(task?._id);
                    }}
                  />
                </div>
              </td>
              <td>{task?.todoItem}</td>
              <td>
                <button
                  className="btn btn-sm bg-yellow-600 border-0"
                  onClick={() => handleEdit(task?._id)}
                >
                  Edit
                </button>
              </td>
              <td>
                {" "}
                <button
                  className="btn bg-red-600 text-white btn-sm border-0"
                  onClick={() => handleDelete(task?._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
