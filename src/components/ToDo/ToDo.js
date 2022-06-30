import React from "react";

const ToDo = () => {
  return (
    <div className="flex justify-center items-center mt-20">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title justify-center mb-10">Add Works to do</h2>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
          <div class="card-actions justify-end">
            <button class="btn bg-blue-700 w-full mt-5">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
