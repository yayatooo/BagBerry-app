import axios from "axios";

const searchParam = async (searchQuery : string) => {
    const url = `${process.env.NEXT_PUBLIC_PRODUCT_SEARCH}${searchQuery}`
    const response = await axios.get(url);
    if (response.status !== 200) {
      throw new Error("Could not get products");
    }
    return response.data;
  };

export default searchParam