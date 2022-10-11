import { useRouter } from "next/router";
import React from "react";

function Review() {
  const routeData = useRouter();
  const { reviewId, productId } = routeData.query;
  return (
    <h1>
      Review of {reviewId} for Product {productId}
    </h1>
  );
}

export default Review;
