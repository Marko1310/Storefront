import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import React from "react";

type ProductsComponentProps = {
  products: PricedProduct[];
};

const ProductsComponent: React.FC<ProductsComponentProps> =
  function ProductsComponent({ products }) {
    return (
      <div className="w-ful h-full p-2">
        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((el) => {
            return (
              <div
                className="w-min-[16rem] w-max-[17.22rem] border-rad h-[19.75rem] rounded-sm border-solid border-red-300 bg-[#F7F7FA] p-2 "
                key={el.id}
              >
                {el.title}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

export default ProductsComponent;
