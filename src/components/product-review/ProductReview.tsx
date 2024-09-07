import { useState } from "react";
import { TbDental } from "react-icons/tb";
import { FaClinicMedical, FaToolbox } from "react-icons/fa";
import { MdChildCare, MdReviews } from "react-icons/md";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import ProductsGrid from "./ProductsGrid";
import { products } from "@/constant/data";
import { PaginationLine } from "../Pagination";
import PatientReview from "../patient-review/PatientReview";

const TABS = [
  {
    icon: MdReviews,
    text: "All Reviews",
    rating: "4.9",
  },
  {
    icon: FaToolbox,
    text: "Dental Tools & Accessories",
    rating: "4.9",
  },
  {
    icon: TbDental,
    text: "Ceramic Dental Implants",
    rating: "4.7",
  },
  {
    icon: FaClinicMedical,
    text: "Clinic Experiences",
    rating: "5.0",
  },
  {
    icon: MdChildCare,
    text: "Post-Procedure Care",
    rating: "4.9",
  },
];

const ITEMS_PER_PAGE = 6;

const ProductReview = () => {
  const [selectedTab, setSelectedTab] = useState(TABS[0].text.toLowerCase());
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Filter products based on the selected tab's category
  const filteredProducts =
    selectedTab === "all reviews"
      ? products
      : products.filter(
          (product) => product.category.toLocaleLowerCase() === selectedTab
        );

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentFilteredProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  return (
    <section className="bg-white py-5" id="CDI">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center font-extrabold text-black text-xl">
          Product Reviews
        </h1>
        <p className="text-center font-semibold text-sm text-slate-800 mt-2">
          ceramic implant guy reviews dental implants and other dental products
        </p>
        <div className="max-w-[85%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto mt-8 relative">
          {/* Carousel for Tab Triggers */}
          <Carousel
            opts={{ align: "start" }}
            className="bg-[#F8F8F8] rounded-2xl"
          >
            <CarouselContent>
              {TABS.map((tab, idx) => (
                <CarouselItem
                  key={`carousal-item-${idx}`}
                  className="basis-1/2 mx-5 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <div
                    className={`cursor-pointer flex items-center justify-center gap-x-2 p-2 hover:bg-gray-200 w-fit rounded-3xl transition duration-150 ease-in-out ${
                      selectedTab === tab.text.toLowerCase()
                        ? "text-blue-600 font-normal text-[16px]"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                    onClick={() => setSelectedTab(tab.text.toLowerCase())}
                  >
                    <tab.icon className="text-lg" />
                    <span className="whitespace-nowrap font-extralight text-sm">
                      {tab.text}
                    </span>
                    <span className="font-bold">{tab.rating}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-5 -left-4" />
            <CarouselNext className="absolute top-5 -right-4" />
          </Carousel>

          {/* Static Tab Content */}
          <div className="mt-5">
            <ProductsGrid products={currentFilteredProducts} />
          </div>
        </div>
        <p className="my-5 text-gray-500 animate-bounce text-center">
          {currentFilteredProducts.length === 0 &&
            "No Product's Review Added Yet!"}
        </p>

        <PaginationLine
          currentPage={currentPage}
          onPageChange={handlePageChange}
          totalPages={totalPages}
          scrollRef="#CDI"
        />
      </div>
      <PatientReview />
    </section>
  );
};

export default ProductReview;
