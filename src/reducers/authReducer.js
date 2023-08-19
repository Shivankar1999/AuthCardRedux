// authReducer.js
const initialState = {
  isAuthenticated: false,
  user: {},
};

const authReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: { ...action.payload },
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: { ...action.payload },
      };
    default:
      return state;
  }
};

export default authReducer;
