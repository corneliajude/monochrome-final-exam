import ProductPageHeaderPrimary from './ProductPageHeaderPrimary';
import ProductPageHeaderSecondary from './ProductPageHeaderSecondary';

export default function ProductPageHeader() {
  return (
    <header className="header">
      <ProductPageHeaderSecondary></ProductPageHeaderSecondary>

      <ProductPageHeaderPrimary></ProductPageHeaderPrimary>
    </header>
  );
}
