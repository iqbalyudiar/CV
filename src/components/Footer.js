import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { year: new Date().getFullYear() };
  }

  //   yearFunction = year => {
  //     let getYear = new Date().getFullYear();
  //     this.setState({ year: getYear });
  //   };

  //   componentDidMount() {
  //     yearFunction = () => {
  //       let getYear = new Date().getFullYear();
  //       this.setState({ year: getYear });
  //     };
  //   }

  render() {
    return (
      <footer id="main-footer" className="bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col text-center py-4">
              <h3>Iqbal Yudiar S</h3>
              <p>Copyright &copy; {this.state.year}</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
