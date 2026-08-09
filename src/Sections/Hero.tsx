import Navbar from "../components/Navbar";

function Hero() {
  return (
    <section className="hero-wrapper">

      <div className="hero-sticky">

        <Navbar />

        <div className="hero-content">

          <p className="subtitle">
            Premium Wood Fired Dining
          </p>

          <h1>
            STEAKHOUSE
          </h1>

          <button>
            Reserve Table
          </button>

        </div>

        <div className="scroll">
          Scroll
        </div>

      </div>

    </section>
  );
}

export default Hero;