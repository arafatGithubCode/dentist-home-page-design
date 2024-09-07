import { IoMdStarHalf } from "react-icons/io";
import ReviewCard from "./ReviewCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { patientReviews } from "@/constant/data";

const REVIEW_BAR = [5, 4, 3, 2, 1];

const PatientReview = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 xl:px-0 pt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-5">
        <div data-aos="fade-up" className="space-y-3">
          <h3 className="text-xl font-semibold text-black">
            What 2,019 patients are saying
          </h3>
          <p className="text-black font-semibold">
            Overall ratings and reviews
          </p>
          <p className="text-sm text-gray-600">
            Reviews can only be made by patients who get our service and
            product.
          </p>
          <div className="flex items-center">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <span key={i} className="text-red-600 text-2xl">
                  ★
                </span>
              ))}
            <IoMdStarHalf className="text-red-600 text-xl" />
            <span className="text-sm font-semibold text-gray-600 pl-2">
              4.8 based on recent ratings
            </span>
          </div>
          <div className="flex items-center">
            <div className="flex flex-col items-center justify-center border-r pr-2">
              <span className="font-semibold text-lg text-black">4.9</span>
              <span className="text-gray-600 text-sm">Expertise</span>
            </div>
            <div className="flex flex-col items-center justify-center border-r px-2">
              <span className="font-semibold text-lg text-black">4.9</span>
              <span className="text-gray-600 text-sm">Care</span>
            </div>
            <div className="flex flex-col items-center justify-center border-r px-2">
              <span className="font-semibold text-lg text-black">4.7</span>
              <span className="text-gray-600 text-sm">Comfort</span>
            </div>
            <div className="flex flex-col items-center justify-center pl-2">
              <span className="font-semibold text-lg text-black">4.5</span>
              <span className="text-gray-600 text-sm">Results</span>
            </div>
          </div>
        </div>
        <div data-aos="fade-up">
          {REVIEW_BAR.map((bar) => (
            <div key={`bar-${bar}`} className="flex items-center gap-x-2">
              <span>{bar}</span>
              <div className="bg-white border w-full">
                <div
                  className="h-4 bg-[#E9006F]"
                  style={{
                    width: `${Number(bar) === 5 ? 90 : Number(bar)}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative pt-10">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {patientReviews.map((review, index) => (
              <CarouselItem
                key={index}
                className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <ReviewCard review={review} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 left-0" />
          <CarouselNext className="absolute top-1/2 right-0" />
        </Carousel>
      </div>
    </div>
  );
};

export default PatientReview;
