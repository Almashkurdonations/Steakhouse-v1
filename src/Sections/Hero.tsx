import { motion } from "framer-motion";
import "../Styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-background"></div>

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Premium Dining Experience
        </motion.p>


        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          STEAKHOUSE
        </motion.h1>


        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Wood Fired • Abuja
        </motion.span>


        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          Reserve A Table
        </motion.button>

      </div>


      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2
        }}
      >
        Scroll
      </motion.div>

    </section>
  );
};

export default Hero;