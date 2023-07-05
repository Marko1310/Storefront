import medusaClient from "../lib/config";

const getProduct = async (id: string) => {
  const { product } = await medusaClient.products.retrieve(id);
  return product;
};

export default getProduct;
