//components
import EachProduct from "@/app/components/EachProduct";

import getProduct from "../lib/getProduct";

type ProductProps = {
  params: {
    id: string;
  };
};

const Product: React.FC<ProductProps> = async ({ params }) => {
  const product = await getProduct(params.id);

  return <EachProduct product={product} />;
};

export default Product;
