import { IPatientReview } from "@/types/types";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaYelp } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { useState } from "react";

interface ReviewCardProps {
  review: IPatientReview;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  const [hide, setHide] = useState<boolean>(false);
  const { date, description, image, name, platform, star } = review;

  return (
    <div className="bg-slate-50 p-2 rounded-xl border shadow-inner space-y-1">
      <div className="flex items-center gap-x-4">
        <div className="w-10 h-10 rounded-full border relative">
          <img
            src={image}
            alt=""
            className="w-full h-full rounded-full object-fill border-2 border-white"
          />
          {platform.toLocaleLowerCase() === "facebook" ? (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <FaFacebook className="text-xl text-[#E9006F] absolute bottom-0 -right-2 cursor-pointer" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{`Post on ${platform}`}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : platform.toLocaleLowerCase() === "google" ? (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <FcGoogle className="text-xl absolute bottom-0 -right-2 cursor-pointer" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{`Post on ${platform}`}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <FaYelp className="text-xl text-[#E9006F] absolute bottom-0 -right-2 cursor-pointer" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{`Post on ${platform}`}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
        <div className="-space-y-1">
          <div className="flex items-center gap-x-1">
            <p className="text-black font-semibold">{name}</p>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <MdVerified className="text-blue-600 -translate-y-1 cursor-pointer" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Verified Patient</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <p className="text-sm text-gray-600 cursor-default">
                  2 days ago
                </p>
              </TooltipTrigger>
              <TooltipContent>
                <p>{date}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div>
        {Array(star)
          .fill(0)
          .map((_, index) => (
            <span key={index} className="text-yellow-500 text-xl">
              ★
            </span>
          ))}
      </div>
      <p className={`text-sm line-clamp-3 ${hide && "line-clamp-none"}`}>
        {description}
      </p>
      <p
        onClick={() => setHide(!hide)}
        className="text-sm text-gray-700 font-semibold cursor-pointer hover:underline"
      >
        {hide ? "Hide" : "Read More"}
      </p>
    </div>
  );
};

export default ReviewCard;
