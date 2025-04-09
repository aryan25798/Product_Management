import React, { useState } from 'react';
import API from '../../utils/api';

const ProductForm = ({ existingProduct }) => {
  const [formData, setFormData] = useState(existingProduct || {});

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (existingProduct) {
        await API.put(`/products/${existingProduct._id}`, formData);
      } else {
        await API.post('/products', formData);
      }
      alert('Success!');
    } catch (err) {
      alert('Error!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <textarea name="description" placeholder="Description" onChange={handleChange} required />
      <input name="category" placeholder="Category" onChange={handleChange} required />
      <input name="price" type="number" placeholder="Price" onChange={handleChange} required />
      <input name="rating" type="number" step="0.1" placeholder="Rating" onChange={handleChange} required />
      <button type="submit">Save</button>
    </form>
  );
};

export default ProductForm;
