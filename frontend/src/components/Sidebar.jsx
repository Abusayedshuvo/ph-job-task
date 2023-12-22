import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full text-white">
            {/* Sidebar content here */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard/add-task">Add Task</Link>
            </li>
            <li>
              <Link to="/dashboard/all-task">All Task</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
