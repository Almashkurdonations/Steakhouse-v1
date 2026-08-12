import { useEffect, useRef } from "react";


function Hero() {

  const videoRef = useRef<HTMLVideoElement>(null);


  useEffect(() => {

    const video = videoRef.current;

    if (!video) return;


    const handleScroll = () => {

      const section = document.querySelector(
        ".hero-wrapper"
      ) as HTMLElement;


      if (!section) return;


      const scrollTop = window.scrollY;

      const sectionTop = section.offsetTop;

      const sectionHeight = section.offsetHeight;


      const scrollProgress =
        (scrollTop - sectionTop) /
        (sectionHeight - window.innerHeight);


      const clampedProgress = Math.min(
        Math.max(scrollProgress, 0),
        1
      );


      if (video.duration) {

        video.currentTime =
          clampedProgress * video.duration;

      }

    };


    video.pause();


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };


  }, []);



  return (

    <section className="hero-wrapper">


      <div className="hero-sticky">


    <video
  src="/videos/hero-video.mp4"
  autoPlay
  muted
  loop
  playsInline
  style={{
    width:"500px",
    height:"300px"
  }}
/>

        <div className="overlay" />


        <nav className="navbar">

          <h2>
            STEAKHOUSE
          </h2>


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