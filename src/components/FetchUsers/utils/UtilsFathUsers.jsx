import axios from 'axios';
const BASE_URL = 'https://jsonplaceholder.typicode.com/users';
export const utilsFetchUsers = async () => {
  try {
    return await axios.get(BASE_URL);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    }
    throw new Error('Somethings went wrong');
  }
};
