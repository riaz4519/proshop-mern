import {
  PRODUUCT_LIST_REQUEST,
  PRODUUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUUCT_DETAILS_REQUEST,
  PRODUUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productConstant";
import axios from "axios";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: PRODUUCT_LIST_REQUEST,
    });

    const { data } = await axios.get("/api/products");
    dispatch({ type: PRODUUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUUCT_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({ type: PRODUUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

