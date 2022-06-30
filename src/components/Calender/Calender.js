import React, { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Calender = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="flex justify-center items-center mt-20">
      <DayPicker mode="single" selected={date} onSelect={setDate}></DayPicker>
    </div>
  );
};

export default Calender;
