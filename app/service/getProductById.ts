import axios from 'axios';

const getProductById = async (product_id: number) => {


  const response = await axios.get(`https://sistemtoko.com/public/demo/single/${product_id}`);
  if (response.status !== 200) {
    throw new Error("Could not get product");
  }


  return response.data; // Return the entire response data
};

export default getProductById;
