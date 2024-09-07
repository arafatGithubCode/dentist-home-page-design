import { SiComma } from "react-icons/si";
import { GiCarnivoreMouth } from "react-icons/gi";
import { MdCastForEducation } from "react-icons/md";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { ISlide } from "@/types/types";
import Autoplay from "embla-carousel-autoplay";
import React, { useEffect, useState } from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import { FaDiagnoses, FaYoutube } from "react-icons/fa";

const SLIDES: ISlide[] = [
  {
    img: "Hero.png",
    title: "Exceptional Dental Care",
    subTitle:
      "Your smile is our top priority. Experience the best in dental care with our expert team.",
    bgImg: "carImg1.jpg",
    video: "/carImg1.mp4",
  },
  {
    img: "",
    title: "Advanced Dental Products",
    subTitle:
      "Discover a range of cutting-edge dental products designed to keep your smile healthy and bright.",
    bgImg: "carImg2.jpg",
    video: "/carImg1.mp4",
  },
  {
    img: "",
    title: "Smile with Confidence",
    subTitle:
      "We offer personalized treatments to ensure you leave with a smile that lights up the room.",
    bgImg: "carImg3.jpg",
    video: "/carImg1.mp4",
  },
];

const cardContent = [
  {
    icon: GiCarnivoreMouth,
    heading: "Oral Health Maintenance",
    para: `Provide comprehensive care for teeth and gums through regular
                cleanings, check-ups, and preventive measures to maintain
                optimal oral health.`,
  },
  {
    icon: FaDiagnoses,
    heading: "Diagnosis and Treatment",
    para: `Accurately identify and address dental issues such as cavities,
                gum disease, and misalignment with targeted treatments and
                solutions.`,
  },
  {
    icon: MdCastForEducation,
    heading: "Patient Education",
    para: `Educate patients on effective oral hygiene practices, the
              importance of regular dental visits, and ways to prevent common
              dental problems.`,
  },
];

const Hero = () => {
  const plugin = React.useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: true,
      jump: true,
    })
  );

  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Carousel plugins={[plugin.current]} className="w-full relative group">
        <CarouselContent>
          {SLIDES.map((item, index) => (
            <CarouselItem key={index}>
              <div
                className="w-full h-[70vh] bg-center bg-cover object-cover relative flex flex-col items-center justify-center gap-y-8"
                style={{
                  backgroundImage: `url(${item.bgImg})`,
                }}
                key={index}
              >
                <div
                  className="flex z-50"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="flex">
                    <SiComma className="rotate-180 text-4xl text-white" />
                    <SiComma className="rotate-180 text-4xl text-white" />
                  </div>
                  <h3
                    data-aos="fade-up"
                    className="text-white font-bold text-3xl text-center"
                  >
                    {item.title}
                  </h3>
                  <div className="flex">
                    <SiComma className="text-4xl text-white" />
                    <SiComma className="text-4xl text-white" />
                  </div>
                </div>
                <p
                  data-aos="fade-up"
                  data-aos-delay="600"
                  className="sm:text-5xl text-3xl font-semibold text-white text-center px-10 z-50"
                >
                  {item.subTitle}
                </p>

                <div className="z-50" data-aos="fade-up" data-aos-delay="700">
                  <Dialog>
                    <DialogTrigger className="bg-[#E9006F] px-3 rounded-xl text-white text-xl hover:bg-pink-500 scale-150 duration-150 flex items-center gap-1">
                      <FaYoutube />
                      Watch Video
                    </DialogTrigger>
                    <DialogContent>
                      <AspectRatio ratio={16 / 9}>
                        <iframe
                          className="w-full h-full"
                          src="carVideo1.mp4"
                          title="YouTube video"
                        ></iframe>
                      </AspectRatio>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="absolute inset-0 w-full h-full bg-blue-600 bg-opacity-30" />
                {index === 0 && (
                  <div className="absolute bottom-5 -left-5 w-[32%] hidden lg:block">
                    <img
                      className="w-full h-full object-cover"
                      src={item.img}
                      alt=""
                    />
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-1 hidden group-hover:block scale-115 hover:scale-125 duration-150 bg-transparent hover:bg-transparent border-none hover:text-white text-gray-200" />
        <CarouselNext className="absolute right-1 hidden group-hover:block scale-115 hover:scale-125 duration-150 bg-transparent hover:bg-transparent border-none hover:text-white text-gray-200" />
      </Carousel>
      <div className="bg-[#EDF5FD] px-5 xl:px-0 min-h-[20vh]">
        <div className="max-w-6xl mx-auto flex sm:flex-row flex-col justify-center items-center space-y-5 sm:space-y-0 sm:space-x-5 px-8 -translate-y-14 z-50">
          {cardContent.map((item, index) => (
            <div
              key={`card-${index}`}
              className={`flex flex-col items-center justify-center gap-y-2 rounded-xl shadow-xl group p-2 bg-white animate-float ${
                isVisible ? "animate-float" : "opacity-0"
              }`}
              style={{ animationDelay: `${(index + 1) * 500}ms` }}
            >
              <item.icon className="text-5xl text-white group-hover:scale-105 duration-200 bg-[#E9006F] rounded-full p-2" />
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-black text-center hidden lg:block">
                  {item.heading}
                </h3>
                <h3 className="text-2xl font-semibold text-black text-center sm:hidden">
                  {item.heading}
                </h3>
                <h3 className="text-2xl font-semibold text-black text-center lg:hidden hidden sm:block">
                  {item.heading.split(" ").pop()}
                </h3>
                <p className="text-[rgb(114,124,124)] text-sm text-center">
                  {item.para}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
