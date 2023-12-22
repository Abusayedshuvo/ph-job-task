import { useState } from "react";
import Swal from "sweetalert2";
import useAxios from "../Hook/useAxios";

const AddTask = () => {
  const axios = useAxios();
  const [error, setError] = useState("");

  const handleUserLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const priority = form.priority.value;
    const date = form.date.value;
    const addTask = { title, description, priority, date };
    axios
      .post("/task", addTask)
      .then((data) => {
        if (data.data.insertedId) {
          Swal.fire("Task Added", "", "success");
        }
        console.log(data.data);
      })
      .catch(function (error) {
        setError(error);
        console.log(error);
      });
  };

  return (
    <div>
      <p className="text-6xl mb-10">Add Task</p>
      <div className="bg-[#ffffff0d] p-16 rounded-2xl max-w-4xl text-black">
        <form onSubmit={handleUserLogin}>
          <input
            type="text"
            name="title"
            className="py-4 px-4 block w-full bg-slate-100 mb-5"
            placeholder="Task Title"
          />
          <input
            type="text"
            name="description"
            className="py-4 px-4 block w-full bg-slate-100 mb-5"
            placeholder="Task Description"
          />

          <select
            name="priority"
            className="select select-bordered h-14 mb-4 text-black w-full rounded-none"
          >
            <option disabled selected>
              Priority
            </option>
            <option>Low</option>
            <option>Moderate</option>
            <option>High</option>
          </select>

          <p className="text-white">Task Deadlines</p>
          <input
            type="date"
            name="date"
            className="py-4 px-4 block w-full bg-slate-100 mb-5 mt-2 text-black"
            placeholder="Task Description"
          />

          <div className="text-center mt-10">
            <input
              className="cursor-pointer inline-block p-4 w-1/2 btn-one"
              type="submit"
              value="Add Task"
            />
          </div>
        </form>

        {error && (
          <p className="text-red-500 mt-5 font-semibold text-center">{error}</p>
        )}
      </div>
    </div>
  );
};

export default AddTask;
