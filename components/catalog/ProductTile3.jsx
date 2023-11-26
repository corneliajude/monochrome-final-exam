import Link from 'next/link';

export default function ProductTile3() {
  return (
    <article className="product-tile product-tile3">
      <div className="product-image">

        <Link
          href="/product"
          title="Croco Pearl"
          className="product-tile-image-container">

          <img
            src="/images/products/product-tile-3.png"
            alt="Croco Pearl"
          ></img>

        </Link>

        <span className="badge">
          <a href="" title="WishList">
            <i className="fa-solid fa-heart-circle-plus"></i>
          </a>
        </span>
      </div>

      <div className="product-title">
        <span>Croco Pearl</span>
      </div>

      <div className="product-pricing">
        <span>$450</span>
      </div>
    </article>
  );
}
