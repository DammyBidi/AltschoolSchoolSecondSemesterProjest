import React from "react";
import ErrorImage from "./assets/errorimage.svg";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

class ErrorBoundaryTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="errorbody">
          <NavBar />
          <div className="bodyerror">
            <div className="errorimg">
              <img src={ErrorImage} alt="errorimage" srcset="" />
            </div>
            <div className="errordetail">
              <h2>Oh no! Something went wrong.</h2>
              <p>
                We're sorry for the inconvenience. It seems like there's been a
                technical glitch. Our team has been notified and is working to
                resolve the issue.
              </p>
              <h3>Here are a few things you can try:</h3>
              <ul>
                <li>
                  <button onClick={() => window.location.reload()}>
                    Refresh the Page
                  </button>
                </li>
                <li>
                  <button onClick={() => window.history.back()}>
                    Go back to the home page
                  </button>
                </li>
                <li>
                  {" "}
                  <button>
                  <a className="support" href="https://wa.me/2349081527794?text=Hey%20fineboy%20what's%20up%F0%9F%A4%97">
                    Contact Support
                  </a></button>
                </li>
              </ul>
              <p>
                If the problem persists, please feel free to reach out to our
                support team at{" "}
                <a href="mailto:bidigideondamilola@gmail.com">
                  bidigideondamilola@gmail.com
                </a>{" "}
                for further assistance.
              </p>
            </div>
          </div>
          <Footer />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundaryTest;
