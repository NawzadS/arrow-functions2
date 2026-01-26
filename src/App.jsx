import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header storeName="ComponentCorner" />

      <Hero
        title="Welcome to ComponentCorner"
        subtitle="Simple products, clean layout, and reusable React components."
        ctaText="Shop Now"
        imageUrl="https://placehold.co/1200x400/111827/ffffff?text=ComponentCorner"
      />

      <main className="container" id="products">
        <h2 className="sectionTitle">Featured Products</h2>

        <div className="grid">
          <ProductCard
            name="Wireless Headphones"
            price="$79.99"
            image="https://placehold.co/600x400"
            description="Comfortable sound, long battery life, and clean design."
          />

          <ProductCard
            name="Mechanical Keyboard"
            price="$99.99"
            image="https://placehold.co/600x400"
            description="Tactile switches, smooth typing, and great for productivity."
          />

          <ProductCard
            name="Smart Desk Lamp"
            price="$39.99"
            image="https://placehold.co/600x400"
            description="Adjustable brightness and a clean modern look for your setup."
          />
        </div>
      </main>

      <section className="about" id="about">
        <div className="container">
          <h2 className="sectionTitle">About</h2>
          <p className="aboutText">
            ComponentCorner is my e-commerce starter project built with React components.
            Each product uses the same ProductCard layout, just with different props.
          </p>
        </div>
      </section>

      <Footer
        storeName="ComponentCorner"
        email="support@componentcorner.com"
        phone="(555) 123-4567"
      />
    </div>
  );
}

export default App;
