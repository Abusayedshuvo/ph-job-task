import { FaCheck } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hook/useAxios";

const DashboardHome = () => {
  const axios = useAxios();
  const getTask = async () => {
    const res = await axios.get("/all-task");
    return res;
  };
  const { data } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTask,
  });

  return (
    <>
      <h1 className="text-center text-5xl">Task Management</h1>

      <div className="grid w-full grid-cols-3 pt-20">
        <div>
          <p className="text-2xl text-cente   ">To Do</p>

          <div className="mt-10">
            {data?.data?.map((task) => (
              <div key={task._id}>
                <p className="text-lg">{task.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-2xl text-center">In Progress</p>
        </div>
        <div className="text-right">
          <div className="flex items-center">
            <p className="text-2xl text-center pr-5">Done</p>
            <FaCheck />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
