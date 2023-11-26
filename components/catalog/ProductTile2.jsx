import Link from 'next/link';
import Image from 'next/image';

export default function ProductTile2() {
  return (
    <article className="product-tile product-tile2">
      <div className="product-image">
        <Link href="/product">
          <a title="Monochrome" className="product-tile-image-container">
            {/* <img
              src="/images/products/product-tile-2.png"
              alt=""
            ></img> */}
            <Image alt="New Watch 2" src="/images/products/product-tile-2.png"></Image>
          </a>
        </Link>

        <span className="badge">
          <a href="" title="Wish List">
            <i className="fa-solid fa-heart"></i>
          </a>
        </span>
      </div>

      <div className="product-title">
        <span>Monochrome</span>
      </div>

      <div className="product-pricing">
        <span>$425</span>
      </div>
    </article>
  );
}
