import medusaClient from "../../lib/config";

// components
import ProductsList from "../../components/ProductsList";

interface ProductProps {
  params: {
    collection: string;
  };
}

const CollectionProducts: React.FC<ProductProps> = async ({ params }) => {
  const { products: products } = await medusaClient.products.list({
    collection_id: [
      "pcol_01H4DTGX2A046VBG7RPKC9K00K",
      "pcol_01H4DTHPRAQCV382MPY8EDVQQT",
    ],
  });

  return <ProductsList products={products} collections={[]} />;
};

export default CollectionProducts;
