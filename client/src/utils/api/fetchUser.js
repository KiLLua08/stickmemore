import axios from 'axios';

export const fetchUserData = async (token) => {
  try {
    const response = await axios.get('http://localhost:4000/api/user/profile', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch user data');
  }
};
