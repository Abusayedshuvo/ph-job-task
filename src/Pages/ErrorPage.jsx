import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>Guide Nook | 404 </title>
      </Helmet>

      <div className="container mx-auto text-center">
        ;<p className="text-4xl font-bold mb-5">Oops!</p>
        <p> We're sorry,</p>
        <p> The page you were looking for doesn't exist anymore.</p>
        <Link
          t="/"
          className="inline-block p-4 w-1/2 bg-primary text-white rounded-lg font-semibold mt-10"
        >
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
