import { FaCircleCheck } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const FreeAppointment = () => {
  return (
    <div className="bg-white flex items-center justify-center">
      <div className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-10 max-w-6xl mx-auto px-5 xl:px-0 py-10 sm:items-center sm:justify-center">
        <div data-aos="fade-up" className="space-y-2 basis-2/5">
          <p className="uppercase text-md font-bold text-pink-800">Booking</p>
          <p className="text-4xl font-bold text-black">
            Get a free appointment
          </p>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
            veniam blanditiis vitae vero soluta in maiores itaque ipsum placeat
            error?
          </p>
          <div className="flex items-center gap-x-1">
            <FaCircleCheck className="text-lg text-[#E9006F]" />
            <p className="text-md text-black font-semibold">
              100+ doctors available
            </p>
          </div>
          <div className="flex items-center gap-x-1">
            <FaCircleCheck className="text-lg text-[#E9006F]" />
            <p className="text-md text-black font-semibold">
              Free appointment with any specialty
            </p>
          </div>
          <div className="flex items-center gap-x-1">
            <FaCircleCheck className="text-lg text-[#E9006F]" />
            <p className="text-md text-black font-semibold">Virtual on-site</p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="space-y-4 basis-3/5 max-w-lg drop-shadow shadow p-10 rounded-xl bg-slate-100"
        >
          <div className="flex flex-col gap-5 sm:flex-row">
            <div className="flex flex-col gap-y-1 w-full">
              <Label htmlFor="name">Full Name</Label>
              <div className="bg-white rounded-xl border relative">
                <FaRegUser className="text-[#E9006F] text-sm absolute top-[10px] right-0" />
                <Input
                  className="border-none bg-transparent outline-none w-full"
                  type="text"
                  placeholder="John Doe"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-1 w-full">
              <Label htmlFor="name">Email Address</Label>
              <div className="bg-white rounded-xl flex items-center gap-x-1 border relative">
                <MdOutlineEmail className="text-[#E9006F] text-sm absolute top-[10px] right-0" />
                <Input
                  className="border-none bg-transparent outline-none w-full"
                  type="email"
                  placeholder="example@yoursite.com"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 sm:flex-row">
            <div className="flex flex-col gap-y-1 w-full">
              <Label htmlFor="name">Phone</Label>
              <div className="bg-white rounded-xl flex items-center gap-x-1 border relative">
                <CiPhone className="text-[#E9006F] text-sm absolute top-[10px] right-0" />
                <Input
                  className="border-none bg-transparent outline-none w-full"
                  type="text"
                  placeholder="+91 342 5678"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-1 w-full">
              <Label htmlFor="name">Schedule to receive call</Label>
              <div className="bg-white rounded-xl flex items-center gap-x-1 border relative">
                <FaRegUser className="text-[#E9006F] text-sm absolute top-[10px] right-0" />
                <Input
                  className="border-none bg-transparent outline-none w-full"
                  type="text"
                  placeholder="10:00 am to 1:00 pm"
                />
              </div>
            </div>
          </div>

          <button className="bg-[#E9006F] w-full text-white px-3 py-2 rounded-xl outline-none hover:bg-pink-500 duration-150 whitespace-nowrap text-center">
            Get a free appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreeAppointment;
