function Hero() {
  return (
    <section className="hero">
      <nav>
        <h2>STEAKHOUSE</h2>

        <div>
          <a>Menu</a>
          <a>Story</a>
          <a>Reservation</a>
        </div>
      </nav>

      <div className="hero-content">
        <p>Premium Dining Experience</p>

        <h1>
          THE
          <br />
          STEAKHOUSE
        </h1>

        <button>
          Reserve Table
        </button>
      </div>

      <div className="scroll">
        Scroll
      </div>
    </section>
  );
}

export default Hero;