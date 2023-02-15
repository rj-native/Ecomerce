import {
  changePasswordFail,
  changePasswordRequest,
  changePasswordSuccess,
} from '../../redux/slices';
import { changePasswordURL } from '../../utils/Api';
import { request } from '../../utils/axiosInstance/axiosInstance';

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
