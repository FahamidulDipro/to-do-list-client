import React, { useEffect, useState } from "react";

const ToDoList = () => {
  const [toDoItems, setToDoItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/todos")
      .then((res) => res.json())
      .then((data) => setToDoItems(data));
  }, []);
  const handleEdit = () => {
    console.log("Edited");
  };
  const handleDelete = () => {
    console.log("Deleted");
  };
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Tasks</th>
            <th>Edit Task</th>
            <th>Delete Task</th>
          </tr>
        </thead>
        <tbody>
          {toDoItems.map((task, count = 0) => (
            <tr key={task._id}>
              <th>{count + 1}</th>
              <td>{task?.todoItem}</td>
              <td>
                <button
                  className="btn btn-sm bg-yellow-600 border-0"
                  onClick={handleEdit}
                >
                  Edit
                </button>
              </td>
              <td>
                {" "}
                <button
                  className="btn bg-red-600 text-white btn-sm border-0"
                  onClick={handleDelete}
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
