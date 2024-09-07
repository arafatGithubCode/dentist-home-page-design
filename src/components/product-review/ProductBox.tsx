import { IProduct } from "@/types/types";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { FaYoutube } from "react-icons/fa";
import { AspectRatio } from "../ui/aspect-ratio";

interface ProductBoxProps {
  product: IProduct;
  index: number;
}

const ProductBox: React.FC<ProductBoxProps> = ({ product, index }) => {
  const [selectedImage, setSelectedImage] = useState<string>(product.images[0]);
  const [zoomStyle, setZoomStyle] = useState({});

  const handleHover = (image: string) => {
    setSelectedImage(image);
    setZoomStyle({ backgroundSize: "100%" });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { offsetWidth, offsetHeight } = target as HTMLDivElement;
    const x = (offsetX / offsetWidth) * 100;
    const y = (offsetY / offsetHeight) * 100;

    setZoomStyle({
      backgroundPosition: `${x}% ${y}%`,
      backgroundSize: "200%",
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({
      backgroundPosition: "center",
      backgroundSize: "100%",
    });
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay={(index + 1) * 100}
      className="bg-[#F8F8F8] p-4 shadow-lg rounded-md flex flex-col overflow-hidden border-2"
    >
      <div className="flex items-start gap-x-2">
        <div className="flex flex-col gap-y-3 pr-2 border-r-2">
          {product.images.map((image, index) => (
            <div key={index} className="w-[3rem]">
              <img
                src={image}
                alt={`${product.name} image ${index + 1}`}
                className="w-full h-full object-cover rounded cursor-pointer"
                onMouseEnter={() => handleHover(image)}
              />
            </div>
          ))}
        </div>
        <div className="flex-1 relative">
          <div
            className="main-product-image w-full h-[200px] bg-no-repeat bg-center transition-all duration-300 ease-in-out"
            style={{
              backgroundImage: `url(${selectedImage})`,
              ...zoomStyle,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
      <h3 className="mt-4 font-bold text-lg text-gray-800">{product.name}</h3>
      <p className="mt-2 text-sm text-gray-600">
        {product.description.length > 100
          ? product.description.slice(0, 100) + "..."
          : product.description}
      </p>
      <div className="mt-3 flex items-center">
        {Array(product.star)
          .fill(0)
          .map((_, i) => (
            <span key={i} className="text-yellow-500 text-xl">
              ★
            </span>
          ))}
      </div>
      <Dialog>
        <DialogTrigger>
          <Button variant="outline" className="w-full mt-2">
            <FaYoutube className="mr-2" />
            Watch Video
          </Button>
        </DialogTrigger>
        <DialogContent>
          <AspectRatio ratio={16 / 9}>
            <iframe
              className="w-full h-full"
              src={product.productVideo}
              title="YouTube video"
            ></iframe>
          </AspectRatio>
        </DialogContent>
      </Dialog>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
        {product.buttonText}
      </button>
    </div>
  );
};

export default ProductBox;
