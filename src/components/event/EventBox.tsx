import { IEvent } from "@/types/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";

import { CiClock1 } from "react-icons/ci";
import { Button } from "../ui/button";
import { GiArchiveRegister } from "react-icons/gi";
import { Separator } from "../ui/separator";
import { IoIosLink } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLngTuple } from "leaflet";

const position: LatLngTuple = [28.6139, 77.209];

type Props = {
  event: IEvent;
  index: number;
};

const EventBox = ({ event, index }: Props) => {
  const { image, date, category, title, description, location, speaker, time } =
    event;

  const [month, day] = date.split(" ");

  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay={(index + 1) * 100}
      className="bg-slate-50 rounded-xl shadow-xl p-2 max-w-[270px]"
    >
      <Dialog>
        <DialogTrigger>
          <div className="group">
            <div className="w-[270px] h-[150px] relative overflow-hidden">
              <img
                src={image}
                alt="event"
                className="w-full h-full object-cover rounded-xl group-hover:-rotate-2 group-hover:scale-105 duration-500"
              />
              <div className="absolute top-0 left-0 flex flex-col text-white bg-[#E9006F] p-[2px] rounded-xl rounded-tr-none rounded-bl-none divide-y-2">
                <span className="text-xl font-bold">{day}</span>
                <span className="text-xl font-bold">{month}</span>
              </div>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#E9006F] px-1 text-white font-semibold rounded-xl rounded-bl-none rounded-br-none b text-lg">
                {category}
              </span>
            </div>
            <div className="-translate-y-8 bg-slate-50 max-w-[85%] mx-auto p-3 rounded-xl shadow">
              <h3 className="text-lg text-black font-semibold group-hover:text-blue-800 group-hover:underline duration-300 line-clamp-1">
                {title}
              </h3>
              <p className="text-sm text-gray-500 group-hover:text-blue-800 group-hover:underline duration-300 line-clamp-1">
                {description}
              </p>
              <p className="text-gray-500 text-sm font-semibold">
                Speaker: {speaker}
              </p>
              <div className="flex items-center gap-x-1 bg-slate-200 p-1 w-fit rounded-xl font-semibold text-black text-sm mt-2">
                <CiClock1 />
                <span>{time}</span>
              </div>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="w-[400px] h-[600px] overflow-y-auto">
          <DialogHeader>{title}</DialogHeader>
          <DialogDescription>{description}</DialogDescription>
          <Button variant="ghost" className="w-full">
            Register
          </Button>
          <Separator />
          <p className="font-bold text-black">Speaker: {speaker}</p>
          <div className="flex items-center mt-2 gap-x-2">
            <CiClock1 className="text-xl" />
            <span className="text-xl font-bold text-black">When</span>
          </div>
          <p>
            {date}, {time}
          </p>
          <div className="flex items-center mt-2 gap-x-2">
            <FaLocationDot className="text-xl" />
            <span className="text-xl font-bold text-black">Where</span>
          </div>
          <div className="w-full z-10 mt-6 ml-2 h-[200px] lg:h-[400px] overflow-x-hidden">
            <MapContainer
              center={position}
              zoom={13}
              scrollWheelZoom={false}
              style={{ width: "100%", height: "100vh" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>{location}</Popup>
              </Marker>
            </MapContainer>
          </div>
          <Separator />
          <Button variant="outline" className="w-full">
            {" "}
            <IoIosLink /> COPY LINK
          </Button>
          <Button variant="outline" className="w-full">
            {" "}
            <MdOutlineEmail /> INVITE VIA EMAIL
          </Button>
        </DialogContent>
      </Dialog>
      <Button className="w-full -mt-5" variant="outline">
        {" "}
        <GiArchiveRegister className="text-xl mr-2" /> Register Now
      </Button>
    </div>
  );
};

export default EventBox;
