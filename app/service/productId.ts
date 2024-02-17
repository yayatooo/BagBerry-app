import axios from 'axios';

const productId = async (id: number) => {


  const response = await axios.get(`https://sistemtoko.com/public/demo/product${id}`);
  if (response.status !== 200) {
    throw new Error("Could not get product");
  }

  return response.data; // Return the entire response data
};

export default productId;
