import axios from 'axios';

const getProductById = async (product_id: number) => {

  const url = process.env.NEXT_PUBLIC_PRODUCT_DETAIL
  const response = await axios.get(`${url}/${product_id}`);
  if (response.status !== 200) {
    throw new Error("Could not get product");
  }


  return response.data; // Return the entire response data
};

export default getProductById;
