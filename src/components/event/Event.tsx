import { dentistEvents } from "@/constant/data";
import EventBanner from "./EventBanner";
import EventBox from "./EventBox";
import EventSearch from "./EventSearch";
import { useState } from "react";
import { PaginationLine } from "../Pagination";

const ITEMS_PER_PAGE = 6;

const Event = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(dentistEvents.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentEvents = dentistEvents.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <section id="events" className="bg-[#EDF5FD] py-5">
      <EventBanner />
      <EventSearch />
      <div className="max-w-6xl mx-auto flex flex-wrap gap-5 items-start justify-center">
        {currentEvents.map((event, index) => (
          <EventBox key={event.title} event={event} index={index} />
        ))}
      </div>
      <div className="my-8 max-w-6xl">
        <PaginationLine
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          scrollRef="#events"
        />
      </div>
      <p className="my-5 text-gray-500 animate-bounce text-center">
        {currentEvents.length === 0 && "No Event's Added Yet!"}
      </p>
    </section>
  );
};

export default Event;
