import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../../../_metronic/layout";

/* Global Message */
import { ModulePage as SchedulePage } from "./Schedule/components/schedule.page";
import { ModuleEdit as ScheduleEdit } from "./Schedule/components/edit/schedule-edit.component";
import { ModulePage as KycPage } from "./know-your-customer/components/know-your-customer-page";
import { ModuleEdit as KycEdit } from "./know-your-customer/components/edit/know-your-customer-edit.component";
import { ModulePage as SupportPage } from "./SupportUser/components/support-user.page";
import { ModuleEdit as SettingProfile } from "../Setting/components/edit/setting-edit.component";
import { ModulePage as PaymentPage } from "./Payment/components/payment.page";

import InstructionsForm from "../Faq/user/instructions/instructions-form.component";
import Rates from "../Payment/rates/rates.component";
import UserProfilePage from "../UserProfile/UserProfilePage";
/* Module Name */

export default function userRoutes() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from eCommerce root URL to /customers */
          <Redirect exact={true} from="/" to="/setting-profile" />
        }

        <ContentRoute path="/user/schedule/new" component={ScheduleEdit} />
        <ContentRoute path="/user/schedule/:id/edit" component={ScheduleEdit} />
        <ContentRoute path="/user/schedule" component={SchedulePage} />

        <ContentRoute path="/user/kyc/new" component={KycEdit} />
        <ContentRoute path="/user/kyc/:id/edit" component={KycEdit} />
        <ContentRoute path="/user/kyc" component={KycPage} />

        <ContentRoute path="/user/instructions" component={InstructionsForm} />

        <ContentRoute path="/user/supports" component={SupportPage} />

        <ContentRoute path="/instructions" component={InstructionsForm} />
        <ContentRoute path="/user-profile" component={UserProfilePage} />
        <ContentRoute path="/setting-profile" component={SettingProfile} />
        <ContentRoute path="/rates" component={Rates} />
        <ContentRoute path="/user/payment" component={PaymentPage} />
      </Switch>
    </Suspense>
  );
}
