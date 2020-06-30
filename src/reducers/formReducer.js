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
    case "COMPLETE_FORM":
      return {
        ...state,
        completed: true,
      };
    default:
      return state;
  }
};
