import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className=" py-20">
      <div className="grid grid-cols-2 justify-between gap-4 w-full px-10 pb-10">
        <div className="">
          <img className="w-32 h-auto" src={logo} alt="" />
          <p className="text-4xl pt-4">Monitor your All Task with Kasor</p>
        </div>
        <div>
          <p className="text-4xl pb-4">Follow us</p>
          <div className="social flex space-x-5">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
      <hr />
      <div className="pt-10">
        <div className="grid grid-cols-2 justify-between gap-4 w-full px-10">
          <p>@2023 Kasor</p>
          <div className="space-x-10 text-right">
            <Link>Terms of Use </Link>
            <Link>Privacy policy</Link>
            <Link>Pricing</Link>
            <Link>Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
