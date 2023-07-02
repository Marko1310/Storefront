import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import Image from "next/image";
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
                className="w-min-[16rem] w-max-[17.22rem] h-max-[19.75rem] flex flex-col justify-center rounded-sm bg-[#F7F7FA] transition-transform duration-300 hover:scale-[1.02]"
                key={el.id}
              >
                <div className=" relative flex h-full flex-1 justify-center ">
                  <Image
                    src={el.thumbnail || ""}
                    alt="thumbnail"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="flex h-10 flex-row items-center justify-between px-2">
                  <p>{el.title?.slice(6)}</p>
                  <p>
                    {el.variants[0].prices[0].amount}{" "}
                    {el.variants[0].prices[0].currency_code}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

export default ProductsComponent;
