import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa6";
import { AuthContext } from "../context/AuthProvider";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import useAxios from "../Hook/useAxios";

const Login = () => {
  const axios = useAxios();
  const navigate = useNavigate();
  const location = useLocation();
  const { googleLogin, githubLogin, loginUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleGoogle = () => {
    googleLogin()
      .then((data) => {
        Swal.fire("Google Login Success!", "", "success");
        setError("");
        // jwt token
        const email = data.user.email;
        const user = { email };
        axios.post("/jwt", user).then((res) => {
          if (res.data.success) {
            navigate(location?.state ? location.state : "/");
          }
        });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleGithub = () => {
    githubLogin()
      .then(() => {
        Swal.fire("Github Login Success!", "", "success");
        setError("");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  const handleUserLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then(() => {
        Swal.fire("Log In Success!", "", "success");
        event.target.reset();
        setError("");
        // jwt token
        const user = { email };
        axios
          .post("/jwt", user, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              navigate(location?.state ? location.state : "/");
            }
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <>
      <Helmet>
        <title>Guide Nook | Login</title>
      </Helmet>

      <div className="container mx-auto lg:px-20 grid lg:grid-cols-2 items-center gap-5">
        <div className="shadow-xl p-10 rounded-lg">
          <p className="text-4xl  font-semibold mb-10 text-center">
            Login to your account
          </p>
          <form onSubmit={handleUserLogin}>
            <input
              type="email"
              name="email"
              className="py-4 px-4 block w-full bg-slate-100 mb-5"
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              className="py-4 px-4 block w-full bg-slate-100 mb-5"
              placeholder="Password"
            />
            <div className="text-center">
              <input
                className="cursor-pointer inline-block p-4 w-1/2 bg-primary text-white rounded-lg font-semibold"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          {error && (
            <p className="text-red-500 mt-5 font-semibold text-center">
              {error}
            </p>
          )}
          <div className="text-center">
            <p className="mt-5">
              Don't have an account?
              <Link
                className="text-yellow font-bold pl-2 text-primary"
                to="/registration"
              >
                Register here
              </Link>
            </p>
            <p className="my-5">Or Login With</p>

            <div className="space-x-4">
              <button
                onClick={handleGoogle}
                className="p-4 inline-flex items-center gap-4 rounded-lg font-semibold bg-[#EA4335] text-white capitalize"
              >
                <FaGoogle /> Google
              </button>
              <button
                onClick={handleGithub}
                className="p-4 inline-flex items-center gap-4 rounded-lg font-semibold bg-[#333]  text-white capitalize"
              >
                <FaGithub /> Github
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Login;
