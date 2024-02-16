import axios from "axios";

const url = process.env.NEXT_PUBLIC_PRODUCT_URL || "";

const getProductById = async (id : number) => {
    const response = await axios.get(`${url}/${id}`);
    if (response.status !== 200) {
        throw new Error("Could not get products");
    }
    
    return response;

  };
    
  
  export default getProductById