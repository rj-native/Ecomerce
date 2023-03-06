import {
  changePasswordFail,
  changePasswordRequest,
  changePasswordSuccess,
  changeProfileFail,
  changeProfileRequest,
  changeProfileSuccess,
} from '../../redux/slices';
import { changePasswordURL, changeProfileURL } from '../../utils/Api';
import { request } from '../../utils/axiosInstance/axiosInstance';
import { getUserAction } from '../authAPI';

export const changePasswordAction = (body, id) => {
  return async (dispatch) => {
    try {
      dispatch(changePasswordRequest());
      const changePasswordData = await request({
        url: `${changePasswordURL}/${id}`,
        method: 'put',
        data: body,
      });
      dispatch(changePasswordSuccess(changePasswordData));
      alert(changePasswordData?.message);
      return;
    } catch (err) {
      dispatch(changePasswordFail(err));
      alert(err?.response?.data?.message);
    }
  };
};

export const changeProfileAction = (body, id) => {
  return async (dispatch) => {
    try {
      dispatch(changeProfileRequest());

      const changeProfileData = await request({
        url: `${changeProfileURL}/${id}`,
        method: 'put',
        data: body,
        // headers: {
        //   'Content-Type': 'multipart/form-data',
        // },
      });
      dispatch(changeProfileSuccess(changeProfileData));
      dispatch(getUserAction());
      alert(changeProfileData?.message);
      return;
    } catch (err) {
      dispatch(changeProfileFail(err));
      alert(err?.response?.data?.message);
    }
  };
};
