import { ChangeEvent, useState } from "react";
import { blogs } from "@/constant/data";

import BlogBanner from "./BlogBanner";
import BlogItem from "./BlogItem";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { PaginationLine } from "../Pagination";

const ITEMS_PER_PAGE = 6;

const Blog = () => {
  const [searchBlog, setSearchBlog] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchBlog(e.target.value);
    setCurrentPage(1); // Reset to first page on search change
  };

  const clearSearch = () => {
    setSearchBlog("");
    setCurrentPage(1); // Reset to first page on search clear
  };

  const filteredBlogs = blogs.filter(
    (item) =>
      item.category.toLowerCase().includes(searchBlog.toLowerCase()) ||
      item.title.toLowerCase().includes(searchBlog.toLowerCase())
  );

  const totalPages = Math.ceil(
    filteredBlogs.length > 0
      ? filteredBlogs.length / ITEMS_PER_PAGE
      : blogs.length / ITEMS_PER_PAGE
  );

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentBlogs =
    filteredBlogs.length > 0
      ? filteredBlogs.slice(startIndex, startIndex + ITEMS_PER_PAGE)
      : blogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <section id="blog" className="bg-white py-5">
      <BlogBanner
        filteredBlogs={filteredBlogs}
        searchBlog={searchBlog}
        onHandleChange={handleChange}
        onClearSearch={clearSearch}
      />

      <div className="max-w-6xl mx-auto px-6 xl:px-0 flex items-center justify-between py-8">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter Search Result" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Blogs</SelectLabel>
              <SelectItem value="aToz">Sort by A to Z</SelectItem>
              <SelectItem value="zToa">Sort by Z to A</SelectItem>
              <SelectItem value="latest">Sort by Latest</SelectItem>
              <SelectItem value="oldest">Sort by Oldest</SelectItem>
              <SelectItem value="date">Sort by Date</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <p>
          {filteredBlogs.length > 0
            ? `${filteredBlogs.length} ${
                filteredBlogs.length === 1 ? "Result" : "Results"
              }`
            : `${blogs.length} ${blogs.length === 1 ? "Result" : "Results"}`}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {currentBlogs.map((blog, index) => (
          <BlogItem key={index} blog={blog} index={index} />
        ))}
      </div>
      <div className="max-w-6xl mx-auto px-6 xl:px-0 py-10">
        <PaginationLine
          currentPage={currentPage}
          onPageChange={handlePageChange}
          scrollRef="#blog"
          totalPages={totalPages}
        />
      </div>
    </section>
  );
};

export default Blog;
