import React from 'react';
import './App.css'; 
import Navbar from './components/Navbar';
import { FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';

const Home = () => (
  <section className="home-section" id="home">
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">
          GET A RIDE,LOW PRICE
        </h1>
        <p className="home-description">
        </p>
        <a
          href="#contact"
          className="home-button"
        >
          BOOK A RIDE
        </a>
      </div>
      <div className="home-image-container">
        <img
          src="https://cdn.pixabay.com/photo/2016/12/26/13/28/taxi-1932107_1280.jpg"
          alt="The drive is safe"
          className="home-image"
          width={600}
          height={400}
        />
      </div>
    </div>
  </section>
);

const Services = () => (
  <section className="services-section" id="services">
    <h2 className="services-title">Our Services</h2>
    <div className="services-list">
      <div className="service-item">
        <h3>Airport Transfers</h3>
        <p>Reliable and comfortable rides to and from the airport.</p>
        <img src="../component/By my car-bro.png" 
        alt="" 
        height={250}
        width={250}
        />
      </div>
      <div className="service-item">
        <h3>City Tours</h3>
        <p>Explore the city with our knowledgeable drivers.</p>
        <img src="../component/City driver-pana.png" alt="" 
        height={150}
        width={150}/>
      </div>
      <div className="service-item">
        <h3>Corporate Travel</h3>
        <p>Professional transportation for your business needs.</p>
        <img src="../component/Business decisions-cuate.png" alt="" />
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="about-section" id="about">
    <div className="about-container">
      <h2 className="about-title">About PARADOY</h2>
      
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-content">
          <h3 className="about-subtitle">Your Trusted Ride Partner</h3>
          <p className="about-description">
            At PARADOY, we're revolutionizing urban transportation by providing safe, reliable, and affordable rides. 
            Since our inception, we've been committed to connecting people with their destinations while prioritizing 
            safety, comfort, and exceptional customer service.
          </p>
        </div>
        <div className="about-hero-image">
          <img
            src="https://cdn.pixabay.com/photo/2021/12/24/16/49/work-6891501_1280.jpg"
            alt="PARADOY team working together"
            className="about-main-image"
          />
        </div>
      </div>

      {/* Mission & Values */}
      <div className="about-mission">
        <div className="mission-card priority-card">
          <div className="mission-icon">🛡️</div>
          <h4>SAFETY FIRST</h4>
          <p>Your safety is our top priority. Every driver is thoroughly vetted, and all vehicles undergo regular safety inspections.</p>
        </div>
        <div className="mission-card">
          <div className="mission-icon">⚡</div>
          <h4>RELIABLE SERVICE</h4>
          <p>Count on us for punctual, dependable transportation whenever you need it, 24/7.</p>
        </div>
        <div className="mission-card">
          <div className="mission-icon">💰</div>
          <h4>AFFORDABLE RATES</h4>
          <p>Quality transportation shouldn't break the bank. We offer competitive pricing for all our services.</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="about-stats">
        <h3 className="stats-title">Our Impact</h3>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">10,000+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50,000+</div>
            <div className="stat-label">Rides Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100+</div>
            <div className="stat-label">Professional Drivers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.9★</div>
            <div className="stat-label">Average Rating</div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="about-features">
        <h3 className="features-title">Why Choose PARADOY?</h3>
        <div className="features-grid">
          <div className="feature-item">
            <img src="../component/City driver-pana.png" alt="Professional drivers" className="feature-image" />
            <h4>Professional Drivers</h4>
            <p>Our experienced drivers know the city inside out and are committed to providing excellent service.</p>
          </div>
          <div className="feature-item">
            <img src="../component/By my car-bro.png" alt="Modern fleet" className="feature-image" />
            <h4>Modern Fleet</h4>
            <p>Well-maintained, comfortable vehicles equipped with modern amenities for your convenience.</p>
          </div>
          <div className="feature-item">
            <img src="../component/Business decisions-cuate.png" alt="Smart technology" className="feature-image" />
            <h4>Smart Technology</h4>
            <p>Easy-to-use app with real-time tracking, secure payments, and instant booking capabilities.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
 
    

const Community = () => (
  <section className="community-section" id="community">
    <h2 className="community-title">Our Community</h2>
    
    
    <div className="community-content">
      <div className="testimonials-section">
        <h3 className="section-subtitle">What Our Customers Say</h3>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"Excellent service! The driver was professional and the ride was smooth. Highly recommend PARADOY for reliable transportation."</p>
              <div className="testimonial-author">
                <strong>Sarah Johnson</strong>
                <span>Regular Customer</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"I use PARADOY for my daily commute. Always on time, clean vehicles, and friendly drivers. Great value for money!"</p>
              <div className="testimonial-author">
                <strong>Mike Chen</strong>
                <span>Business Traveler</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"Safe, reliable, and affordable. PARADOY has become my go-to transportation service. The app is easy to use too!"</p>
              <div className="testimonial-author">
                <strong>Emily Rodriguez</strong>
                <span>Student</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="driver-spotlight-section">
        <h3 className="section-subtitle">Driver Spotlight</h3>
        <div className="driver-spotlight-grid">
          <div className="driver-card">
            <div className="driver-image">
              <img src="../component/City driver-pana.png" alt="Driver of the Month" />
            </div>
            <div className="driver-info">
              <h4>John Martinez</h4>
              <p className="driver-title">Driver of the Month</p>
              <p className="driver-stats">⭐ 4.9 Rating • 500+ Rides</p>
              <p className="driver-description">"I love helping people get where they need to go safely and comfortably. Customer satisfaction is my priority!"</p>
            </div>
          </div>
        </div>
      </div>

      {/* Community Features */}
      <div className="community-features-section">
        <h3 className="section-subtitle">Community Features</h3>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚗</div>
            <h4>Ride Sharing Tips</h4>
            <p>Learn from experienced riders and drivers about the best practices for safe and comfortable rides.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌟</div>
            <h4>Loyalty Rewards</h4>
            <p>Earn points with every ride and unlock exclusive discounts and premium services.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h4>Community Forum</h4>
            <p>Connect with other riders, share experiences, and get travel recommendations from locals.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎉</div>
            <h4>Events & News</h4>
            <p>Stay updated with community events, service updates, and special promotions in your area.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);


const Contact = () => (
  <section className="contact-section" id="contact">
    <div className="contact-container">
      {/* Brand Section */}
      <div className="contact-brand">
        <h2 className="brand-title">PARADOY</h2>
        <p className="brand-subtitle">Visit Help Center</p>
      </div>

      {/* Footer Links Grid */}
      <div className="contact-grid">
        {/* Company Column */}
        <div className="contact-column">
          <h3 className="column-title">Company</h3>
          <ul className="contact-links">
            <li><a href="#about">About us</a></li>
            <li><a href="#services">Our offerings</a></li>
            <li><a href="#community">Newsroom</a></li>
            <li><a href="#investors">Investors</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </div>

        {/* Products Column */}
        <div className="contact-column">
          <h3 className="column-title">Products</h3>
          <ul className="contact-links">
            <li><a href="#ride">Ride</a></li>
            <li><a href="#drive">Drive</a></li>
            <li><a href="#eat">Eat</a></li>
            <li><a href="#business">PARADOY for Business</a></li>
            <li><a href="#freight">PARADOY Freight</a></li>
            <li><a href="#gift">Gift cards</a></li>
          </ul>
        </div>

        {/* Global Citizenship Column */}
        <div className="contact-column">
          <h3 className="column-title">Global citizenship</h3>
          <ul className="contact-links">
            <li><a href="#safety">Safety</a></li>
            <li><a href="#sustainability">Sustainability</a></li>
          </ul>
        </div>

        {/* Travel Column */}
        <div className="contact-column">
          <h3 className="column-title">Travel</h3>
          <ul className="contact-links">
            <li><a href="#reserve">Reserve</a></li>
            <li><a href="#airports">Airports</a></li>
            <li><a href="#cities">Cities</a></li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="contact-social">
        <div className="social-icons">
          <a href="https://instagram.com/paradoy" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
          <a href="tel:7048949218" className="social-icon">
            <FaPhone />
          </a>
          <a href="mailto:paradoy@yahoo.com" className="social-icon">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="contact-bottom">
        <div className="contact-info-row">
          <span>📍 123 xyz nagar, noida</span>
          <span>📞 7048949218</span>
          <span>✉️ paradoy@yahoo.com</span>
        </div>
        <div className="contact-copyright">
          <p>&copy; 2024 PARADOY Technologies Inc.</p>
        </div>
      </div>
    </div>
  </section>
);


const LoginModal = ({ isOpen, onClose, onSignupClick }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in with\nEmail: ${email}\nPassword: ${password}`);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button
          onClick={onClose}
          className="modal-close"
          aria-label="Close login modal"
        >
          <i className="fas fa-times fa-lg"></i>
        </button>
        <h2 className="modal-title">Login</h2>
        <form onSubmit={handleSubmit} className="modal-form">
          <div>
            <label htmlFor="email" className="form-label">Email</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="form-label">Password</label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              placeholder="Your password"
            />
          </div>
          <button
            type="submit"
            className="form-button"
          >
            Log In
          </button>
          <div className="form-footer">
            <p>Don't have an account?</p>
            <button
              type="button"
              onClick={onSignupClick}
              className="form-link-button"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const SignupModal = ({ isOpen, onClose }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Signing up with\nName: ${name}\nEmail: ${email}`);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button
          onClick={onClose}
          className="modal-close"
          aria-label="Close signup modal"
        >
          &times;
        </button>
        <h2 className="modal-title">Sign Up</h2>
        <form onSubmit={handleSubmit} className="modal-form">
          <div>
            <label htmlFor="name" className="form-label">Name</label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="form-label">Email</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="form-label">Password</label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              placeholder="Your password"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-input"
              placeholder="Confirm your password"
            />
          </div>
          <button
            type="submit"
            className="form-button"
          >
            Sign Up
          </button>
          <div className="form-footer">
            <p>Already have an account?</p>
            <button
              type="button"
              onClick={onClose}
              className="form-link-button"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const App = () => {
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [signupOpen, setSignupOpen] = React.useState(false);

  const openLogin = () => setLoginOpen(true);
  const closeLogin = () => setLoginOpen(false);
  const openSignup = () => setSignupOpen(true);
  const closeSignup = () => setSignupOpen(false);

  return (
    <>
      <Navbar onLoginClick={openLogin} />
      <main className="main-content">
        <Home />
        <Services />
        <About />
        <Community />
        <Contact />
      </main>
      <LoginModal 
        isOpen={loginOpen} 
        onClose={closeLogin} 
        onSignupClick={openSignup} 
      />
      <SignupModal 
        isOpen={signupOpen} 
        onClose={closeSignup} 
      />
    </>
  );
};

export default App;
