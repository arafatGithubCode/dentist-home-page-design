import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1A3663] pt-10">
      <div className="grid grid-cols-2 md:grid-cols-3 justify-center max-w-6xl mx-auto px-4 xl:px-0 gap-y-5 md:gap-y-0">
        <div className="space-y-2 col-span-1">
          <div className="w-24 h-24">
            <img
              className="w-full h-full object-cover"
              src="logo.png"
              alt="logo"
            />
          </div>
          <div className="flex items-center gap-x-3 text-slate-50">
            <Link to="#">
              <FaFacebook className="text-xl font-semibold hover:scale-105 duration-150" />
            </Link>
            <Link to="#">
              <FaInstagram className="text-xl font-semibold hover:scale-105 duration-150" />
            </Link>
            <Link to="#">
              <FaYoutube className="text-xl font-semibold hover:scale-105 duration-150" />
            </Link>
            <Link to="#">
              <FaLinkedinIn className="text-xl font-semibold hover:scale-105 duration-150" />
            </Link>
          </div>
        </div>

        <div className="space-y-2 col-span-1">
          <p className="text-lg md:text-xl text-white font-semibold whitespace-nowrap underline underline-offset-8 pb-5">
            Key Dentistry Services
          </p>
          <ul className="text-slate-200 text-sm list-disc list-inside">
            <li className="whitespace-nowrap">Key Dentistry Services</li>
            <li className="whitespace-nowrap">Microscopic Dentistry</li>
          </ul>
          <Link to="#" className="flex items-center gap-x-1">
            <FcGoogle className="text-xl bg-white" />
            <span className="text-md text-slate-100">
              Click Here to Drop a Review
            </span>
          </Link>
        </div>

        <div className="space-y-2 col-span-2 md:col-span-1">
          <p className="text-xl text-white font-semibold whitespace-nowrap underline underline-offset-8 pb-5">
            Contact Us
          </p>
          <ul className="text-slate-200 text-sm list-disc list-inside">
            <li className="whitespace-nowrap">
              <a href="#">+91 80088 15480</a>
            </li>
            <li className="whitespace-nowrap">
              <a href="#"> michael@ceramicimplantguy.com</a>
            </li>
            <li className="whitespace-nowrap">
              <a href="#"> Mon-Sat : 10:00 AM to 08:00 PM</a>
            </li>
            <li>
              <a href="#">
                {" "}
                Plot No 1272, 80 Feet Road, Above Burfi Ghar, Beside Kun Hyundai
                Service Center, Kondapur, Hyderabad, Telangana 500084
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-2 col-span-3">
          <p className="text-lg font-semibold  text-white">
            ****Disclaimer****
          </p>
          <p className="text-sm text-slate-200">
            The information provided on this website is only for educational
            purpose and is organized to best of our knowledge. It is not
            intended to serve as medical advice. Anyone having tooth problems
            should interact with his or her dental surgeon for further
            evaluation and treatment.
          </p>
        </div>
      </div>
      <div className="bg-[#122748] py-2 mt-4">
        <p className="max-w-6xl mx-auto text-slate-200 text-sm text-center">
          © {new Date().getFullYear()}. Designed and Developed by Arafat
          Hossain.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
