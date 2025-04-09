import React, { useState } from 'react';
import API from '../../utils/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post('/auth/login', formData);
      localStorage.setItem('token', data.accessToken);
      navigate('/products');
    } catch (err) {
      alert('Login failed! Please check your credentials.');
    }
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(to bottom right, #007bff, #6c757d)',
      fontFamily: 'Poppins, sans-serif',
    },
    form: {
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      width: '100%',
      maxWidth: '400px',
      textAlign: 'center',
    },
    title: {
      fontSize: '1.8rem',
      marginBottom: '20px',
      color: '#444',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '8px',
      border: '1px solid #ddd',
      fontSize: '1rem',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    button: {
      width: '100%',
      padding: '10px',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1rem',
      backgroundColor: '#007bff',
      color: 'white',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    footer: {
      marginTop: '15px',
      fontSize: '0.9rem',
      color: '#666',
    },
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Welcome Back!</h2>
        <input
          style={styles.input}
          name="email"
          type="email"
          placeholder="Enter your email"
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          name="password"
          type="password"
          placeholder="Enter your password"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Login
        </button>
        <div style={styles.footer}>
          Don't have an account? <a href="/signup" style={{ color: '#007bff' }}>Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
