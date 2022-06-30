import React, { useEffect, useState } from 'react';

const CompletedTasks = () => {
    const [completedTasks,setCompletedTasks] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/completedTasks")
          .then((res) => res.json())
          .then((data) => setCompletedTasks(data));
      }, []);
    return (
        <div className='h-screen mt-20'>
          <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Serial</th>
     
            <th>Completed Tasks</th>
    
           
          </tr>
        </thead>
        <tbody>
          {completedTasks.map((task, count = 0) => (
            <tr key={task._id}>
              <th>{count + 1}</th>
             
              <td>{task?.todoItem}</td>
             
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
    );
};

export default CompletedTasks;