import coffeeLogo from "./assets/CoffeeLogo-removebg-preview 1.png";
import cappuccinoImg from "./assets/Cappuccino 1.png";
import espressoImg from "./assets/Expresso img.png";
import latteImg from "./assets/Latte 1.png";
import coldBrewImg from "./assets/Gold Brew 1.png";
import "./CoffeePage.css";

function CoffeePage() {

  return (
    <>
      <header>
        <div className="container nav">
          <div className="brand">
            <img src={coffeeLogo} alt="Coffee Logo" className="brand-logo" />
          </div>
          <button
            className="menu-toggle"
            aria-label="Toggle Menu"
            onClick={() => {
              document.querySelector(".nav ul").classList.toggle("open");
            }}
          >
            ☰
          </button>
          <ul>
            <li>
              <a className="active" href="#home">
                Home
              </a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="container">
            <h1>Where Every Cup Feels Like Home</h1>
            <div className="cta">
              <a href="#menu" className="btn btn-primary">
                Order Now
              </a>
              <a href="#contact" className="btn btn-ghost">
                Book a Table
              </a>
            </div>
          </div>
        </section>

        <section id="menu" className="section">
          <div className="container">
            <p className="sub" aria-hidden="true">
              Our Pricing
            </p>
            <h2>Savor Every Moment</h2>
            <div className="heading-actions">
              <span className="chip">Menu</span>
            </div>

            <div className="grid">
              {/* Row 1 */}
              <article className="menu-card">
                <img
                  alt="Espresso"
                  src={espressoImg}
                />
                <div>
                  <h3>Espresso</h3>
                  <div className="price">₹120</div>
                  <div className="card-actions">
                    <a href="#" className="btn btn-primary btn-small">
                      Order Now
                    </a>
                  </div>
                </div>
              </article>
              <article className="menu-card">
                <img
                  alt="Cappuccino"
                  src={cappuccinoImg}
                />
                <div>
                  <h3>Cappuccino</h3>
                  <div className="price">₹180</div>
                  <div className="card-actions">
                    <a href="#" className="btn btn-primary btn-small">
                      Order Now
                    </a>
                  </div>
                </div>
              </article>

              {/* Row 2 */}
              <article className="menu-card">
                <img
                  alt="Latte"
                  src={latteImg}
                />
                <div>
                  <h3>Latte</h3>
                  <div className="price">₹160</div>
                  <div className="card-actions">
                    <a href="#" className="btn btn-primary btn-small">
                      Order Now
                    </a>
                  </div>
                </div>
              </article>
              <article className="menu-card">
                <img
                  alt="Cold Brew"
                  src={coldBrewImg}
                />
                <div>
                  <h3>Cold Brew</h3>
                  <div className="price">₹200</div>
                  <div className="card-actions">
                    <a href="#" className="btn btn-primary btn-small">
                      Order Now
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <footer id="contact" className="section">
          <div className="container contact-grid">
            <div className="contact-card">
              <h4>Contact Us</h4>
              <div>+91 91234 56789</div>
              <div className="tiny">hello@coffeehouse.in</div>
            </div>
            <div className="contact-card">
              <h4>Address</h4>
              <div>MG Road, 2nd Block</div>
              <div className="tiny">Bengaluru, Karnataka 560001</div>
            </div>
            <div className="contact-card">
              <h4>Opening Hours</h4>
              <div>Everyday 08:30 – 21:30</div>
              <div className="tiny">Kitchen closes 21:00</div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default CoffeePage;
