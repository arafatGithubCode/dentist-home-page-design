const EventBanner = () => {
  return (
    <>
      <div
        data-aos="zoom-in"
        className="h-[50vh] event_banner relative flex flex-col items-center justify-center"
      >
        <div className="absolute inset-0 w-full h-full bg-black/10" />
        <div className="flex flex-col justify-center p-5 max-w-6xl min-h-1/2 gap-y-4 mx-auto bg-[#272E5B] bg-opacity-70 rounded-3xl shadow-xl drop-shadow-xl border-2 border-white">
          <p className="text-white z-50 text-xl font-semibold sm:text-2xl">
            The Top 5, Can't-Miss{" "}
          </p>
          <h3 className="text-white z-50 text-4xl font-extrabold sm:text-5xl">
            Upcoming Events
          </h3>
          <div className="h-1 bg-white rounded" />
          <p className="text-white text-2xl font-semibold z-50">
            Dental{" "}
            <a
              href="#"
              className="underline hover:text-gray-200 hover:no-underline"
            >
              Conferences
            </a>{" "}
            2024
          </p>
        </div>
      </div>
    </>
  );
};

export default EventBanner;
