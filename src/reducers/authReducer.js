// authReducer.js
const initialState = {
  isAuthenticated: false,
  user: {},
  users: [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    // Add more users as needed
  ],
};

const authReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
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
