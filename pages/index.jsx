import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CatalogPreview from '../components/homepage/CatalogPreviews';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Monochrome Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" type="image/png" href="/images/favicon/monochrome-android-chrome.png"/>
      </Head>

      <Header></Header>

      <main className="content">
        <section className="content-main">
          <CatalogPreview></CatalogPreview>
        </section>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
