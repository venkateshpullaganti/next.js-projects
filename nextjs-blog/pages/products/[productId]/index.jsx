import { useRouter } from "next/router";
import React from "react";

function ProductDetailedPage() {
  const routeDetails = useRouter();
  console.log(routeDetails);
  return <h1>Product Details {routeDetails.query.productId}</h1>;
}

export default ProductDetailedPage;
