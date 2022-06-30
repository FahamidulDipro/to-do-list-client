import React from "react";
import { useForm } from "react-hook-form";

const ToDo = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex justify-center items-center mt-20">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title justify-center mb-10">Add Works to do</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("todoItem", { required: true })}
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
            <div class="card-actions justify-end">
              <button class="btn bg-blue-700 w-full mt-5" type="submit">
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
