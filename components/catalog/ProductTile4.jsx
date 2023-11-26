import Link from 'next/link';

export default function ProductTile4() {
  return (
    <article className="product-tile product-tile4">
      <div className="product-image">

        <Link
          href="/product"
          title="Midnight Vanguard"
          className="product-tile-image-container">

           <img
            src="/images/products/product-tile-4.png"
            alt="Midnight Vanguard"
          ></img>

        </Link>

        <span className="badge">
          <a href="" title="WishList">
            <i className="fa-solid fa-heart-circle-plus"></i>
          </a>
        </span>
      </div>

      <div className="product-title">
        <span>Midnight Vanguard</span>
      </div>

      <div className="product-pricing">
        <span>$550</span>
      </div>
    </article>
  );
}
