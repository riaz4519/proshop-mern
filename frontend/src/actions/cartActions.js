import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstant";

export const addToCart = (id, qty) => async (dispatch, getstate) => {
  const { data } = await axios.get(`/api/products/${id}`);

  

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty: qty,
    },
  });

  localStorage.setItem('cartItems',JSON.stringify(getstate().cart.cartItems));
};

export const removeFromCart = (id)=> async (dispatch, getstate) => {

    dispatch({
        type : CART_REMOVE_ITEM,
        payload : id
    })

    localStorage.setItem('cartItems',JSON.stringify(getstate().cart.cartItems));

}
