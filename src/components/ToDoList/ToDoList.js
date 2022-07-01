import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";

const ToDoList = () => {
  const [toDoItems, setToDoItems] = useState([]);
  const [completed, setCompleted] = useState(true);
  useEffect(() => {
    fetch("https://nameless-peak-49382.herokuapp.com/todos")
      .then((res) => res.json())
      .then((data) => setToDoItems(data));
  }, []);
  const navigate = useNavigate();
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };
  const handleDelete = (id) => {
    const taskForDelete = toDoItems.find((task) => task._id === id);
    fetch(
      `https://nameless-peak-49382.herokuapp.com/deleteTask/${taskForDelete._id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(taskForDelete),
      }
    )
      .then((res) => res.json())
      .then((result) => console.log(result));
    window.location.reload();
  };
  const handleCompleted = (id) => {
    const taskCompleted = toDoItems.find((task) => task._id === id);
    if (completed === true) {
      fetch(`https://nameless-peak-49382.herokuapp.com/completedTasks`, {
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

      fetch(
        `https://nameless-peak-49382.herokuapp.com/deleteFromCompleted/${taskForDelete._id}`,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(taskForDelete),
        }
      )
        .then((res) => res.json())
        .then((result) => console.log(result));
    }
    console.log(id);
  };
  return (
    <div className="overflow-x-auto container mx-auto">
      <table className="table w-full">
        <thead className="text-white">
          <tr>
            <th className="bg-black"></th>
            <th className="bg-black">Complete Status</th>
            <th className="bg-black">Tasks</th>
            <th className="bg-black">Edit Task</th>
            <th className="bg-black">Delete Task</th>
          </tr>
        </thead>
        <tbody>
          {toDoItems.map((task, count = 0) => (
            <tr key={task._id}>
              <th>{count + 1}</th>
              <td>
                <div className="form-control">
                  {completed ? (
                    <input
                      type="checkbox"
                      className="checkbox checkbox-accent"
                      onChange={(e) => setCompleted(e.target.checked)}
                      onClick={() => {
                        handleCompleted(task?._id);
                      }}
                    />
                  ) : (
                    <span>Completed</span>
                  )}
                </div>
              </td>
              <td>{task?.todoItem}</td>
              <td>
                <button
                  className="btn btn-sm bg-white text-blue-700 text-2xl border-0"
                  onClick={() => handleEdit(task?._id)}
                >
                  <MdEdit className="mr-1"></MdEdit>
                </button>
              </td>
              <td>
                {" "}
                <button
                  className="btn  text-red-600 bg-white btn-sm border-0 text-2xl"
                  onClick={() => handleDelete(task?._id)}
                >
                  <MdDelete className="mr-1"></MdDelete>
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
