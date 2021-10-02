import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../../../_metronic/layout";

import { ModulePage as GlobalMessagePage } from "./GlobalMessage/components/global-message.page";
import { ModuleEdit as GlobalMessageEdit } from "./GlobalMessage/components/edit/global-message-edit.component";

/* Module Name */
// black-list-ip
import { ModulePage as BlackListIpPage } from "./BlackListIp/components/black-list-ip.page";
import { ModuleEdit as BlackListIpEdit } from "./BlackListIp/components/edit/black-list-ip-edit.component";

import { ModulePage as CustomRatePage } from "./CustomRate/components/custom-rate.page";
import { ModuleEdit as CustomRateEdit } from "./CustomRate/components/edit/custom-rate-edit.component";
import { ModulePage as KycAdminPage } from "./know-your-customer/components/know-your-customer.page";
import { ModuleEdit as KycChangeStatus } from "./know-your-customer/components/edit/know-your-customer-edit.component";
import { ModulePage as EmailPage } from "./Email/components/email.page";
import { ModuleView as EmailView } from "./Email/components/view/email-view.component";
import { ModulePage as AvailablePaymentMethodsPage } from "./AvailablePaymentMethods/components/available-payment.page";
import { ModuleEdit as AvailablePaymentMethodsEdit } from "./AvailablePaymentMethods/components/edit/available-payment-edit.component";

// Monitoring
import Monitoring from "./monitoring/monitoring.page";
import { ModulePage as SchedulePage } from "./Schedule/components/schedule.page";
import { ModuleEdit as ScheduleEdit } from "./Schedule/components/edit/schedule-edit.component";
import { ModulePage as UsersPage } from "./module-users/components/users.page";
import { ModuleEdit as UsersEdit } from "./module-users/components/edit/users-edit.component";

// Supports
import { ModulePage as SupportPage } from "./Support/components/support.page";
import { ModuleEdit as SupportEdit } from "./Support/components/edit/support-edit.component";

//Payment
import { ModulePage as PaymentPage } from "./Payment/components/payment.page";
import { ModuleEdit as PaymentEdit } from "./Payment/components/edit/payment-edit.component";

export default function adminRoutes() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {/* { */}

        <Redirect exact={true} from="/" to="/admin/monitoring" />
        <Redirect exact={true} from="/admin" to="/admin/monitoring" />
        <Redirect exact={true} from="/dashboard" to="/admin/monitoring" />

        {/* } */}

        {/* Global Message */}
        <ContentRoute
          path="/admin/global-messages/new"
          component={GlobalMessageEdit}
        />
        <ContentRoute
          path="/admin/global-messages/:id/edit"
          component={GlobalMessageEdit}
        />
        <ContentRoute
          path="/admin/global-messages"
          component={GlobalMessagePage}
        />
        {/* available-payment-methods */}
        <ContentRoute
          path="/admin/available-payment-methods/new"
          component={AvailablePaymentMethodsEdit}
        />
        <ContentRoute
          path="/admin/available-payment-methods/:id/edit"
          component={AvailablePaymentMethodsEdit}
        />
        <ContentRoute
          path="/admin/available-payment-methods"
          component={AvailablePaymentMethodsPage}
        />

        {/* black-list-ip */}
        <ContentRoute
          path="/admin/black-list-ip/new"
          component={BlackListIpEdit}
        />
        <ContentRoute
          path="/admin/black-list-ip/:id/edit"
          component={BlackListIpEdit}
        />
        <ContentRoute path="/admin/black-list-ip" component={BlackListIpPage} />

        {/* Monitoring */}
        <ContentRoute path="/admin/monitoring" component={Monitoring} />

        <ContentRoute
          path="/admin/custom-rate/new"
          component={CustomRateEdit}
        />
        <ContentRoute
          path="/admin/custom-rate/:id/edit"
          component={CustomRateEdit}
        />
        <ContentRoute path="/admin/custom-rate" component={CustomRatePage} />
        <ContentRoute path="/admin/schedule/new" component={ScheduleEdit} />

        {/* Schedule */}
        <ContentRoute
          path="/admin/schedule/:id/edit"
          component={ScheduleEdit}
        />
        <ContentRoute path="/admin/schedule" component={SchedulePage} />
        <ContentRoute
          path="/admin/kyc/:id/change-status"
          component={KycChangeStatus}
        />

        <ContentRoute path="/admin/kyc" component={KycAdminPage} />

        {/* Users */}
        <ContentRoute path="/admin/users/new" component={UsersEdit} />
        <ContentRoute path="/admin/users/:id/edit" component={UsersEdit} />
        <ContentRoute path="/admin/users" component={UsersPage} />

        {/* Email */}
        <ContentRoute path="/admin/email/new" component={EmailView} />
        <ContentRoute path="/admin/email/:id/view" component={EmailView} />
        <ContentRoute path="/admin/email" component={EmailPage} />

        {/* Supports */}
        <ContentRoute path="/admin/supports/:id/edit" component={SupportEdit} />
        <ContentRoute path="/admin/supports" component={SupportPage} />

        {/* Payment */}
        <ContentRoute path="/admin/payment/:id/edit" component={PaymentEdit} />
        <ContentRoute path="/admin/payment" component={PaymentPage} />
      </Switch>
    </Suspense>
  );
}
