import React from 'react';

import logo from './assets/lun.png';

const About = () => {
  return (
    <div className="about-container">
      {/* Header with Logo - consistent with landing page */}
      <header className="about-header">
        <img src={logo} alt="Jet Wiki Logo" className="logo" />
        <h1>About Jet Wiki</h1>
      </header>

      {/* Main Content */}
      <main className="about-content">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>Jet Wiki is a collaborative project built by aviation enthusiasts, for aviation enthusiasts.</p>
          <p>Originally started by Zaid, it has grown into a community-driven knowledge base about military jets.</p>
        </section>

        <section className="join-section">
          <h2>Join Us</h2>
          <p>Anyone can contribute to Jet Wiki!</p>
          <p>Whether you're an aviation expert or just getting started, we welcome your knowledge and passion.</p>
          <button className="join-button">Get Involved</button>
        </section>
      </main>

      {/* Consistent Footer */}
      <footer className="about-footer">
        <p>© {new Date().getFullYear()} Jet Wiki. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;