import axios from "axios"

export const getPosts = async () => {
  const res = await axios.get("https://fakestoreapi.com/products")
  return res.data
}
