import React from "react";

async function ProductDetails({
  params,
}: {
  params: Promise<{ productID: string }>;
}) {
  const productID = (await params).productID;
  return <div>This is a product ID: {productID}</div>;
}

export default ProductDetails;
