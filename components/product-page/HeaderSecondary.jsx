import Link from 'next/link';

export default function ProductPageHeaderSecondary() {
  return (
    <section className="product-page-header-secondary">
      <div className="product-page-header-secondary-inner container">
        <section className="header-connect d-none d-lg-flex">
          <ul>
            <li>
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow us"
              >
                <i className="fa-brands fa-facebook-square"></i>
              </a>
            </li>

            <li>
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow us"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>

            <li>
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow us"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>

            <li>
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow us"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>

            <li>
              <a href="tel:+44 (0)10 2345 6789">Call us +44 (0)10 123 789</a>
            </li>
          </ul>
        </section>

        <section className="mobile-title d-lg-none text-uppercase">
          <Link href="/" title="Monochrome">
            Monochrome
          </Link>
        </section>

        <section className="header-controls">
          <div className="search-bar d-none d-lg-block">
            <form action="">
              <button type="submit" className="search-submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>

              <input
                type="text"
                className="search-box"
                placeholder="Search"
                title="Search"
              />
            </form>
          </div>

          <div className="control-buttons">
            <ul>
              <li>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="My Account"
                >
                  <i className="fa-solid fa-user"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Wish List"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Cart"
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
}
