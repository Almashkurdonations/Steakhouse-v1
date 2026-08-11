function Hero() {
  return (
    <section className="hero-wrapper">

      <div className="hero-sticky">

        <video
          className="hero-video"
          src="/videos/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="overlay" />


        <nav className="navbar">

          <h2>STEAKHOUSE</h2>

          <div className="nav-links">
            <a>Menu</a>
            <a>Story</a>
            <a>Reserve</a>
          </div>

        </nav>


        <div className="hero-content">

          <p>
            Premium Dining Experience
          </p>

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


      </div>

    </section>
  );
}

export default Hero;