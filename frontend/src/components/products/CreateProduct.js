import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../utils/api';

const CreateProduct = () => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    rating: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('/products', productData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Product created successfully!');
      navigate('/products');
    } catch (error) {
      console.error(error);
      alert('Failed to create product.');
    }
  };

  const styles = {
    container: {
      maxWidth: '600px',
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
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Create Product</h2>
      <form
        onSubmit={handleSubmit}
        style={styles.form}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          style={styles.input}
          onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
          onBlur={(e) => (e.target.style.borderColor = '#ccc')}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleChange}
          style={styles.input}
          onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
          onBlur={(e) => (e.target.style.borderColor = '#ccc')}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          onChange={handleChange}
          style={styles.input}
          onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
          onBlur={(e) => (e.target.style.borderColor = '#ccc')}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          style={styles.input}
          onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
          onBlur={(e) => (e.target.style.borderColor = '#ccc')}
          required
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating (1-5)"
          max="5"
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
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
