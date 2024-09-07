import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidCategoryAlt } from "react-icons/bi";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { dentistEvents } from "@/constant/data";
import { Button } from "../ui/button";

const EventSearch = () => {
  return (
    <>
      <div className="bg-slate-50 max-w-[80%] mx-auto p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center -translate-y-12 shadow-xl rounded-xl min-h-[6rem] divide-y-2 sm:divide-y-0">
        <div className="flex items-center gap-x-2">
          <FaSearch className="text-lg text-black" />
          <input
            type="text"
            placeholder="Find your next event"
            className="bg-transparent outline-none py-5 placeholder:text-[15px] text-black placeholder:text-gray-400"
          />
        </div>

        <div className="flex items-center gap-x-2">
          <FaLocationDot />
          <Select>
            <SelectTrigger className="bg-transparent border-none">
              <SelectValue placeholder="Event Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Delhi</SelectLabel>
                {dentistEvents.map((event) => (
                  <SelectItem value={event.location.toLocaleLowerCase()}>
                    {event.location}
                  </SelectItem>
                ))}
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Kolkata</SelectLabel>
                {dentistEvents.reverse().map((event) => (
                  <SelectItem value={event.location.toLocaleLowerCase()}>
                    {event.location}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-x-2">
          <BiSolidCategoryAlt />
          <Select>
            <SelectTrigger className="bg-transparent border-none">
              <SelectValue placeholder="Event Category" />
            </SelectTrigger>
            <SelectContent>
              {dentistEvents.map((event) => (
                <SelectItem value={event.category.toLocaleLowerCase()}>
                  {event.location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button className="w-full" variant="outline">
          Search
        </Button>
      </div>
    </>
  );
};

export default EventSearch;
