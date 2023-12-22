import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container max-w-6xl mx-auto text-center px-10 py-20 space-y-10">
      <h1 className="text-6xl">
        Effortless Task Management, Elevated Productivity
      </h1>
      <p className="text-2xl font-light">
        Empower your team with our intuitive task management platform.
        Streamline collaboration, boost efficiency, and achieve your project
        goals seamlessly.
      </p>
      <Link to="/login" className="btn">
        {`Let's Explore`}{" "}
      </Link>
    </div>
  );
};

export default Banner;
