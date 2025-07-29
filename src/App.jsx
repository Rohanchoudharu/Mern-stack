import React from 'react';
import './App.css'; 
import Navbar from './components/Navbar';

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
        <img src="../component/airport.png" 
        alt="" 
        height={250}
        width={250}
        />
      </div>
      <div className="service-item">
        <h3>City Tours</h3>
        <p>Explore the city with our knowledgeable drivers.</p>
        <img src="../component/city.png" alt="" 
        height={150}
        width={150}/>
      </div>
      <div className="service-item">
        <h3>Corporate Travel</h3>
        <p>Professional transportation for your business needs.</p>
        <img src="../component/skyscraper.png" alt="" />
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="about-section" id="about">
    <h2 className="about-title">About Us</h2>
    <div className="about-content">
      <div className="about-image-container">
        <img
        src="https://cdn.pixabay.com/photo/2021/12/24/16/49/work-6891501_1280.jpg"
        alt=" Our team"
        className="about-image"
        width={600}
        height={400}
        />
        </div>
        <div className="about-text">
          <h4> SAFETY IS OUR TOP PRIORITY</h4>
          {/* <p>The well being of our customer is greater then anything else</p> */}
          </div>
          </div>
          </section>
);
 const Contact = () => (
  <section className="contact-section" id="contact">
   <h2 className="contact-title">Contact Us</h2>
   <div className="contact-content">
    <div className="contact-info">
      <h3>Get in Touch</h3>
      <p>Address: 123 Main St, Anytown, USA</p>
      <p>Phone: 7845895658</p>
      <p>Email: [paradoy@yahoo.com](mailto:paradoy@yahoo.com)</p>
      </div>
    </div>
  </section>
  );


const LoginModal = ({ isOpen, onClose }) => {
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
        </form>
      </div>
    </div>
  );
};

const App = () => {
  const [loginOpen, setLoginOpen] = React.useState(false);

  const openLogin = () => setLoginOpen(true);
  const closeLogin = () => setLoginOpen(false);

  return (
    <>
      <Navbar onLoginClick={openLogin} />
      <main className="main-content">
        <Home />
        <Services />
        <About />
        <Contact />
      </main>
      <LoginModal isOpen={loginOpen} onClose={closeLogin} />
    </>
  );
};

export default App;

