<<<<<<< HEAD
import { cards } from "../constants/data.js";
import ProCard from "./ProCard";
import "./Projects.scss";
import { motion } from "framer-motion";

function Projects() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  return (
    <div>
      <motion.h1
        initial="hidden"
        whileInView="visible"
        variants={variants}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="projects-title">My Projects</h1>
      </motion.h1>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={variants}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="cards">
          {cards.map((card) => (
            <ProCard key={card.id} data={card} />
          ))}
        </div>
      </motion.div>
=======

import { cards } from "../constants/data.js";
import ProCard from "./ProCard";
import "./Projects.scss";

function Projects() {
  return (
    <div>
      <h1 className="projects-title">My Projects</h1>
      <div className="card">
        {cards.map((card) => (
          <ProCard key={card.id} data={card} />
        ))}
      </div>
>>>>>>> fe8d57ddfc8501ed2c69bd569accbc29d2e544ff
    </div>
  );
}
export default Projects;
<<<<<<< HEAD
=======

>>>>>>> fe8d57ddfc8501ed2c69bd569accbc29d2e544ff
