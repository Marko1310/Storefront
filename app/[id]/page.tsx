import medusaClient from "../lib/config";

//components
import EachProduct from "@/app/components/EachProduct";

interface ProductProps {
  params: {
    id: string;
  };
}

const Product: React.FC<ProductProps> = async ({ params }) => {
  const { product } = await medusaClient.products.retrieve(params.id);

  return <EachProduct product={product} />;
};

export default Product;
