import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './styles/Landingpage.css'; // Import your CSS file
import About from './About';
import ImageSlider from './ImageSlider';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome styles

function LandingPage() {
  return (
    <div className="">
      <ImageSlider />
      
      <main>
        <h1 className="landing-title">Connecting Lives at Your Fingertips</h1> {/* Main title */}
        <p className="landing-subtitle">Get exclusive offers on the purchase of any plans</p> {/* Offer text */}

        <h2 className="section-title">Buy a new connection</h2> {/* Section title */}

        <div className="plans-container">
          {/* Prepaid SIM Icon */}
          <div className="plan-icon">
            <Link to="/prepaid" className="icon-link">
              <i className="fas fa-sim-card fa-5x"></i> {/* FontAwesome SIM icon */}
              <p className="plan-label">PREPAID</p> {/* Prepaid Label */}
            </Link>
          </div>

          {/* Postpaid SIM Icon */}
          <div className="plan-icon">
            <Link to="/postpaid" className="icon-link">
              <i className="fas fa-sim-card fa-5x"></i> {/* FontAwesome SIM icon */}
              <p className="plan-label">POSTPAID</p> {/* Postpaid Label */}
            </Link>
          </div>
        </div>

        {/* About Section */}
        <About />
      </main>
    </div>
  );
}

export default LandingPage;
