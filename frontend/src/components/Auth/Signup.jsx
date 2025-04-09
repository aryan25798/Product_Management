import React, { useState } from 'react';
import API from '../../utils/api';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/signup', formData);
      alert('Signup successful! You can now login.');
      navigate('/login');
    } catch (err) {
      alert('Signup failed! Please try again.');
    }
  };

  const styles = {
    container: {
      maxWidth: '400px',
      margin: '50px auto',
      padding: '30px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      textAlign: 'center',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    input: {
      padding: '10px 15px',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      transition: 'border-color 0.3s',
    },
    inputFocus: {
      borderColor: '#007bff',
    },
    button: {
      padding: '10px 15px',
      fontSize: '16px',
      backgroundColor: '#28a745',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#218838',
    },
    message: {
      fontSize: '14px',
      color: '#555',
      marginTop: '10px',
    },
    link: {
      color: '#007bff',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Signup</h2>
      <form
        onSubmit={handleSubmit}
        style={styles.form}
      >
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          style={styles.input}
          onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
          onBlur={(e) => (e.target.style.borderColor = '#ccc')}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          style={styles.input}
          onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
          onBlur={(e) => (e.target.style.borderColor = '#ccc')}
          required
        />
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Signup
        </button>
      </form>
      <p style={styles.message}>
        Already have an account?{' '}
        <a href="/login" style={styles.link}>
          Login here
        </a>
      </p>
    </div>
  );
};

export default Signup;
