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

  // const [preloadedValue, setPreloadedValue] = useState([
  //   { todoItem: selectedTask?.todoItem },
  // ]);
  console.log(selectedTask?.todoItem);
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(selectedTask);
  }, [data]);
  // const preloadedValue = {
  //   toDoItem: selectedTask?.toDoItem,
  // };

  return <EditForm preloadedValue={data}></EditForm>;
};
export default Edit;
