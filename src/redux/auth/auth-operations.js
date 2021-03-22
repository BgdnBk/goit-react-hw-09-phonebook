import axios from "axios";
import authActions from "./auth-action";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};
//  /users/signup
const register = (credential) => async (dispatch) => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post("/users/signup", credential);
    console.log("this is credential", credential);
    token.set(response.data.token);
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};
// /users/login
const login = (credential) => async (dispatch) => {
  dispatch(authActions.loginRequest());

  try {
    const response = await axios.post("/users/login", credential);

    token.set(response.data.token);
    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};
// /users/logout
const logout = () => async (dispatch) => {
  dispatch(authActions.logoutRequest());

  try {
    await axios.post("/users/logout");

    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
  }
};
// /users/current
const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);

  dispatch(authActions.getCurrentUserRequest());
  try {
    const response = await axios.get("/users/current");
    dispatch(authActions.getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

export default { register, login, logout, getCurrentUser };
