import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer-inner container">
        <section className="footer-connect">
          <form className="footer-newsletter">
            <h2 className="d-lg-none">Let&apos;s connect</h2>

            <label htmlFor="newsletter" className="email-label">
              <span className="d-lg-none">Be the first to receive exclusives offers</span>
              <span className="d-none d-lg-block">Sign up for our newsletter</span>
            </label>

            <input
              type="email"
              name="newsletter"
              id="newsletter"
              className="email-input"
              placeholder="Email"
              required
            />

            <button
              type="submit"
              name="submit"
              title="Submit"
              className="button button-submit"
            >
              Submit
            </button>

            <div className="GDPR-terms d-lg-none">
              <input type="checkbox" name="GDPR" id="GDPR" />
              <label htmlFor="GDPR">
                I agree with the {' '}
                <span>
                  <a href="https://google.com" title="Privacy Policy" target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                  </a>
                </span> {' '}
                and I want to receive emails from Monochrome.
              </label>
            </div>
          </form>

          <section className="footer-social">
            <header>
              <h2 className="d-lg-none">We are highly likeable</h2>
            </header>

            <ul className="my-4">
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
            </ul>
          </section>
        </section>

        <nav className="footer-nav">
          <header className="d-lg-none">
            <h2>How can we help?</h2>
          </header>

          <div className="footer-website-nav">
            <ul>
              <li>
                <Link href="/style" title="Style and Fit Advice">
                 Style & Fit <span className="d-none d-lg-inline">Advice</span>
                </Link>
              </li>

              <li>
                <Link href="/faqs">
                 FAQS
                </Link>
              </li>

              <li>
                <Link href="/delivery">
                  Delivery
                </Link>
              </li>

              <li>
                <Link href="/exchange-returns">

                    <span className="d-none d-lg-inline">Exchange &</span> Returns

                </Link>
              </li>
            </ul>

            <ul>
              <li>
                <Link href="/aboutus" title="about us">
                 abous us
                </Link>
              </li>

              <li>
                <Link href="/careers">
                 careers
                </Link>
              </li>

              <li>
                <Link href="/affiliates">
                  affiliates
                </Link>
              </li>

              <li>
                <Link href="/advertising">

                   advertising

                </Link>
              </li>
            </ul>
          </div>

          <footer>
            <div className="terms d-lg-none">
              <Link href="/terms-and-conditions">
               Terms and Conditions
              </Link>

              <Link href="/privacy-cookies">
                Privacy and Cookies
              </Link>
            </div>
          </footer>
        </nav>

        <section className="footer-contact d-none d-lg-block">
          <ul>
            <li>
              <a href="tel:+440" title="Call us">
                Call us <br />
                +44 (0)10 2345 6789
              </a>
            </li>

            <li>
              <a href="mailto:" title="Email Us">
                Email Customer Care
              </a>
            </li>
          </ul>
        </section>
      </section>
    </footer>
  );
}
