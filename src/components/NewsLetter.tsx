const NewsLetter = () => {
  return (
    <div
      data-aos="zoom-in"
      className="h-[60vh] news_letter_banner relative flex flex-col items-center justify-center"
    >
      <div className="absolute inset-0 w-full h-full bg-[#FCB1C7] bg-opacity-40" />
      <div className="flex flex-col justify-center items-center sm:p-2 md:m-5 max-w-6xl min-h-1/2 gap-y-4 mx-auto bg-gradient-to-r from-[#FAD4DF] to-[#F9F5F6] border-2 border-white rounded-3xl shadow-xl drop-shadow-xl">
        <div className="w-[5rem]">
          <img
            src="newsLetter.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <h3 className="text-[#353458] z-50 text-4xl font-bold sm:text-4xl">
          Subscribe Newsletter
        </h3>
        <p className="text-slate-600 font-semibold z-50 text-center">
          You will never miss our podcasts, latest news etc. Our newsletter is
          once <br /> a week, every Thursday.
        </p>
        <div className="w-full flex flex-row items-center rounded-3xl">
          <input
            className="basis-[70%] bg-white border-none outline-none p-[22px] rounded-3xl rounded-tr-none rounded-br-none font-semibold text-md text-black"
            type="text"
            placeholder="user@yoursite.com"
          />
          <button className="basis-[30%] bg-gradient-to-r from-[#FD61A2] to-[#FC337F] text-white text-xl font-bold border-none outline-none p-5 rounded-3xl rounded-tl-none rounded-bl-none hover:animate-pulse">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
