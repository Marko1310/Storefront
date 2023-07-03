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
    <div className="grid grid-cols-2">
      <div className=" border border-solid border-red-400">
        <Image
          src={product.thumbnail || ""}
          alt="thumbnail"
          width="0"
          height="0"
          sizes="100vw"
          className="h-fit w-fit object-contain"
        />
      </div>
      <div className=" items-center border border-solid border-blue-400 p-12">
        <div className="my-2 flex flex-col">
          <p className="my-2 text-3xl font-bold">{product.title?.slice(6)}</p>
          <p className="my-2 text-sm">
            {product.variants[0].prices[0].amount}{" "}
            {product.variants[0].prices[0].currency_code}
          </p>
          <p className="font-bold">Product details</p>
        </div>
      </div>
    </div>
  );
};

export default EachProduct;
