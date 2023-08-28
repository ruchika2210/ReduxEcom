import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  //took the initial state of the product through the useElector
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    //response from the api with the axios request
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    console.log(response.data, "response");
    dispatch(setProducts(response.data));
  };

  //useEffect for the initial render , one time render
  useEffect(() => {
    //called the api function in the useEffect
    fetchProducts();
  }, []);

  console.log("Products", products);
  return (
    <div className="ui grid container">
      {/* called the Product Component  */}
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
