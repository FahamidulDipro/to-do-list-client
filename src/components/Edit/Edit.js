import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { MdEdit } from "react-icons/md";
const Edit = () => {
  const { taskId } = useParams("taskId");
  //Fetching tasks from database
  const [toDoItems, setToDoItems] = useState([]);
  useEffect(() => {
    fetch("https://nameless-peak-49382.herokuapp.com/todos")
      .then((res) => res.json())
      .then((data) => setToDoItems(data));
  }, []);

  const selectedTask = toDoItems.find((item) => item._id === taskId);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({});
  const onSubmit = (data) => {
    data.taskId = taskId;
    fetch("https://nameless-peak-49382.herokuapp.com/editTask", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    navigate("/");
    console.log(data);
  };
  const selectedTaskName = selectedTask?.todoItem;
  const [task, setTask] = useState(selectedTaskName);
  useEffect(() => {
    setTask(selectedTaskName);
  }, [selectedTaskName]);

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setTask(event.target.value);
  };
  console.log(task);
  return (
    <div className="h-screen mt-20">
      <div className="flex justify-center items-center mt-20">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title justify-center mb-10">Edit Task</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("todoItem")}
                type="text"
                value={`${task}`}
                className="input input-bordered w-full max-w-xs placeholder-black"
                onChange={handleInputChange}
              />
              <div className="card-actions justify-end">
                <button className="btn bg-blue-700 w-full mt-5" type="submit">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Edit;
