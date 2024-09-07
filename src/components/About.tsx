import { Button } from "./ui/button";

const About = () => {
  return (
    <section className="bg-[#EDF5FD] px-10 xl:px-0 py-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-10">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="rounded"
        >
          <video
            className="w-full h-full rounded aspect-video"
            controls
            autoPlay={false}
            poster="overlay.png"
            title="Ceramic Dental Implants"
          >
            <source src="carVideo1.mp4" type="video/mp4" />
          </video>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="space-y-3"
        >
          <p className="text-xl uppercase font-semibold text-[#566FE6]">
            About Us
          </p>
          <p className="text-4xl sm:text-5xl text-[#133B88] font-bold">
            Your Smile, Our Priority. <br /> Expert Dental Care.
          </p>
          <p className="text-sm text-gray-400 pt-2 max-w-md">
            We offer affordable dental care options for patients without
            insurance. Our pricing may vary based on the services needed and
            your specific circumstances.
          </p>
          <div className="flex items-center gap-x-1">
            <img
              src="logo.png"
              className="w-9 h-9 rounded-full object-fill"
              alt=""
            />
            <div className="flex flex-col">
              <span className="text-md font-semibold text-black">
                Michael Foley
              </span>
              <span className="text-sm text-gray-600">
                Ceramic Dental Implants
              </span>
            </div>
          </div>
          <Button className="bg-[#E9006F] text-white px-3 py-2 rounded-xl outline-none hover:bg-pink-500 duration-150 gap-x-1 whitespace-nowrap">
            Make an Appointment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
