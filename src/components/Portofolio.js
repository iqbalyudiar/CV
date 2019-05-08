import React from "react";
import { Link } from "react-scroll";
import project1 from "../assets/img/project1.png";
import project2 from "../assets/img/project2.png";
import project3 from "../assets/img/project3.png";
import "./Portofolio.css";

class Portofolio extends React.Component {
  render() {
    const cardStyle = {
      backgroundColor: "#303030",
      color: "#fff"
    };
    return (
      <div>
        {/* <!-- PORTOFOLIO HEAD --> */}

        <section id={this.props.id} className="bg-dark text-center py-5">
          <div className="container">
            <h1 className="display-4 mt-5 text-light">My Portofolio</h1>
            <Link
              to="portofolio-section"
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

        {/* <!-- PORTOFOLIO SECTION --> */}
        <section
          id="portofolio-section"
          className="text-center pb-0"
          style={{ height: "100%" }}
        >
          <div className="dark-overlay">
            <div className="container">
              <h1 className="pt-5 text-light">My Portofolio</h1>
              <div className="row pt-5 pb-0">
                <div id="project-1" className="col-md-4 col-sm-6 col-12">
                  <div className="card">
                    <img className="card-img-top" src={project1} alt="" />
                    <div className="card-body" style={cardStyle}>
                      <h5 className="card-title">First Project</h5>
                      <p className="card-text">
                        This is my first project that i create as a assignment
                        form my college. I make it using html,css, javascript
                      </p>
                      <a
                        href="https://iqbalyudiar.github.io/Pweb/"
                        className="btn btn-dark"
                      >
                        See Detail
                      </a>
                    </div>
                  </div>
                </div>
                <div id="project-2" className="col-md-4 col-sm-6 col-12">
                  <div className="card">
                    <img className="card-img-top" src={project2} alt="" />
                    <div className="card-body" style={cardStyle}>
                      <h5 className="card-title">Second Project</h5>
                      <p className="card-text">
                        This is my second project I'm make a web cv using html
                        csss, and javascript
                      </p>
                      <a
                        href="https://iqbalyudiar.com"
                        className="btn btn-dark"
                      >
                        See Detail
                      </a>
                    </div>
                  </div>
                </div>
                <div id="project-3" className="col-md-4 col-sm-6 col-12">
                  <div className="card">
                    <img className="card-img-top" src={project3} alt="" />
                    <div className="card-body" style={cardStyle}>
                      <h5 className="card-title">Third Project</h5>
                      <p className="card-text">
                        This is my third project I make it using vue.js. This
                        web contain landing page and admin dashboard. Landing
                        page is a static web page. Admin dashboard contain api
                        request to show user and order
                      </p>
                      <a
                        href="https://cleanio-dev.herokuapp.com"
                        className="btn btn-dark"
                      >
                        See Detail
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Portofolio;
