import axios from 'axios';

const API_URL = 'http://server.olive0-druwa.com/'; // 실제 API URL로 변경

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};