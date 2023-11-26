export default function HeroSection() {
  return (
    <section className="hero-section">
      <aside className="hero-section-image">
        <img
          src="/images/homepage/entrepreneurs-image.png"
          alt="Watches for entrepreneurs"
        />
      </aside>

      <section className="hero-section-text">
        <h2>Watches for entrepreneurs</h2>

        <p className="d-none d-xl-block">
          {' '}
          Explore our curated collection of precision-crafted watches that blend elegance with functionality.
          Discover the artistry of watchmaking as you browse through our curated selection.
          From classic designs that stand the test of time to avant-garde styles that redefine modern luxury,
          our timepieces cater to every taste.
        </p>

        <p>
          {' '}
          Whether you&apos;re seeking a timeless piece for everyday wear or a statement accessory for special moments,
          our watches are designed to complement your lifestyle. Dive into a world where time is not just
          measured but celebrated. Elevate your style, embrace the elegance, and make every moment count. Welcome to
          Monochrome — where time meets impeccable taste.
        </p>
      </section>
    </section>
  );
}
