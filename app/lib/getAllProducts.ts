import medusaClient from "../lib/config";

const getAllProducts = async () => {
  const { products: products } = await medusaClient.products.list();
  return products;
};

export default getAllProducts;
