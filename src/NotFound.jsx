import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import image404 from "./assets/image404.png"


const NotFound = () => {
  return (
    <div className='Notfound_body'>
      <Navbar />
      <div className='image404'>
        <img src={image404} alt=""  />
      </div>
      <div className="back"> <p><Link className="link" to="/">Homepage</Link></p></div>
      <Footer />

    </div>
  );
};

export default NotFound;
