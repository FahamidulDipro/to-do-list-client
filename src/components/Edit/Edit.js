import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import EditForm from "./EditForm";

const Edit = () => {
  const { taskId } = useParams("taskId");
  //Fetching tasks from database
  const [toDoItems, setToDoItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/todos")
      .then((res) => res.json())
      .then((data) => setToDoItems(data));
  }, []);

  const selectedTask = toDoItems.find((item) => item._id === taskId);
  const { register, handleSubmit } = useForm({});
  const onSubmit = (data) => {
    data.taskId = taskId;
    fetch("http://localhost:5000/editTask", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
  };
  // const [preloadedValue, setPreloadedValue] = useState([
  //   { todoItem: selectedTask?.todoItem },
  // ]);
  // console.log(selectedTask?.todoItem);
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   setData(selectedTask);
  // }, [data]);
  // const preloadedValue = {
  //   toDoItem: selectedTask?.toDoItem,
  // };

  // return <EditForm preloadedValue={data}></EditForm>;
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
                placeholder={`${selectedTask?.todoItem}`}
                className="input input-bordered w-full max-w-xs placeholder-black"
              />
              <div className="card-actions justify-end">
                <button className="btn bg-blue-700 w-full mt-5" type="submit">
                  Add
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
