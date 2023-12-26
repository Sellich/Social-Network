import { authAPI } from "../API/API";

const SET_USER_LOGIN = "social-network/auth/SET_USER_LOGIN";
const SET_USER_ID = "social-network/auth/SET_USER_ID";
const SET_USER_EMAIL = "social-network/auth/SET_USER_EMAIL";
const IS_AUTH = "social-network/auth/IS_AUTH";

let initialState = {
  isAuth: false,
  login: null,
  userId: null,
  email: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_LOGIN:
      return {
        ...state,
        login: action.login
      }
    case SET_USER_ID:
      return {
        ...state,
        userId: action.userId
      }
    case SET_USER_EMAIL:
      return {
        ...state,
        email: action.email
      }
    case IS_AUTH:
      return {
        ...state,
        isAuth: action.isAuth
      }
    default: return state
  };
}

const setUserLogin = (login) => ({ type: SET_USER_LOGIN, login });
const setUserId = (userId) => ({ type: SET_USER_ID, userId });
const setUserEmail = (email) => ({ type: SET_USER_EMAIL, email });
const isAuth = (isAuth) => ({ type: IS_AUTH, isAuth });

export const logInThunk = (email, password, rememberMe, captcha) => async (dispatch) => {
  let response = await authAPI.logIn(email, password, rememberMe, captcha);

  if (response.resultCode === 0) {
    dispatch(authMeThunk());
  };
  if (response.resultCode === 1) {
    alert('ERROR');
  };
}

export const authMeThunk = () => async (dispatch) => {
  let response = await authAPI.authMe();

  if (response.data.resultCode === 0) {
    dispatch(isAuth(true));
    dispatch(setUserLogin(response.data.data.login));
    dispatch(setUserId(response.data.data.id));
    dispatch(setUserEmail(response.data.data.email));
  }
}

export default authReducer;
