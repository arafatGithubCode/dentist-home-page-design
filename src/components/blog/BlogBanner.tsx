import { Input } from "../ui/input";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import SearchSuggestion from "../SearchSuggestion";
import { IBlog } from "@/types/types";
import { ChangeEvent } from "react";

type Props = {
  filteredBlogs: IBlog[];
  searchBlog: string;
  onHandleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClearSearch: () => void;
};

const BlogBanner = ({
  filteredBlogs,
  searchBlog,
  onHandleChange,
  onClearSearch,
}: Props) => {
  const handleSelectSuggestion = (text: string) => {
    onHandleChange({
      target: { value: text },
    } as ChangeEvent<HTMLInputElement>);
  };
  return (
    <>
      <div
        data-aos="zoom-in"
        className="h-[50vh] blog_banner relative flex flex-col items-center justify-center"
      >
        <div className="absolute inset-0 w-full h-full bg-black/30" />

        <div className="flex flex-col justify-center p-5 max-w-6xl min-h-1/2 gap-y-4 mx-auto bg-black/40 backdrop-blur-sm rounded-3xl shadow-xl drop-shadow-xl border-2 border-white">
          <p className="text-white z-50 text-xl font-semibold sm:text-2xl">
            See Our Blogs{" "}
          </p>
          <h3 className="text-white z-50 text-4xl font-extrabold sm:text-5xl">
            What's New?
          </h3>
          <div className="w-full bg-white rounded relative">
            {searchBlog.length === 0 ? (
              <CiSearch className="absolute top-1/2 right-0 -translate-y-1/2 text-xl text-black block font-bold cursor-pointer" />
            ) : (
              <RxCross2
                className="absolute top-1/2 right-0 -translate-y-1/2 text-xl text-black block font-bold cursor-pointer"
                onClick={onClearSearch}
              />
            )}
            <Input
              className="bg-transparent border-none outline-none p-4"
              placeholder="Find blogs..."
              value={searchBlog}
              onChange={onHandleChange}
            />

            {searchBlog && (
              <SearchSuggestion
                blog={filteredBlogs}
                onSelectSuggestion={handleSelectSuggestion}
              />
            )}
          </div>
          <div className="h-1 bg-white rounded" />
          <p className="text-white text-sm sm:text-lg font-semibold z-50">
            "Explore the latest in{" "}
            <a
              href="#"
              className="underline hover:text-gray-200 hover:no-underline"
            >
              dental care,
            </a>{" "}
            from expert tips to advanced treatments. <br /> Your journey to a
            brighter, healthier smile starts here!"
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogBanner;
