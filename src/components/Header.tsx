import { FaRegClock } from "react-icons/fa6";
import { MdMenu, MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Link } from "react-router-dom";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";
import WithScrollToSection from "@/HOC/WithScrollToSection";

const navigationLink = [
  { title: "Home", link: "home" },
  { title: "Ceramic Dental Implants", link: "CDI" },
  { title: "Find A Dentist", link: "FAD" },
  { title: "Events", link: "events" },
  { title: "Blog", link: "blog" },
  { title: "Contact", link: "contact" },
];

const Header = () => {
  const pathMatchRoute = (route: string) => {
    if (route === location.hash) {
      console.log(location.hash, "header");
      return true;
    }
  };

  const handleLinkClick = (link: string) => {
    if (link === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const targetElement = document.querySelector(`#${link}`);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header className="sticky -top-12 z-50 shadow-lg bg-slate-50/40 backdrop-blur-md">
      {/* top header bar */}
      <div className="bg-[#E9006F]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-y-1 items-center justify-center md:flex-row md:justify-between px-4 py-1">
            <div className="flex items-center gap-x-1 text-slate-300">
              <FaRegClock className="text-sm font-semibold" />
              <p className="text-sm font-semibold">
                Open hours: 08:00 AM - 08:00 PM
              </p>
            </div>
            <div className="flex items-center gap-x-3 text-slate-300">
              <div className="flex items-center gap-x-1">
                <MdOutlineMailOutline className="text-sm font-semibold" />
                <p className="text-sm font-semibold">
                  michael@ceramicimplantguy.com
                </p>
              </div>
              <div className="flex items-center gap-x-1">
                <MdOutlineLocalPhone className="text-sm font-semibold" />
                <p className="text-sm font-semibold whitespace-nowrap">
                  091-2581-2365
                </p>
              </div>
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
        </div>
      </div>
      {/* bottom header */}
      <div className="px-4 py-2">
        <div className="flex lg:justify-around justify-between items-center max-w-6xl mx-auto">
          <div
            className="w-20 h-20 cursor-pointer"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <img
              src="logo.png"
              alt="logo"
              className="w-full h-full object-fill rounded-full"
            />
          </div>
          <div className="lg:flex items-center gap-x-7 bg-white shadow px-8 py-2 rounded-3xl overflow-hidden hidden">
            {navigationLink.map(({ title, link }) => (
              <Link
                to={`#${link}`}
                key={title}
                className={`uppercase inline-flex text-sm font-semibold text-slate-400/50 hover:text-slate-500 duration-200 relative overflow-hidden group whitespace-nowrap ${
                  pathMatchRoute(`#${link}`)
                    ? "text-slate-900 border-b-red-500 border-b-[2px]"
                    : ""
                }`}
                onClick={() => handleLinkClick(link)}
              >
                {title}
                <span
                  className={`inline-flex w-full h-[1.5px] absolute bottom-0 left-0 transform duration-300 rounded-xl ${
                    pathMatchRoute(link)
                      ? "bg-red-500 translate-x-0"
                      : "bg-gray-400 -translate-x-[105%] group-hover:translate-x-0"
                  }`}
                />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-[#E9006F] text-white px-3 py-2 rounded-xl outline-none hover:bg-pink-500 duration-150 flex items-center gap-x-1 whitespace-nowrap">
                Make An Appointment
                <IoIosArrowDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-[100]">
                <DropdownMenuItem className="cursor-pointer hover:text-blue-500">
                  Popup appointment
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:text-blue-500">
                  Doctor appointment
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:text-blue-500">
                  Service appointment
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="lg:hidden block">
              <Sheet>
                <SheetTrigger asChild>
                  <MdMenu className="text-2xl font-semibold hover:scale-105 duration-200 cursor-pointer" />
                </SheetTrigger>
                <SheetContent className="z-[100]">
                  <SheetHeader>Menu</SheetHeader>
                  <div className="flex flex-col items-start justify-center gap-y-7 mt-8">
                    {navigationLink.map(({ title, link }) => (
                      <SheetClose asChild key={title}>
                        <Link
                          to={`#${link}`}
                          key={title}
                          className={`uppercase inline-flex text-sm font-semibold text-slate-400/50 hover:text-slate-500 duration-200 relative overflow-hidden group whitespace-nowrap ${
                            pathMatchRoute(`#${link}`)
                              ? "text-black border-b-red-500 border-b-[2px]"
                              : ""
                          }`}
                          onClick={() => handleLinkClick(link)}
                        >
                          {title}
                          <span
                            className={`inline-flex w-full h-[1.5px] absolute bottom-0 left-0 transform duration-300 rounded-xl ${
                              pathMatchRoute(`#${link}`)
                                ? "bg-red-500 translate-x-0"
                                : "bg-gray-400 -translate-x-[105%] group-hover:translate-x-0"
                            }`}
                          />
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default WithScrollToSection(Header);
