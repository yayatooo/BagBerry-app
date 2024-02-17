import axios from 'axios';

const getProductById = async (id: number) => {
  // Check if id is not undefined and is a valid number
  if (id === undefined || isNaN(id)) {
    throw new Error("Invalid product ID");
  }

  const response = await axios.get(`https://sistemtoko.com/public/demo/single/${id}`);
  if (response.status !== 200) {
    throw new Error("Could not get product");
  }

  return response.data; // Return the entire response data
};

export default getProductById;
