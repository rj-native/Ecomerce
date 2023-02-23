import {
  loginRequest,
  loginRequestFail,
  loginSuccess,
  signupRequest,
  signupRequestFail,
  signupRequestSuccess,
} from '../../redux/slices/auth';
import { setLocalData } from '../../utils';
import { signInURL, signUpURL } from '../../utils/Api';
import { request } from '../../utils/axiosInstance/axiosInstance';

export const loginAction = (body) => {
  return async (dispatch) => {
    try {
      dispatch(loginRequest());
      const loginData = await request({
        url: signInURL,
        method: 'post',
        data: body,
      });
      dispatch(loginSuccess(loginData));
      alert(loginData?.message);

      setLocalData('token strore', loginData.data.token);
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
      setLocalData('token strore', createUserData.data.token);
      return true;
    } catch (err) {
      dispatch(signupRequestFail(err));
      alert(err?.response?.data?.message);
      return false;
    }
  };
};
