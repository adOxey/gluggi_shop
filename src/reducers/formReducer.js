export const formReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_CHANGE":
      return {
        ...state,
        [action.name]: action.value,
      };
    case "VALIDATE_ONBLUR":
      return {
        ...state,
        errors: action.payload,
        isTouched: {
          ...state.isTouched,
          [action.name]: true,
        },
      };
    case "HANDLE_IMAGE_AS_FILE":
      return {
        ...state,
        imageAsFile: action.payload,
      };
    case "RETURN_IMG_URL":
      return {
        ...state,
        imageAsUrl: action.payload,
      };
    case "VALIDATE_ONSUBMIT":
      const keys = Object.keys(state.isTouched)
        .map((key) => {
          return key;
        })
        .reduce((o, key) => ({ ...o, [key]: true }), {});
      return {
        ...state,
        isTouched: {
          ...state.isTouched,
          ...keys,
        },
        errors: { ...action.payload },
      };
    case "SUBMIT_FORM":
      return {
        ...state,
        completed: true,
      };
    case "RESET_FORM":
      return action.payload;
    default:
      return state;
  }
};
