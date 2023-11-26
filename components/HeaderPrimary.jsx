export default function HeaderPrimary() {
  return (
    <nav className="header-primary">
      <ul id="root" className="d-none d-lg-flex container p-2">
        <li>
          <a href="https://google.com" title="New Arrivals">
            New Arrivals
          </a>
        </li>
        <li>
          <a href="https://google.com" title="Brands">
            Brands
          </a>
        </li>
        <li>
          <a href="https://google.com" title="Mens">
            Men&apos;s
          </a>
        </li>
        <li>
          <a href="https://google.com" title="Womens">
            Women&apos;s
          </a>
        </li>
        <li>
          <a href="https://google.com" title="Accesories">
            Accesories
          </a>
        </li>
        <li>
          <a href="https://google.com" title="Lookbook">
            Lookbook
          </a>
        </li>
      </ul>

      <div className="header-primary-mobile d-lg-none">
        <section className="header-primary-content container">
          <div className="search-form">
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

          <div className="header-primary-bars">
            <span>
              <i className="fa-solid fa-bars"></i>
            </span>
          </div>
        </section>
      </div>
    </nav>
  );
}
