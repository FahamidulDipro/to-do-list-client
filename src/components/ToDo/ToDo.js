import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ToDo = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/addTask", {
      method: "POST",
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
    <div className="flex justify-center items-start mt-20 h-screen ">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center mb-10">Add Works to do</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("todoItem", { required: true })}
              type="text"
              placeholder="Type here"
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
  );
};

export default ToDo;
