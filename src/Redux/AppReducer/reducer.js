import * as types from "./actionTypes";

const initialState = {
  menClothes: [],
  womenClothes: [],
  isLoding: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    // THIS IS FOR GETTING MEN DATA TO SEARCH RESULT
    case types.GET_MEN_CLOTHES_DATA_REQUEST:
      return {
        ...state,
        isLoding: true,
        isError: false,
      };
    case types.GET_MEN_CLOTHES_DATA_SUCCESS:
      return {
        ...state,
        menClothes: payload,
        isLoding: false,
        isError: false,
      };
    case types.GET_MEN_CLOTHES_DATA_FAILURE:
      return {
        ...state,
        isLoding: false,
        isError: false,
      };
    // THIS IS FOR GETTING WOMEN DATA TO SEARCH RESULT
    case types.GET_WOMEN_CLOTHES_DATA_REQUEST:
      return {
        ...state,
        isLoding: true,
        isError: false,
      };
    case types.GET_WOMEN_CLOTHES_DATA_SUCCESS:
      return {
        ...state,
        womenClothes: payload,
        isLoding: false,
        isError: false,
      };
    case types.GET_WOMEN_CLOTHES_DATA_FAILURE:
      return {
        ...state,
        isLoding: false,
        isError: false,
      };

    default:
      return state;
  }
};
