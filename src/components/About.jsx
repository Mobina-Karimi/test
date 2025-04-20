import img from "../assets/m.jpg";
import "../components/About.scss";
import CodeEditor from "./CodeEditor";

function About() {
  return (
    <div id="about">
      <h3 className="about-title">Who I Am</h3>

      <div className="about">
        <main>
          <div className="container">
            <div className="headerContainer">
              <span className="redCircle"></span>
              <span className="yellowCircle"></span>
              <span className="greenCircle"></span>
            </div>
            <CodeEditor />
          </div>
        </main>

        <aside>
          <img src={img} alt="" className="MyImage" />
        </aside>
      </div>
    </div>
  );
}

export default About;
