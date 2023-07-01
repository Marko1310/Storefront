import medusaClient from "../lib/config";

const Products = async () => {
  const { products, count, offset } = await medusaClient.products.list();

  return (
    <>
      {products.map((el) => {
        return <p key={el.id}> {el.title}</p>;
      })}
    </>
  );
};

export default Products;
