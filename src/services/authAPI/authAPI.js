import {
  getuserRequest,
  getuserRequestFail,
  getuserSuccess,
  loginRequest,
  loginRequestFail,
  loginSuccess,
  logOutFail,
  logOutRequest,
  logOutSuccess,
  signupRequest,
  signupRequestFail,
  signupRequestSuccess,
} from '../../redux/slices/auth';
import { setToken } from '../../utils';
import {
  getUserURL,
  logOutProfile,
  signInURL,
  signUpURL,
} from '../../utils/Api';
import {
  logoutRequest,
  request,
} from '../../utils/axiosInstance/axiosInstance';

export const loginAction = (body) => {
  return async (dispatch) => {
    try {
      dispatch(loginRequest());
      const loginData = await request({
        url: signInURL,
        method: 'post',
        data: body,
      });
      dispatch(loginSuccess(loginData?.data));
      dispatch(loginSuccess(loginData?.data?.token));
      alert(loginData?.message);
      setToken('token', loginData?.data?.token);
      return;
    } catch (err) {
      dispatch(loginRequestFail(err));
      alert(err?.response?.data?.message);
    }
  };
};

export const createUserAction = (body) => {
  return async (dispatch) => {
    try {
      dispatch(signupRequest());
      const createUserData = await request({
        url: signUpURL,
        method: 'post',
        data: body,
      });
      dispatch(signupRequestSuccess(createUserData));
      alert(createUserData?.message);
      setToken('token', createUserData.data.token);
      return true;
    } catch (err) {
      dispatch(signupRequestFail(err));
      alert(err?.response?.data?.message);
      return false;
    }
  };
};

export const logoutUserAction = () => {
  return async (dispatch) => {
    try {
      dispatch(logOutRequest());
      const logoutUserData = await logoutRequest({
        url: logOutProfile,
        method: 'delete',
      });
      dispatch(logOutSuccess(logoutUserData));
      alert(logoutUserData?.message);
      return true;
    } catch (err) {
      dispatch(logOutFail(err));
      alert(err?.response?.data?.message);
      return false;
    }
  };
};

export const getUserAction = () => {
  return async (dispatch) => {
    try {
      dispatch(getuserRequest());
      const getUserData = await logoutRequest({
        url: getUserURL,
        method: 'get',
      });

      dispatch(getuserSuccess(getUserData));
      return true;
    } catch (err) {
      dispatch(getuserRequestFail(err));
      return false;
    }
  };
};
