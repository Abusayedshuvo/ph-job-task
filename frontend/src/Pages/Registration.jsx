import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";

const Registration = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    if (password.length < 6) {
      setError("Password at least 6 charter");
      return;
    } else if (!/^(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/.test(password)) {
      setError("Password need a capital letter and a special character");
      return;
    }
    setError("");
    createUser(email, password)
      .then((result) => {
        Swal.fire("Registration Success!", "", "success");
        event.target.reset();
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <>
      <Helmet>
        <title>Guide Nook | Registration</title>
      </Helmet>
      <div className="container mx-auto lg:px-20 grid lg:grid-cols-2 items-center">
        <div className="shadow-xl p-10 rounded-lg">
          <p className="text-4xl  font-semibold mb-10 text-center">
            Create your account
          </p>
          <form onSubmit={handleRegistration}>
            <input
              type="text"
              name="name"
              required
              className="py-4 px-4 block w-full bg-slate-100 mb-5"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              required
              className="py-4 px-4 block w-full bg-slate-100 mb-5"
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              required
              className="py-4 px-4 block w-full bg-slate-100 mb-5"
              placeholder="Password"
            />
            <input
              type="url"
              name="photo"
              className="py-4 px-4 block w-full bg-slate-100 mb-5"
              placeholder="Photo URL"
            />
            <div className="text-center">
              <input
                className="inline-block p-4 w-1/2 bg-primary text-white rounded-lg font-semibold"
                type="submit"
                value="Register"
              />
            </div>
          </form>
          {error && (
            <p className="text-red-500 mt-5 font-semibold text-center">
              {" "}
              {error}
            </p>
          )}
          <p className="mt-5 text-center">
            Already a member?
            <Link
              className="text-yellow font-bold pl-2 text-primary"
              to="/login"
            >
              Login here
            </Link>
          </p>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Registration;
