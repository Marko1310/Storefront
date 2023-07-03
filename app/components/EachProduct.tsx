import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import Image from "next/image";
import React from "react";

type ProductsComponentProps = {
  product: PricedProduct;
};

const EachProduct: React.FC<ProductsComponentProps> = ({
  product: product,
}) => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row">
      <div className="flex-shrink-0 border border-solid border-red-400">
        <div className="flex justify-center">
          <Image
            src={product.thumbnail || ""}
            alt="thumbnail"
            width="0"
            height="0"
            sizes="100vw"
            className="h-auto max-h-full w-auto object-contain"
          />
        </div>
      </div>
      <div className="flex-grow items-center border border-solid border-blue-400 p-12">
        <div className="my-2 flex flex-col">
          <p className="my-2 text-3xl font-bold">{product.title?.slice(6)}</p>
          <p className="my-2 text-sm">
            {product.variants[0].prices[0].amount}{" "}
            {product.variants[0].prices[0].currency_code}
          </p>
          <p className="font-bold">Product details</p>

          <div className="sm:flex-col1 mt-10 flex">
            <button
              type="submit"
              className="flex flex-1 items-center justify-center border border-transparent bg-[#111827] py-3 font-light uppercase text-white transition-all duration-300 hover:bg-gray-800 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:w-full"
            >
              Add to Cart +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachProduct;
