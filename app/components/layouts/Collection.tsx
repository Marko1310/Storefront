import Link from "next/link";
import medusaClient from "../../lib/config";

const Collection = async () => {
  const { collections: collections } = await medusaClient.collections.list();
  return (
    <div className="flex flex-row pr-4 md:flex-col md:pl-8  ">
      <p className="hidden pb-6 font-semibold md:block">Collections:</p>
      <div className="flex flex-row pl-2 md:flex-col">
        {collections.map((collection) => {
          return (
            <Link
              key={collection.id}
              href={`/products/${collection.id}`}
              className=" mb-4 mr-2 flex h-10 w-24 items-center justify-center bg-gray-300 font-semibold transition duration-300 hover:underline md:mb-2 md:bg-transparent md:text-sm md:font-normal"
            >
              <p className="py-1 ">{collection.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Collection;
