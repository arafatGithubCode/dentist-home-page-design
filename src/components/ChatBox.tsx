import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdRefresh } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import { Separator } from "./ui/separator";

const ChatBox = () => {
  const [showChatBox, setShowChatBox] = useState<boolean>(true);
  const [toggleRestartChart, setToggleRestartChart] = useState<boolean>(false);

  const online = true;

  const handleChatToggle = () => {
    setShowChatBox(!showChatBox);
  };

  return (
    <div className="fixed bottom-3 right-3 max-w-xs z-50">
      {showChatBox ? (
        <div
          className={`rounded-xl shadow-xl bg-white transform transition-all duration-500 ease-in-out opacity-0 translate-y-4 ${
            showChatBox
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          <div className="flex items-center justify-between gap-x-10 bg-[#E9006F] rounded-xl rounded-bl-none rounded-br-none px-4 py-1">
            <div className="flex items-center gap-x-2">
              <div className="w-10 h-10 rounded-full">
                <img
                  className="w-full h-full object-fill rounded-full"
                  src="chatbot.png"
                  alt="live chat"
                />
              </div>
              <p className="text-white font-semibold text-lg whitespace-nowrap">
                How Can I Help?
              </p>
            </div>
            <div className="flex items-center gap-x-5">
              <div className="relative">
                <BsThreeDotsVertical
                  className="cursor-pointer text-xl text-white font-bold hover:scale-105 duration-200"
                  onClick={() => setToggleRestartChart(!toggleRestartChart)}
                />
                {toggleRestartChart && (
                  <div className="bg-white p-2 rounded-xl flex items-center gap-x-2 absolute top-10 -right-10 shadow-lg cursor-pointer z-50">
                    <IoMdRefresh className="text-2xl text-slate-300 font-bold" />
                    <span className="text-md text-slate-800 whitespace-nowrap select-none">
                      Restart Chat
                    </span>
                  </div>
                )}
              </div>
              <IoIosArrowDown
                className="text-xl text-white font-bold cursor-pointer hover:scale-105 duration-150"
                onClick={handleChatToggle}
              />
            </div>
          </div>
          <div className="bg-slate-50 h-[25rem] relative">
            <div className="flex flex-col items-center justify-start h-full pt-[1rem]">
              <div className="w-[8rem]">
                <img
                  className="w-full h-full object-cover"
                  src="logo.png"
                  alt=""
                />
              </div>
              <p className="text-2xl text-slate-800 font-semibold text-center">
                The Ceramic Implant Guy
              </p>
              <p className="text-sm text-slate-400 text-center">
                Want to dive into the world of ceramic dental implants? I’m here
                to guide you.
              </p>
            </div>
            <div className="absolute inset-0 w-full h-full bg-blue-500 bg-opacity-40 flex flex-col justify-end items-start p-4 space-y-2 rounded-xl rounded-tl-none rounded-tr-none">
              <span className="bg-[#F2F2F2] text-black p-1 rounded ml-[44px]">
                Hey there!
              </span>
              <div className="flex items-center gap-x-2">
                <div className="w-9 h-9 rounded-full relative">
                  <div className="w-2 h-2 bg-green-500 rounded-full absolute top-1 left-0 z-50" />
                  <img
                    className="w-full h-full object-cover"
                    src="logo.png"
                    alt=""
                  />
                </div>
                <span className="bg-[#F2F2F2] text-black p-1 rounded whitespace-nowrap">
                  Are you looking for Consultation?
                </span>
              </div>
              <Separator />
              <div className="relative w-full">
                <textarea
                  placeholder="Type your answer..."
                  className="w-full border rounded p-1 outline-0 bg-white bg-opacity-30"
                ></textarea>
                <FiSend className="absolute right-0 top-0 text-2xl text-blue-400 hover:text-blue-700 duration-200 cursor-pointer hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative cursor-pointer" onClick={handleChatToggle}>
          {online && (
            <div className="w-3 h-3 bg-green-500 rounded-full absolute top-3 left-0 z-50" />
          )}
          <div className="w-16 h-16 rounded-full border animate-pulse">
            <img
              className="w-full h-full object-fill border-[3px] border-white rounded-full"
              src="chatbot.png"
              alt="live chat"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
