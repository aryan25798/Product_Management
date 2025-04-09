import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../../utils/api';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [productData, setProductData] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    rating: '',
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const token = localStorage.getItem('token');
        const { data } = await axios.get(`/products/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProductData(data);
      } catch (error) {
        console.error(error);
        alert('Failed to fetch product details.');
      }
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.put(`/products/${id}`, productData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Product updated successfully!');
      navigate('/products');
    } catch (error) {
      console.error(error);
      alert('Failed to update product.');
    }
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={productData.name} onChange={handleChange} required />
        <input type="text" name="description" value={productData.description} onChange={handleChange} required />
        <input type="text" name="category" value={productData.category} onChange={handleChange} required />
        <input type="number" name="price" value={productData.price} onChange={handleChange} required />
        <input type="number" name="rating" value={productData.rating} max="5" onChange={handleChange} required />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditProduct;
