import React from 'react';
import { Link } from 'react-router-dom';
import './styles/LoggedInLoginpage.css';
import PlanStatus from './PlanStatus';
import ImageSlider from './ImageSlider';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome styles

function LoggedInLandingPage() {
  return (
    <div className="">
      <main>
        <ImageSlider />
        <br/>
        <h1>Welcome Back!</h1>
        <p className='para'>Continue exploring our exclusive offers and plans.</p>
        <PlanStatus />
        <br />
        <h2>Featured Plans</h2>
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
      </main>
    </div>
  );
}

export default LoggedInLandingPage;
