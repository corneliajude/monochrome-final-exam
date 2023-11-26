export default function ContentProduct() {
  return (
    <section className="content-product">
      <aside className="product-images">
        <div className="main-image">
          <img
            src="images/product-page/product-1.webp"
            alt="watch, wrist, metal, black, style"
          />
        </div>

        <div className="carousel-images">
          <img src="images/product-page/product-2.webp" alt="MIDNIGHT VANGUARD" />

          <img src="images/product-page/product-3.webp" alt="MIDNIGHT VANGUARD" />

          <img src="images/product-page/product-2.webp" alt="MIDNIGHT VANGUARD" />

          <img src="images/product-page/product-3.webp" alt="MIDNIGHT VANGUARD" />
        </div>
      </aside>
      <div className="product-details">
        <header>
          <h3>Midnight Vanguard &ndash; $550</h3>
        </header>

        <div className="product-description">
          <div>
            <h4>description</h4>
            <p>
            Introducing our luxuriant black watch, a timeless blend of sophistication and style.
            The sleek black stainless steel case complements the meticulously crafted black dial,
            creating an elegant and versatile timepiece. With precision quartz movement, this watch
            ensures accurate timekeeping while exuding an air of refined luxury. The sapphire crystal
            glass adds durability and scratch resistance, while the black genuine leather strap provides
            comfort and a touch of understated opulence.
            </p>
          </div>

          <h4>size & fit</h4>

          <h4>details & care</h4>

          <h4>delivery & returns</h4>
        </div>

        <div className="product-ctas">
          <div className="cart-btn">
            <i className="fa-solid fa-bag-shopping"></i>
            <button type="button" className="button" title="Add to bag">
              Add to bag
            </button>
          </div>
          <div className="whishlist-btn">
            <i className="fa-solid fa-heart"></i>
            <button type="button" className="button" title="Whishlist">
              Whishlist
            </button>
          </div>
        </div>

        <div className="product-connect">
          <header>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              Shipping restrictions may apply
            </a>
          </header>

          <section className="product-social-contact">
            <ul className="my-2">
              <li>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Contact us"
                >
                  <i className="fa-regular fa-envelope"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Contact us"
                >
                  <i className="fa-brands fa-facebook-square"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Contact us"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Contact us"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Contact us"
                >
                  <i className="fa-brands fa-pinterest"></i>
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className="product-customer-service">
          <ul>
            <li>Product code 764876</li>

            <li>
              {' '}
              <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                Send us custom inquiry
              </a>
            </li>

            <li>
              {' '}
              <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                Contact us <span>customer service</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
