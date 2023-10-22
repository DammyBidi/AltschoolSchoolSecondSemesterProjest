import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div className="home">
      <NavBar />
      <div>
        <div className="homepage">
          <h1 className="hi">
            Hi there!
            <img
              src="https://user-images.githubusercontent.com/1303154/88677602-1635ba80-d120-11ea-84d8-d263ba5fc3c0.gif "
              alt="gif"
            />
          </h1>
          <h1 className="welcome">Welcome to the Counter App</h1>
          <p className="description">
            This interactive web application allows you to perform various
            operations on a customizable counter. You can increment, decrement,
            reset to a specific value, and even set a custom value with ease.
            The app provides a user-friendly interface for seamless interaction
          </p>
          <section className="features">
            <h2>Explore the features:</h2>
            <ul>
              <li>Increment: Increase the counter value by one.</li>
              <li>Decrement: Decrease the counter value by one.</li>
              <li>Reset: Reset the counter to its initial value.</li>
              <li>
                Set Value: Input a custom number and set it as the new counter
                value.
              </li>
            </ul>
          </section>
          <section className="additional">
            <p>
              Additionally, the app includes error boundary testing to ensure a
              smooth user experience.{" "}
              <span>
                Click{" "}
                <Link to="/error">
                  <button className="homepagebtn">Here</button>
                </Link>{" "}
                To test the error boundary.
              </span>
            </p>
            <p>
              Typing a wrong URL will redirect you to the{" "}
              <Link className="link" to="*">404 page</Link> .
            </p>
          </section>
          <p className="click">Click the button below to start counting</p>
          <Link to="/counter">
            <button className="homepagebtn">Start</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
