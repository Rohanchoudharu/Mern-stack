import React from 'react';
import './App.css'; // Updated CSS file with simplified classes
import Navbar from './components/Navbar';

const Home = () => (
  <section className="home-section" id="home">
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">
          Welcome to Dark Devil Team
        </h1>
        <p className="home-description">
        </p>
        <a
          href="#contact"
          className="home-button"
        >
          Get in Touch
        </a>
      </div>
      <div className="home-image-container">
        <img
          src="https://cdn.pixabay.com/photo/2025/06/09/16/27/animal-9650392_1280.jpg"
          alt="The wolf in the forest"
          className="home-image"
          width={600}
          height={400}
        />
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
      </main>
      <LoginModal isOpen={loginOpen} onClose={closeLogin} />
    </>
  );
};

export default App;
