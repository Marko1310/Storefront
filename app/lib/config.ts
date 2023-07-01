import Medusa from "@medusajs/medusa-js";

const BASEURL = "http://localhost:9000";

const medusaClient = new Medusa({
  maxRetries: 3,
  baseUrl: BASEURL,
});

export default medusaClient;
