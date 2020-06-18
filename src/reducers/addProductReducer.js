export const formReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_CHANGE":
      return {
        ...state,
        [action.name]: action.value,
      };
    case "VALIDATE":
      return {
        ...state,
        errors: action.payload,
        isTouched: {
          ...state.isTouched,
          [action.name]: true,
        },
      };
    case "HANDLE_CHANGE_IMAGE":
      return {
        ...state,
        imageAsFile: action.payload,
      };
    case "RETURNED_IMG_URL":
      return {
        ...state,
        imageAsUrl: action.payload,
      };
    case "ONSUBMIT_VALIDATE":
      return {
        ...state,
        isTouched: {
          productName: true,
          shortDets: true,
          fullDesc: true,
          stock: true,
          price: true,
          imageAsUrl: true,
        },
        errors: { ...action.payload },
      };
    default:
      return state;
  }
};
