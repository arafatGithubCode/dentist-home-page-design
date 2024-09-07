import { IBlog } from "@/types/types";
import { CiSearch } from "react-icons/ci";

type Props = {
  blog: IBlog[];
  onSelectSuggestion: (text: string) => void;
};

const SearchSuggestion = ({ blog, onSelectSuggestion }: Props) => {
  return (
    <div
      data-aos="zoom-in"
      className="bg-white absolute top-[60px] left-0 right-0 max-h-[20vh] overflow-y-auto z-[100] space-y-2 rounded shadow"
    >
      {blog.map((blog) => {
        const { category, title } = blog;
        return (
          <div
            onClick={() => onSelectSuggestion(category + " " + title)}
            className="flex items-center gap-x-2 px-2 py-1 cursor-pointer hover:bg-slate-100 border-b group"
          >
            <CiSearch className="text-lg text-gray-600 group-hover:text-black" />
            <p className="font-semibold text-gray-600">{category}</p>
            <p className="text-sm text-gray-600">{title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SearchSuggestion;
