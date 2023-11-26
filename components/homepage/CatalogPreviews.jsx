import ProductTile1 from '../catalog/ProductTile1';
import ProductTile2 from '../catalog/ProductTile2';
import ProductTile3 from '../catalog/ProductTile3';
import ProductTile4 from '../catalog/ProductTile4';
import HeroSection from './HeroSection';

export default function CatalogPreviews() {
  return (
    <>
     <section className="home-catalog-preview container">
        <header className="home-catalog-title">
          <h className="fw-bold">New Stuff</h>
        </header>

        <section className="product-tiles">
          <div className="row">
            <div className="col-6 col-lg-3 my-2">
              <ProductTile1 />
            </div>
            <div className="col-6 col-lg-3 my-2">
              <ProductTile2 />
            </div>
            <div className="col-6 col-lg-3 my-2">
              <ProductTile3 />
            </div>
            <div className="col-6 col-lg-3 my-2">
              <ProductTile4 />
            </div>
          </div>
        </section>

      <footer>
        <div className="text-center my-3">
            <a
              href="https://www.google.com"
              title="View all"
              className="button"
            >
            <h4 className="d-sm-none">View all</h4>
            <h5 className="d-none d-sm-block">View all</h5>
             </a>
        </div>
      </footer>
      </section>

      <section className="home-catalog-preview container">
        <header className="home-catalog-title">
          <h className="fw-bold">Most loved</h>
        </header>

        <section className="product-tiles">
          <div className="row">
            <div className="col-6 col-lg-3 my-2">
              <ProductTile1 />
            </div>
            <div className="col-6 col-lg-3 my-2">
              <ProductTile2 />
            </div>
            <div className="col-6 col-lg-3 my-2">
              <ProductTile3 />
            </div>
            <div className="col-6 col-lg-3 my-2">
              <ProductTile4 />
            </div>
          </div>
        </section>

      <footer>
        <div className="text-center my-3">
            <a
              href="https://www.google.com"
              title="View all"
              className="button"
            >
            <h4 className="d-sm-none">View all</h4>
            <h5 className="d-none d-sm-block">View all</h5>
             </a>
        </div>
      </footer>
      </section>

      <section className="hero-section-infos container">
        <HeroSection></HeroSection>
      </section>

      <section className="home-catalog-preview container">
        <header className="home-catalog-title">
          <h className="fw-bold">Women&apos;s</h>
        </header>

        <section className="product-tiles">
          <div className="row">
            <div className="col-6 col-lg-3 my-2">
              <ProductTile1 />
            </div>
            <div className="col-6 col-lg-3 my-2">
              <ProductTile2 />
            </div>
            <div className="col-6 col-lg-3 my-2">
              <ProductTile3 />
            </div>
            <div className="col-6 col-lg-3 my-2">
              <ProductTile4 />
            </div>
          </div>
        </section>

      <footer>
        <div className="text-center my-3">
            <a
              href="https://www.google.com"
              title="View all"
              className="button"
            >
            <h4 className="d-sm-none">View all</h4>
            <h5 className="d-none d-sm-block">View all</h5>
             </a>
        </div>
      </footer>
      </section>

      <section className="home-catalog-preview container">
        <header className="home-catalog-title">
          <h className="fw-bold">Men&apos;s</h>
        </header>

        <section className="product-tiles">
          <div className="row">
            <div className="col-6 col-lg-3 my-2">
              <ProductTile1 />
            </div>
            <div className="col-6 col-lg-3 my-2">
              <ProductTile2 />
            </div>
            <div className="col-6 col-lg-3 my-2">
              <ProductTile3 />
            </div>
            <div className="col-6 col-lg-3 my-2">
              <ProductTile4 />
            </div>
          </div>
        </section>

      <footer>
        <div className="text-center my-3">
            <a
              href="https://www.google.com"
              title="View all"
              className="button"
            >
            <h4 className="d-sm-none">View all</h4>
            <h5 className="d-none d-sm-block">View all</h5>
             </a>
        </div>
      </footer>
      </section>

    </>
  );
}
