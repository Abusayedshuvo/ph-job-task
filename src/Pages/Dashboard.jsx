import { FaCheck } from "react-icons/fa6";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="py-20 container">
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <Sidebar></Sidebar>
        </div>
        <div className="col-span-9">
          <h1 className="text-center text-5xl">Task Management</h1>

          <div className="grid w-full grid-cols-3 pt-20">
            <div>
              <p className="text-2xl text-center">To Do</p>
            </div>
            <div>
              <p className="text-2xl text-center">In Progress</p>
            </div>
            <div>
              <div className="flex items-center">
                <p className="text-2xl text-center pr-5">Done</p>
                <FaCheck />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
