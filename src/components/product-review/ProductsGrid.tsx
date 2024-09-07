import React from "react";
import ProductBox from "./ProductBox";
import { IProduct } from "@/types/types";

interface ProductsGridProps {
  products: IProduct[];
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product, index) => (
        <ProductBox key={index} product={product} index={index} />
      ))}
    </div>
  );
};

export default ProductsGrid;
