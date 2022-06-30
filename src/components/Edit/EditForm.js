import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const EditForm = ({ preloadedValue }) => {
  const { taskId } = useParams("taskId");
  //Fetching tasks from database
  //   const [toDoItems, setToDoItems] = useState([]);
  //   useEffect(() => {
  //     fetch("http://localhost:5000/todos")
  //       .then((res) => res.json())
  //       .then((data) => setToDoItems(data));
  //   }, []);
  //   const selectedTask = toDoItems.find((item) => item._id === taskId);

  //   const [preloadedValue, setPreloadedValue] = useState([
  //     { todoItem: selectedTask?.todoItem },
  //   ]);

  const { register, handleSubmit } = useForm({
    defaultValues: preloadedValue?.toDoItem,
  });
  console.log(preloadedValue);
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
                //   placeholder={`${selectedTask?.todoItem}`}
                className="input input-bordered w-full max-w-xs"
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

export default EditForm;
