import { IDoctor } from "@/types/types";
import { GoDotFill } from "react-icons/go";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

type Props = {
  dentist: IDoctor;
  index: number;
};
const Doctor = ({ dentist, index }: Props) => {
  const {
    image,
    name,
    title,
    experience,
    workTime,
    phone,
    reviews,
    viewProfileLink,
    appointmentLink,
    badge,
    location,
  } = dentist;

  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay={(index + 1) * 100}
      className="bg-white shadow hover:shadow-xl rounded-xl max-w-fit p-2 flex flex-col border"
    >
      <div className="max-w-[12.5rem] max-h-[12.5rem] group relative overflow-hidden">
        <Link to={viewProfileLink}>
          <img
            src={image}
            alt={name}
            className="w-full h-full object-fill rounded rounded-b-none hover:scale-105 transition duration-300 ease-in-out"
          />
          <p className="absolute bottom-0 w-full text-white bg-blue-500 hover:bg-blue-600 text-center py-2 font-semibold text-md translate-y-[2.5rem] group-hover:translate-y-0 transition-all duration-300 ease-linear">
            View Profile
          </p>
        </Link>
        <span className="absolute top-0 left-0 bg-[#E9006F] text-white px-1 py-[2px] font-semibold rounded text-sm">
          {badge}
        </span>
      </div>
      <Link
        to="#"
        className="text-lg font-semibold text-blue-950 hover:text-blue-500 hover:underline py-1"
      >
        {name}
      </Link>
      <p className="text-slate-600 text-[15px]">{title}</p>
      <div className="flex items-center gap-x-1">
        <GoDotFill className="text-sm" />
        <p className="text-slate-600 text-sm">{experience}</p>
      </div>
      <div className="flex items-center gap-x-2 mt-2">
        <FaRegClock className="text-md text-slate-500" />
        <p className="text-md text-slate-500">{workTime}</p>
      </div>
      <div className="flex items-center gap-x-2">
        <MdOutlineLocalPhone className="text-md text-slate-500" />
        <p className="text-md text-slate-500">{phone}</p>
      </div>
      <div className="flex items-center gap-x-2">
        <CiLocationOn className="text-md text-slate-500" />
        <p className="text-md text-slate-500">{location}</p>
      </div>
      <div className="flex items-center gap-x-2">
        <MdOutlineReviews className="text-md text-slate-500" />
        <p className="text-md text-slate-500">{reviews}</p>
      </div>
      <Link className="mt-5" to={appointmentLink}>
        <Button variant="outline">Request an Appointment</Button>
      </Link>
    </div>
  );
};

export default Doctor;
