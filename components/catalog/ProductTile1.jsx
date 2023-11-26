import Link from 'next/link';

export default function ProductTile1() {
  return (
    <article className="product-tile">
      <div className="product-image">

        <Link
          href="/product"
          title="Marble Elegance"
          className="product-tile-image-container">

           <img
            src="/images/products/product-tile-1.png"
            alt="Marble Elegance"
          ></img>

        </Link>

        <span className="badge">
          <a href="" title="WishList">
            <i className="fa-solid fa-heart-circle-plus"></i>
          </a>
        </span>
      </div>

      <div className="product-title">
        <span>Marble Elegance</span>
      </div>

      <div className="product-pricing">
        <span>$500</span>
      </div>
    </article>
  );
}
