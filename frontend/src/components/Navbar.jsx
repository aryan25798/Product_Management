import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token on logout
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navLinks}>
        <Link to="/products" style={styles.link}>Products</Link>
        <Link to="/products/new" style={styles.link}>Add Product</Link>
      </div>
      <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: '10px 20px',
    color: '#fff',
  },
  navLinks: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
  },
  logoutButton: {
    backgroundColor: '#ff4d4d',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    cursor: 'pointer',
    borderRadius: '4px',
  },
};

export default Navbar;
