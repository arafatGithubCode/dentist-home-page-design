import { Button } from "../ui/button";
import DentistBanner from "./DentistBanner";
import Doctor from "./Doctor";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Filter from "./Filter";
import { dentists } from "@/constant/data";
import { PaginationLine } from "../Pagination";
import { useState } from "react";

const ITEMS_PER_PAGE = 6;

const FindDentist = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(dentists.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentDentist = dentists.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <section className="bg-[#EDF5FD] py-5" id="FAD">
      <DentistBanner />
      <div className="max-w-6xl mx-auto px-10 md:px-0">
        <p className="my-5 text-center text-lg font-semibold">
          10 providers matched your nearest zone
        </p>
        <div className="lg:hidden">
          <Dialog>
            <div className="md:w-1/2 mx-auto">
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full">
                  Add Filters
                </Button>
              </DialogTrigger>
            </div>
            <DialogContent className="w-[300px] sm:w-[425px] h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Your Search</DialogTitle>
                <DialogDescription>
                  Find your preferable dentist by filtering
                </DialogDescription>
              </DialogHeader>
              <Filter />
              <DialogFooter>
                <Button type="submit">Search</Button>
              </DialogFooter>
              <Button variant="outline">Clear Filter</Button>
            </DialogContent>
          </Dialog>
        </div>
        {/* doctors list */}
        <div className="flex items-start justify-center">
          <div className="hidden lg:block border-r-2 p-5 mx-5 mr-0 bg-white mt-5 w-1/2">
            <p className="text-black text-xl font-semibold mb-5">Your Search</p>
            <Filter />
            <Button className="w-full mt-5" variant="outline">
              Clear Filters
            </Button>
          </div>
          <div className="space-y-10 mb-5">
            <div className="flex flex-wrap justify-center gap-4 mt-5">
              {currentDentist.map((dentist, index) => (
                <Doctor
                  key={`doctor-${index}`}
                  dentist={dentist}
                  index={index}
                />
              ))}
            </div>
            <PaginationLine
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              scrollRef="#FAD"
            />
          </div>
        </div>
        <p className="my-5 text-gray-500 animate-bounce text-center">
          {currentDentist.length === 0 && "No Doctor's Added Yet!"}
        </p>
      </div>
    </section>
  );
};

export default FindDentist;
