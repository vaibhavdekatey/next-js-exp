import React from "react";

async function ProductReviewID({
  params,
}: {
  params: Promise<{ reviewID: string }>;
}) {
  const productReviewID = (await params).reviewID;
  return <div>ProductReviewID {productReviewID}</div>;
}

export default ProductReviewID;
