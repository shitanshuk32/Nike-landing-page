import logo from "./assets/brand_logo.png";
import amazon from "./assets/amazon.png";
import flipkart from "./assets/flipkart.png";
import heroImg from "./assets/hero-image.png";

function App() {
  return (
    <>
      <nav className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>

        <button>login</button>
      </nav>

      <main className="hero container">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>

          <div className="hero-btn">
            <button>Shop Now </button>
            <button className="secondary-btn">Category</button>
          </div>

          <div className="shopping">
            <p>Also Available On</p>

            <div className="brand-icons">
              <img src={amazon} alt="amazon-logo" />
              <img src={flipkart} alt="flipkart-logo" />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="hero-image" />
        </div>
      </main>
    </>
  );
}

export default App;
