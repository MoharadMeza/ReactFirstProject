/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React, { lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { CustomLayout } from "./shared/metronic/layout/components/user-layout/user.layout.component";
import { AdminLayout } from "./shared/metronic/layout/components/admin-layout/admin.layout.component";
import { Logout } from "./modules/Auth";
import { AuthPage } from "./shared/metronic/modules/Auth/AuthPage";
import ErrorsPage from "./modules/ErrorsExamples/ErrorsPage";
const AdminPage = lazy(() => import("./modules/Admin/admin.routes"));
const UserPage = lazy(() => import("./modules/User/user.routes"));

export function Routes() {
  const { isAuthorized, role } = useSelector(
    ({ auth }) => ({
      isAuthorized: auth.user != null,
      role: auth.user
    }),
    shallowEqual
  );
  return (
    <Switch>
      {!isAuthorized ? (
        /*Render auth page when user at `/auth` and not authorized.*/
        <Route>
          <AuthPage />
        </Route>
      ) : (
        /*Otherwise redirect to root page (`/`)*/
        <Redirect from="/auth" to="/" />
      )}

      <Route path="/error" component={ErrorsPage} />
      <Route path="/logout" component={Logout} />

      {!isAuthorized ? (
        /*Redirect to `/auth` when user is not authorized*/
        <Redirect to="/auth/login" />
      ) : role.role === "admin" ? (
        <AdminLayout>
          <UserPage />
          <AdminPage />
        </AdminLayout>
      ) : (
        <CustomLayout>
          <UserPage />
        </CustomLayout>
      )}
      <Route>
        <Redirect to="/error/error-v1" />
      </Route>
    </Switch>
  );
}
