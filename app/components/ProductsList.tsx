import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { ProductCollection } from "@medusajs/medusa/dist/models/product-collection";

import Image from "next/image";
import React from "react";
import Link from "next/link";

type ProductsComponentProps = {
  products: PricedProduct[];
  collections: ProductCollection[];
};

const ProductsComponent: React.FC<ProductsComponentProps> =
  function ProductsComponent({ products, collections }) {
    return (
      <div className="h-full w-full px-2 ">
        <div>
          {collections.map((collection) => {
            return (
              <form key={collection.id} action="/action_page.php">
                <input
                  type="checkbox"
                  id={collection.id}
                  name={collection.title}
                  value={collection.title}
                />
                <label> {collection.title}</label>
              </form>
            );
          })}
          {/* <form action="/action_page.php">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label> I have a bike</label>
          </form> */}
        </div>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => {
            return (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div
                  className="w-min-[16rem] w-max-[17.22rem] h-max-[19.75rem] flex flex-col justify-center rounded-sm bg-[#F7F7FA] shadow-sm transition-transform duration-300 hover:scale-[1.01] hover:cursor-pointer hover:shadow-lg"
                  key={product.id}
                >
                  <div className=" relative flex h-full flex-1 justify-center ">
                    <Image
                      src={product.thumbnail || ""}
                      alt="thumbnail"
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="flex h-10 flex-row items-center justify-between px-2">
                    <p>{product.title?.slice(6)}</p>
                    <p>
                      {product.variants[0].prices[0].amount}{" "}
                      {product.variants[0].prices[0].currency_code}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  };

export default ProductsComponent;
