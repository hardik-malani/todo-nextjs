import { useState } from "react";
import { useRouter } from "next/router";

const EditTask = () => {

  const router = useRouter();
  
  const {id} = router.query

  const tasks = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('todo'));


  const task = tasks && tasks.find((task) => task.id === parseInt(id));
  const [taskData, setTaskData] = useState(task);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const updatedTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return { ...t, ...taskData };
      } else {
        return t;
      }
    });
    localStorage.setItem("todo", JSON.stringify(updatedTasks));
    // Navigate to the tasks page
    router.push("/tasks");
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Edit Task</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="task" className="block text-gray-700 font-bold mb-2">
            Task
          </label>
          <input
            type="text"
            id="task"
            name="task"
            value={taskData.task}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="start_time" className="block text-gray-700 font-bold mb-2">
            Start Time
          </label>
          <input
            type="time"
            id="start_time"
            name="startTime"
            value={taskData.startTime}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="end_time" className="block text-gray-700 font-bold mb-2">
            End Time
          </label>
          <input
            type="time"
            id="end_time"
            name="endTime"
            value={taskData.endTime}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Save
        </button>
      </form>
    </>
  );
};

export default EditTask;
