import React, { useEffect, useState } from 'react';
import API from '../../utils/api';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    minPrice: '',
    maxPrice: '',
    minRating: '',
  });

  const fetchProducts = async () => {
    try {
      const { data } = await API.get('/products', { params: filters });
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const styles = {
    container: {
      fontFamily: 'Poppins, sans-serif',
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
      backgroundColor: '#f7f9fc',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
    title: {
      textAlign: 'center',
      fontSize: '2.5rem',
      color: '#444',
      marginBottom: '20px',
    },
    filters: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      marginBottom: '20px',
    },
    filterInput: {
      padding: '10px',
      width: '150px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px',
      backgroundColor: '#fff',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
    th: {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '10px',
    },
    td: {
      padding: '10px',
      borderBottom: '1px solid #eee',
    },
    actionButton: {
      padding: '8px 12px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '0.9rem',
      marginRight: '5px',
    },
    editButton: {
      backgroundColor: '#28a745',
      color: 'white',
    },
    deleteButton: {
      backgroundColor: '#dc3545',
      color: 'white',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Explore Our Products</h2>

      <div style={styles.filters}>
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={filters.category}
          onChange={handleFilterChange}
          style={styles.filterInput}
        />
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={handleFilterChange}
          style={styles.filterInput}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={handleFilterChange}
          style={styles.filterInput}
        />
        <input
          type="number"
          name="minRating"
          placeholder="Min Rating"
          value={filters.minRating}
          onChange={handleFilterChange}
          style={styles.filterInput}
        />
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Description</th>
            <th style={styles.th}>Category</th>
            <th style={styles.th}>Price</th>
            <th style={styles.th}>Rating</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td style={styles.td}>{product.name}</td>
              <td style={styles.td}>{product.description}</td>
              <td style={styles.td}>{product.category}</td>
              <td style={styles.td}>${product.price}</td>
              <td style={styles.td}>{product.rating} ★</td>
              <td style={styles.td}>
                <button
                  style={{ ...styles.actionButton, ...styles.editButton }}
                >
                  Edit
                </button>
                <button
                  style={{ ...styles.actionButton, ...styles.deleteButton }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
