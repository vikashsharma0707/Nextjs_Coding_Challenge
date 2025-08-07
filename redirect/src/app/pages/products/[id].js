// pages/products/[id].js

import { useRouter } from "next/router";
import React from "react";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>📦 Product Details</h1>
      <p>Product ID: <strong>{id}</strong></p>
      <p>Here you can show product data fetched from an API based on ID.</p>
    </div>
  );
};

export default ProductDetail;
