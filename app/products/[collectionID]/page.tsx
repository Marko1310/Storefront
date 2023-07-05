import medusaClient from "../../lib/config";

// components
import ProductsList from "../../components/ProductsList";

type ProductProps = {
  params: {
    collectionID: string;
  };
};

const CollectionProducts: React.FC<ProductProps> = async ({ params }) => {
  console.log(params.collectionID);
  const { products: products } = await medusaClient.products.list({
    collection_id: [`${params.collectionID}`],
  });

  return <ProductsList products={products} />;
};

export default CollectionProducts;
