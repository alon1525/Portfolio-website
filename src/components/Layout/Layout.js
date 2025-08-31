import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navigation />
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Alon Krumer. All rights reserved.</p>
          <p>Built with React, JavaScript, and passion for great code.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
