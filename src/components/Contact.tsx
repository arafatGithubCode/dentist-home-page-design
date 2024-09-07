import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoTime } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import { LatLngTuple } from "leaflet";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
const position: LatLngTuple = [28.6139, 77.209];

const Contact = () => {
  return (
    <section className="bg-[#EDF5FD]" id="contact">
      <div className="overflow-hidden py-3 bg-gradient-to-r from-pink-700 to-purple-700">
        <div className="flex items-center gap-x-5 animate-slide justify-between text-white">
          <div className="flex items-center justify-around gap-x-5">
            <FaPhone className="text-xl" />
            <p className="text-xl font-semibold whitespace-nowrap">
              +91 80077 15480
            </p>
          </div>
          <div className="flex items-center justify-around gap-x-5">
            <IoMdMail className="text-xl" />
            <p className="text-xl font-semibold whitespace-nowrap">
              michael@ceramicimplantguy.com
            </p>
          </div>
          <div className="flex items-center justify-around gap-x-5">
            <IoTime className="text-xl" />
            <p className="text-xl font-semibold whitespace-nowrap">
              Mon to Sat – 10:00 AM to 08:00 PM
            </p>
          </div>
          <div className="flex items-center justify-around gap-x-5">
            <FaLocationDot className="text-xl" />
            <p className="text-xl font-semibold whitespace-nowrap">
              Mon to Sat – 10:00 AM to 08:00 PM
            </p>
          </div>
        </div>
      </div>

      <div
        data-aos="zoom-in"
        className="h-[35vh] contact_banner relative flex flex-col items-center justify-center"
      ></div>

      <div className="px-5 xl:px-0 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        <div
          // data-aos="fade-right"
          data-aos-delay="100"
          className="space-y-2 bg-slate-50 rounded-xl shadow-xl drop-shadow-xl p-2 border-2"
        >
          <p className="text-blue-950 text-lg font-semibold">Call Us</p>
          <p className="text-sm text-gray-600 font-semibold">+91 7012 15480</p>
          <p className="text-blue-950 text-lg font-semibold">Mail Us</p>
          <p className="text-sm text-gray-600 font-semibold">
            michael@ceramicimplantguy.com
          </p>
          <p className="text-blue-950 text-lg font-semibold">Timings</p>
          <p className="text-sm text-gray-600 font-semibold">
            Mon to Sat – 10:00 AM to 08:00 PM
          </p>
          <p className="text-blue-950 text-lg font-semibold">Address</p>
          <p className="text-sm text-gray-600 font-semibold">
            Plot No 1272, 80 Feet Road, Above Burfi Ghar, Beside Kun Hyundai
            Service Center, Kondapur, Telangana michael@ceramicimplantguy.com
          </p>
        </div>

        <div
          // data-aos="fade-right"
          data-aos-delay="200"
          className="w-full h-[200px] md:h-[410px] overflow-x-hidden bg-slate-50 rounded-xl shadow-xl drop-shadow-xl p-2 border-2"
        >
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
              <Popup>India, Delhi</Popup>
            </Marker>
          </MapContainer>
        </div>

        <form
          // data-aos="fade-right"
          data-aos-delay="300"
          className="bg-slate-50 rounded-xl shadow-xl drop-shadow-xl p-2 border-2"
        >
          <p className="text-xl text-blue-950 font-semibold pb-4">Contact Us</p>
          <div className="relative space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" />
            <span className="text-sm font-medium text-red-500 absolute -top-2 left-10">
              *
            </span>
          </div>
          <div className="relative space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="text" />
            <span className="text-sm font-medium text-red-500 absolute -top-2 left-10">
              *
            </span>
          </div>
          <div className="relative space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" />
            <span className="text-sm font-medium text-red-500 absolute -top-2 left-10">
              *
            </span>
          </div>
          <div className="relative space-y-2">
            <Label htmlFor="message">Message</Label>
            <Input id="message" type="text" />
          </div>
          <Button className="mt-4" variant="outline">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
