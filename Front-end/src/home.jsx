import React from 'react';



const Home = () => {
  return (
    <div className="landing-container">
      {}
      <header className="landing-header">
      
        <h1>JET WIKI</h1>
        <p className="tagline">The ultimate resource for military aviation enthusiasts</p>
      </header>

      {}
      <main className="hero-section">
        <div className="hero-content">
          <h2>All about Jets</h2>
          <p>Discover detailed information about fighter jets from around the globe along with operations!</p>
        
        </div>
      </main>

      {}
      <footer className="landing-footer">
        <p>© {new Date().getFullYear()} Jet Wiki. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;