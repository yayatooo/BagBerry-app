import axios from "axios";

const searchParam = async () => {
    const url = process.env.NEXT_PUBLIC_PRODUCT_URL || "";
    const response = await axios.get(url);
    if (response.status !== 200) {
      throw new Error("Could not get products");
    }
    return response.data.aaData;
  };

export default searchParam