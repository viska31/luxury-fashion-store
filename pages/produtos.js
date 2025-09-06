import Header from "../components/Header";
import ProductList from "../components/ProductList";
import BannerPromo from "../components/BannerPromo";
import Footer from "../components/Footer";

export default function Produtos() {
  return (
    <>
      <Header />
      <BannerPromo />
      <main style={{ padding: "2rem 0" }}>
        <h1 style={{ textAlign: "center", color: "#b89f6c", marginBottom: 32 }}>
          Catálogo Luxury Fashion
        </h1>
        <ProductList />
      </main>
      <Footer />
    </>
  );
}