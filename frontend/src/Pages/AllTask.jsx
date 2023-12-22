import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hook/useAxios";
import { FaTrash } from "react-icons/fa6";

const AllTask = () => {
  const axios = useAxios();

  const getTask = async () => {
    const res = await axios.get("/all-task");
    return res;
  };
  const { data } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTask,
  });

  const handleDelete = (id) => {
    console.log("delete");
    axios
      .delete(`/all-task/${id}`, id)
      .then((data) => {
        console.log(data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <p className="text-6xl mb-10">All Task</p>
      <div className="bg-[#ffffff0d] p-16 rounded-2xl max-w-6xl mr-10 text-black">
        <div className="overflow-x-auto">
          <table className="table text-white">
            {/* head */}
            <thead className="text-white">
              <tr>
                <th>No</th>
                <th>Task Title</th>
                <th>Task Priority</th>
                <th>Task Deadline</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.length > 0 ? (
                <>
                  {data?.data?.map((task, index) => (
                    <tr key={task._id}>
                      <th>{index + 1}</th>
                      <td> {task.title} </td>
                      <td> {task.priority} </td>
                      <td> {task.date} </td>
                      <td>
                        <button onClick={() => handleDelete(task._id)}>
                          <FaTrash></FaTrash>
                        </button>
                      </td>
                    </tr>
                  ))}
                </>
              ) : (
                <p>No Task Available</p>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllTask;
