import React from "react";
import kopi from "../assets/img/kopi.jpg";
import { Link } from "react-scroll";

const About = props => {
  return (
    <div>
      {/* // About Head */}
      <section id={props.id} className="bg-dark text-center py-5 ">
        <div className="container">
          <h1 className="display-4 text-light">About Me</h1>
          <Link
            to="about-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="btn btn-outline-secondary"
          >
            Find Out
          </Link>
        </div>
      </section>

      {/* // About Section */}
      <section id="about-section" className="bg-light text-dark pt-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <h3>About Me</h3>
              <p>
                Hello everyone, my name is Iqbal Yudiar Syahputra but you can
                call me Iqbal. Right now I am studying for Bachelor Degree of
                computer science at Gadjah Mada University. And I am really
                interested become a Front End Developer. I am not a professional
                Front End Developer but I am excited to study about it everyday.
                Because a lot of practice make you perfect
              </p>
            </div>
            <div className="col-sm-4 d-none d-sm-block">
              <img src={kopi} alt="" className="img-fluid rounded-circle" />
            </div>
          </div>
          <div className="py-5">
            <h1 className="text-center">My Skill Progress</h1>
            <br />
            <h2>HTML5</h2>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped"
                style={{ width: "99%" }}
              >
                99%
              </div>
            </div>
            <br />
            <h2>CSS3</h2>
            <div className="progress">
              <div
                className="progress-bar bg-success progress-bar-striped"
                style={{ width: "99%" }}
              >
                99%
              </div>
            </div>
            <br />
            <h2>Javascript</h2>
            <div className="progress">
              <div
                className="progress-bar bg-warning progress-bar-striped"
                style={{ width: "70%" }}
              >
                70%
              </div>
            </div>
            <br />
            <h2>Bootsrap 4</h2>
            <div className="progress">
              <div
                className="progress-bar bg-info progress-bar-striped"
                style={{ width: "80%" }}
              >
                80%
              </div>
            </div>
            <br />
            <h2>SASS</h2>
            <div className="progress">
              <div
                className="progress-bar bg-danger progress-bar-striped"
                style={{ width: "70%" }}
              >
                70%
              </div>
            </div>
            <br />
            <h2>Vue.js</h2>
            <div className="progress">
              <div
                className="progress-bar bg-success progress-bar-striped"
                style={{ width: "85%" }}
              >
                85%
              </div>
            </div>
            <br />
            <h2>React.js</h2>
            <div className="progress">
              <div
                className="progress-bar bg-primary progress-bar-striped"
                style={{ width: "60%" }}
              >
                60%
              </div>
            </div>
            <br />
            <h2>Git</h2>
            <div className="progress">
              <div
                className="progress-bar bg-warning progress-bar-striped"
                style={{ width: "90%" }}
              >
                90%
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
