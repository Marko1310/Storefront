import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import React from "react";

type ProductsComponentProps = {
  products: PricedProduct[];
};

const ProductsComponent: React.FC<ProductsComponentProps> =
  function ProductsComponent({ products }) {
    return (
      <div className="w-ful h-full p-5">
        <div className="mt-20 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((el) => {
            return <p key={el.id}> {el.title}</p>;
          })}
        </div>
      </div>
    );
  };

export default ProductsComponent;
