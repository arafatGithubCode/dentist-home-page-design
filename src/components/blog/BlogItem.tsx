import { IBlog } from "@/types/types";
import { Button } from "../ui/button";

type Props = {
  blog: IBlog;
  index: number;
};
const BlogItem = ({ blog, index }: Props) => {
  const { image, title, description, category, publishData, publisher } = blog;

  const calculateReadingTime = (text: string): string => {
    const words = text.trim().split(/\+/).length;
    const msPerWord = 60000;
    const totalMs = words * msPerWord;

    const minutes = Math.ceil(totalMs / 60000);

    return `${minutes} min read`;
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay={(index + 1) * 100}
      className="bg-slate-100 flex flex-col gap-x-1 max-w-xs p-2 shadow-lg rounded-xl z-0 border"
    >
      <div className="relative h-[150px]">
        <img
          src={image}
          alt={category}
          className="w-full h-full object-cover rounded"
        />
        <span className="absolute top-0 left-0 bg-[#E9006F] text-white p-1 rounded-br-xl text-lg font-semibold">
          {category}
        </span>
      </div>
      <div>
        <h3 className="text-md font-semibold line-clamp-1 text-black">
          {title}
        </h3>
        <p className="text-sm text-gray-700 line-clamp-2">{description}</p>

        <p className="text-sm font-semibold pb-1">
          {calculateReadingTime(description)}
        </p>
        <div className="flex items-center gap-x-2 group">
          <div className="w-12 h-12 rounded-full border">
            <img
              src={publisher.image}
              alt=""
              className="w-full h-full object-fill rounded-full border-2 border-white"
            />
          </div>
          <p className="text-sm font-semibold text-black group-hover:underline cursor-pointer">
            {publisher.name}
          </p>
          <p className="text-gray-400 text-sm ml-5">{publishData}</p>
        </div>
        <Button className="w-full text-white bg-blue-500 hover:bg-blue-600 text-center py-2 font-semibold text-md transition-all duration-300 ease-linear mt-2">
          Read More
        </Button>
      </div>
    </div>
  );
};

export default BlogItem;
