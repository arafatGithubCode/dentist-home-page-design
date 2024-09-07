import { FaPhone } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const GetInTouchSide = () => {
  return (
    <div className="fixed top-[60%] right-0 flex flex-col items-end gap-y-1">
      <div className="flex items-center group cursor-pointer">
        <span className="bg-[#E9006F] px-5 py-1 text-white font-semibold text-lg translate-x-[250%] group-hover:translate-x-0 transition duration-500 ease-linear">
          Call Us
        </span>
        <FaPhone className="text-4xl bg-[#E9006F] p-2 text-white" />
      </div>
      <div className="flex items-center group cursor-pointer">
        <span className="bg-[#E9006F] px-5 py-1 text-white font-semibold text-lg translate-x-[250%] group-hover:translate-x-0 transition duration-500 ease-linear">
          Mail Us
        </span>
        <MdEmail className="text-4xl bg-[#E9006F] p-2 text-white" />
      </div>
      <div className="flex items-center group cursor-pointer">
        <span className="bg-[#E9006F] px-5 py-1 text-white font-semibold text-lg translate-x-[250%] group-hover:translate-x-0 transition duration-500 ease-linear">
          Book an Appointment
        </span>
        <FaUser className="text-4xl bg-[#E9006F] py-2 text-white" />
      </div>
    </div>
  );
};

export default GetInTouchSide;
