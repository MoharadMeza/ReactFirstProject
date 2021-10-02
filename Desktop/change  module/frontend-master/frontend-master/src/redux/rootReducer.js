import { all } from "redux-saga/effects";
import { combineReducers } from "redux";

import * as auth from "../app/modules/Auth/_redux/authRedux";
import { moduleSlice as globalMessageSlice } from "../app/modules/Admin/GlobalMessage/_redux/global-message.slice";
import { moduleSlice as blackListIpSlice } from "../app/modules/Admin/BlackListIp/_redux/black-list-ip.slice";
import { moduleSlice as customRateSlice } from "../app/modules/Admin/CustomRate/_redux/custom-rate.slice";
import { moduleSlice as scheduleAdminSlice } from "../app/modules/Admin/Schedule/_redux/schedule.slice";
import { moduleSlice as scheduleUserSlice } from "../app/modules/User/Schedule/_redux/schedule.slice";
import { moduleSlice as kycUserSlice } from "../app/modules/User/know-your-customer/_redux/know-your-customer.slice";
import { moduleSlice as kycAdminSlice } from "../app/modules/Admin/know-your-customer/_redux/know-your-customer.slice";
import { moduleSlice as usersSlice } from "../app/modules/Admin/module-users/_redux/users.slice";
import { moduleSlice as emailSlice } from "../app/modules/Admin/Email/_redux/email.slice";
import { moduleSlice as AvailablePaymentSlice } from "../app/modules/Admin/AvailablePaymentMethods/_redux/available-payment.slice";
import { moduleSlice as settingSlice } from "../app/modules/Setting/_redux/setting.slice"
import { moduleSlice as adminSupportSlice } from "../app/modules/Admin/Support/_redux/support.slice";
import { moduleSlice as userSupportSlice } from "../app/modules/User/SupportUser/_redux/support-usre.slice";
import { moduleSlice as monitoringSlice } from "../app/modules/Admin/monitoring/_redux/monitoring.slice"
import { moduleSlice as clientTranslationSlice } from "../app/modules/Admin/ClientTranslation/_redux/client-translation.slice";
import { moduleSlice as paymentAdminSlice } from "../app/modules/Admin/Payment/_redux/payment.slice";
import { moduleSlice as paymentUserSlice } from "../app/modules/User/Payment/_redux/payment.slice";

export const rootReducer = combineReducers({
  auth: auth.reducer,
  globalMessages: globalMessageSlice.reducer,
  blackListIp: blackListIpSlice.reducer,
  customRate:customRateSlice.reducer,
  scheduleAdmin:scheduleAdminSlice.reducer,
  scheduleUser:scheduleUserSlice.reducer,
	kycUser: kycUserSlice.reducer,
	kycAdmin: kycAdminSlice.reducer,
	users: usersSlice.reducer,
  email:emailSlice.reducer,
  AvailablePaymentMethods: AvailablePaymentSlice.reducer,
  setting:settingSlice.reducer,
  adminSupports: adminSupportSlice.reducer,
	userSupport : userSupportSlice.reducer,
  monitoring: monitoringSlice.reducer,
  clientTranslation: clientTranslationSlice.reducer,
  paymentAdmin: paymentAdminSlice.reducer,
  paymentUser:paymentUserSlice.reducer
});

export function* rootSaga() {
  yield all([auth.saga()]);
}
