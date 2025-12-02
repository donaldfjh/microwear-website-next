import Link from "next/link";

export default function ProductNotFound() {
  return (
    <div className="product-detail-page">
      <div className="product-not-found">
        <h1>Product Not Found</h1>
        <p>The product you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/products" className="back-to-catalog">
          Back to Catalog
        </Link>
      </div>
    </div>
  );
}
