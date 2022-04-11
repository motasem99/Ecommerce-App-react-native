const initialState = {
  token: '',
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload.token,
      };

    case 'SET_USER':
      return {
        ...state,
        user: action.payload.user,
      };

    default:
      return state;
  }
};

export default authReducer;
