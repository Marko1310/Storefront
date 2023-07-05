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
      <div className="w-1/2 flex-shrink border border-solid border-red-400">
        <div className="flex justify-center">
          <Image
            src={product.thumbnail || ""}
            alt="thumbnail"
            width="0"
            height="0"
            sizes="100vw"
            className="h-screen w-fit object-contain"
          />
        </div>
      </div>
      <div className="w-1/2 flex-shrink items-center border border-solid border-blue-400 p-12">
        <div className="my-2 flex flex-col">
          <p className="my-2 text-3xl font-bold">{product.title?.slice(6)}</p>
          <p className="my-2 text-sm">
            {product.variants[0].prices[0].amount}{" "}
            {product.variants[0].prices[0].currency_code}
          </p>
          <p className="mt-4 text-sm font-light">{product.description}</p>

          <div className="flex flex-col ">
            <select
              name="size"
              id="size"
              className="mt-4 flex flex-1 items-center justify-center border border-slate-300 border-transparent py-3 pl-4 text-sm font-light transition-all duration-300 hover:bg-slate-100 focus:outline-none sm:w-full"
            >
              <option value="" disabled selected>
                Size
              </option>
              <option value="small">Small</option>
            </select>
            <select
              name="color"
              id="color"
              className="mt-4 flex flex-1 items-center justify-center border border-slate-300 border-transparent py-3 pl-4 text-sm font-light transition-all duration-300 hover:bg-slate-100 focus:outline-none sm:w-full"
            >
              <option value="" disabled selected>
                Color
              </option>
              <option value="black">Black</option>
            </select>
            <select
              name="quantity"
              id="quantity"
              className="mt-4 flex flex-1 items-center justify-center border border-slate-300 border-transparent py-3 pl-4 text-sm font-light transition-all duration-300 hover:bg-slate-100 focus:outline-none sm:w-full"
            >
              <option value="" disabled selected>
                Quantity
              </option>
              <option value="1">1</option>
            </select>
            <button
              type="submit"
              className="mt-4 flex flex-1 items-center justify-center border border-transparent bg-[#111827] py-3 font-light uppercase text-white transition-all duration-300 hover:bg-gray-800 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:w-full"
            >
              Add to Cart +
            </button>
          </div>
          <p className="mt-8 text-sm font-semibold">Product details</p>
          <p className="mt-4 text-sm font-semibold">Material</p>
          <p className="mt-2 text-sm font-extralight">{product.material}</p>
        </div>
      </div>
    </div>
  );
};

export default EachProduct;
