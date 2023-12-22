import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="py-20 container">
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <Sidebar></Sidebar>
        </div>
        <div className="col-span-9">
          <Outlet> </Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
