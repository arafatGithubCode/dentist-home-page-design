const DentistBanner = () => {
  return (
    <>
      <div
        data-aos="zoom-in"
        className="h-[50vh] find_doctor_banner relative flex flex-col items-center justify-center"
      >
        <div className="absolute inset-0 w-full h-full bg-black/30" />

        <div className="flex flex-col justify-center p-5 max-w-6xl min-h-1/2 gap-y-4 mx-auto bg-white/10 backdrop-blur-sm rounded-3xl shadow-xl drop-shadow-xl border-2 border-white">
          <h3 className="text-white z-50 text-4xl font-extrabold sm:text-5xl">
            Find a Dentist
          </h3>
          <p className="text-white z-50 text-xl font-semibold sm:text-2xl">
            Browse by location, Our doctors, advanced care providers, nurses and
            therapists <br /> offer the region’s most advanced medicine.
          </p>

          <p className="text-white text-sm sm:text-lg font-semibold z-50">
            Existing patients can use our{" "}
            <a className="underline hover:no-underline" href="#">
              Patient Portals
            </a>{" "}
            to access records, request prescription refills, <br /> and directly
            message providers.
          </p>
        </div>
      </div>
    </>
  );
};

export default DentistBanner;
