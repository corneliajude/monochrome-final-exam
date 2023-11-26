import Link from 'next/link';

export default function ProductTile2() {
  return (
    <article className="product-tile product-tile2">
      <div className="product-image">

        <Link
          href="/product"
          title="Obsidian Horizon"
          className="product-tile-image-container">

          <img
            src="/images/products/product-tile-2.png"
            alt="Obsidian Horizon"
          ></img>

        </Link>

        <span className="badge">
          <a href="" title="WishList">
            <i className="fa-solid fa-heart-circle-plus"></i>
          </a>
        </span>
      </div>

      <div className="product-title">
        <span>Obsidian Horizon</span>
      </div>

      <div className="product-pricing">
        <span>$425</span>
      </div>
    </article>
  );
}
