import axios from "axios";
import * as types from "./actionTypes";

// THIS IS FOR GETTING MEN DATA TO SEARCH RESULT
export const getMenClothes = (params) => (dispatch) => {
  dispatch({ type: types.GET_MEN_CLOTHES_DATA_REQUEST });

  return axios
    .get("http://localhost:8080/menClothes", params)
    .then(({ data }) => {
      dispatch({ type: types.GET_MEN_CLOTHES_DATA_SUCCESS, payload: data });
    })
    .catch(() => {
      dispatch({ type: types.GET_MEN_CLOTHES_DATA_FAILURE });
    });
};

// THIS IS FOR GETTING WOMEN DATA TO SEARCH RESULT
export const getWomenClothes = (params) => (dispatch) => {
  dispatch({ type: types.GET_WOMEN_CLOTHES_DATA_REQUEST });

  return axios
    .get("http://localhost:8080/womenClothes", params)
    .then(({ data }) => {
      dispatch({ type: types.GET_WOMEN_CLOTHES_DATA_SUCCESS, payload: data });
    })
    .catch(() => {
      dispatch({ type: types.GET_WOMEN_CLOTHES_DATA_FAILURE });
    });
};
// THIS IS FOR GETTING KIDS DATA TO SEARCH RESULT
export const getKidsClothes = (params) => (dispatch) => {
  dispatch({ type: types.GET_KIDS_CLOTHES_DATA_REQUEST });

  return axios
    .get("http://localhost:8080/KidsData", params)
    .then(({ data }) => {
      dispatch({ type: types.GET_KIDS_CLOTHES_DATA_SUCCESS, payload: data });
    })
    .catch(() => {
      dispatch({ type: types.GET_KIDS_CLOTHES_DATA_FAILURE });
    });
};
