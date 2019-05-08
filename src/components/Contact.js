import React from "react";

const Contact = props => {
  return (
    <div>
      {/* // <!--CONTACT HEAD--> */}
      <section
        id={props.id}
        className="bg-secondary text-center py-5"
        style={{ color: "#fff" }}
      >
        <div className="container">
          <h1 className="display-4">Contact</h1>
        </div>
      </section>

      {/* // <!-- CONTACT SECTION --> */}
      <section id="contact-section" className="bg-light text-dark py-5">
        <div className="container">
          <h1>Contact Me</h1>
          <div className="row py-5">
            <div className="col-lg-4">
              <h4>Address</h4>
              <p>Sleman, Daerah Istimewa Yogyakarta, Indonesia</p>
            </div>
            <div className="col-lg-4">
              <h4>Email</h4>
              <p>iqbalyudiar123@gmail.com</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3 col-3">
              <a href="https://www.linkedin.com/in/iqbal-yudiar-syahputra-577091168">
                <i className="fab fa-linkedin fa-3x" />
              </a>
            </div>
            <div className="col-sm-3 col-3">
              <a href="https://www.instagram.com/iqbalyudiar/">
                <i className="fab fa-instagram fa-3x" />
              </a>
            </div>
            <div className="col-sm-3 col-3">
              <a href="https://github.com/iqbalyudiar">
                <i className="fab fa-github fa-3x" />{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
