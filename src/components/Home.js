import React from "react";
import myphoto from "../assets/img/myphoto.jpg";

const Home = props => {
  return (
    <header id={props.id}>
      <div className="dark-overlay">
        <div className="home-inner container">
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <img
                src={myphoto}
                alt=""
                className="img-fluid mb-5 rounded-circle"
              />
            </div>
            <div className="col-md-8 col-sm-8 d-none d-sm-block pl-5 text-light">
              <h3>Hello Everyone Welcome to My Page</h3>
              <h4>
                My name is Iqbal Yudiar Syahputra and I am a Front End Developer
              </h4>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
