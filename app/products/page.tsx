import medusaClient from "../lib/config";

// components
import ProductsList from "../components/ProductsList";

const Products = async () => {
  const { products: products } = await medusaClient.products.list();
  const { collections: collections } = await medusaClient.collections.list();

  return <ProductsList products={products} collections={collections} />;
};

export default Products;
