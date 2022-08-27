import * as types from "./actionTypes";

const initialState = {
  menClothes: [],
  womenClothes: [],
  kidsClothes: [],
  TShirt: [],
  Tracksuit: [],
  Trouser: [],
  SweatShirt: [],
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

    // THIS IS FOR GETTING WOMEN DATA TO SEARCH RESULT
    case types.GET_KIDS_CLOTHES_DATA_REQUEST:
      return {
        ...state,
        isLoding: true,
        isError: false,
      };
    case types.GET_KIDS_CLOTHES_DATA_SUCCESS:
      return {
        ...state,
        kidsClothes: payload,
        isLoding: false,
        isError: false,
      };
    case types.GET_KIDS_CLOTHES_DATA_FAILURE:
      return {
        ...state,
        isLoding: false,
        isError: false,
      };

    //TSHIRT--->
    case types.GET_TSHIRT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case types.GET_TSHIRT_SUCCESS: {
      // console.log("getpayload")
      return {
        ...state,
        TShirt: payload,
        isLoading: false,
        isError: false,
      };
    }
    case types.GET_TSHIRT_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    //TRACKSUITE--->
    case types.GET_TRACKSUIT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case types.GET_TRACKSUIT_SUCCESS: {
      // console.log("getpayload")
      return {
        ...state,
        Tracksuit: payload,
        isLoading: false,
        isError: false,
      };
    }
    case types.GET_TRACKSUIT_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    //TROUSER
    case types.GET_TROUSER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case types.GET_TROUSER_SUCCESS: {
      // console.log("getpayload")
      return {
        ...state,
        Trouser: payload,
        isLoading: false,
        isError: false,
      };
    }
    case types.GET_TROUSER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    //SWEATSHIRT--->
    case types.GET_SWEATSHIRT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case types.GET_SWEATSHIRT_SUCCESS: {
      // console.log("getpayload")
      return {
        ...state,
        SweatShirt: payload,
        isLoading: false,
        isError: false,
      };
    }
    case types.GET_SWEATSHIRT_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default:
      return state;
  }
};
