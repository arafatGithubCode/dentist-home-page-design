import About from "@/components/About";
import Blog from "@/components/blog/Blog";
import Contact from "@/components/Contact";
import Event from "@/components/event/Event";
import FindDentist from "@/components/find-dentist/FindDentist";
import FreeAppointment from "@/components/FreeAppointment";
import Hero from "@/components/Hero";
import NewsLetter from "@/components/NewsLetter";
import ProductReview from "@/components/product-review/ProductReview";
import RecordService from "@/components/RecordService";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
    });
  });
  return (
    <>
      <Hero />
      <About />
      <ProductReview />
      <RecordService />
      <FindDentist />
      <FreeAppointment />
      <Event />
      <Blog />
      <NewsLetter />
      <Contact />
    </>
  );
};

export default Home;
