import axios from 'axios';
const API_URL = 'https://server.olive0-druwa.com';

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export const fetchProducts = async () => {
  try {
    console.log("2323");
    const response = await fetch(`${API_URL}/main`);
    console.log(response);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    console.log(1);
    return response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const updateProductLike = async (productId) => {
  try {
    const response = await axiosInstance.post(`${API_URL}/main/liked/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error updating product like:', error);
    throw error;
  }
};