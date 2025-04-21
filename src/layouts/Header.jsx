import "./Header.scss";
import img from "../assets/header.jpg";
<<<<<<< HEAD
import { motion } from "framer-motion";
import pdfFile from "../assets/MobinaKarimi.pdf";

function Header() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const downloadHandler = () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "MobinaKarimi.pdf";
    link.click();
  };

  return (
    <header className="header" id="header">
      <div className="overlay"></div>
      <img src={img} alt="Header Background" />
      <nav className="navbar">
        <ul className="navList">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">.Contact&#123;&#125;</a>
          </li>
        </ul>
        <button onClick={downloadHandler}>Download Resume</button>
      </nav>
      <div className="text-content">
        <h1>
          <motion.h1 initial="hidden" whileInView="visible" variants={variants}>
            Hi, I'm <span>Mobina Karimi</span>
          </motion.h1>
        </h1>
        <p>
          <motion.p initial="hidden" whileInView="visible" variants={variants}>
            Transforming ideas into beautiful web experiences.
          </motion.p>
        </p>
      </div>
    </header>
  );
=======
import pdfFile from "../assets/MobinaKarimi.pdf";

function Header() {
    const downloadHandler = () => {
        const link = document.createElement("a");
        link.href = pdfFile;
        link.download = "MobinaKarimi.pdf";
        link.click();
    };

    return (
        <header className="header" id="header">
            <div className="overlay"></div>
            <img src={img} alt="Header Background" />
            <nav className="navbar">
                <ul className="navList">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">.Contact&#123;&#125;</a></li>
                </ul>
                <button onClick={downloadHandler}>Download Resume</button>
            </nav>
            <div className="text-content">
                <h1>Hi, I'm <span>Mobina Karimi</span></h1>
                <p>Transforming ideas into beautiful web experiences.</p>
            </div>
        </header>
    );
>>>>>>> fe8d57ddfc8501ed2c69bd569accbc29d2e544ff
}

export default Header;
