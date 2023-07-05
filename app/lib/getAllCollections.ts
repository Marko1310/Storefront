import medusaClient from "../lib/config";

const getAllCollections = async () => {
  const { collections: collections } = await medusaClient.collections.list();
  return collections;
};

export default getAllCollections;
