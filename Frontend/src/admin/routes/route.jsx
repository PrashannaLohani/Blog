import { lazy, Suspense } from "react";
import { useRoutes, Outlet } from "react-router-dom";
import Loader from "../../Components/loader/Loader";
import { Dashboard } from "@mui/icons-material";
import AdminLayout from "../Layout/AdminLayout";

const Login = lazy(() => import("../pages/Login"));
const Error = lazy(() => import("../../Components/Error/Error"));

export default function AdminRoute() {
  return useRoutes([
    {
      element: (
        <Suspense fallback={<Loader />}>
          {/* <ProtectedRoute> */}
          <AdminLayout>
            <Outlet />
          </AdminLayout>
          {/* </ProtectedRoute> */}
        </Suspense>
      ),
      children: [{ element: <Dashboard />, path: "/dashboard" }],
    },
    {
      path: "/",
      index: true,
      element: <Login />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);
}
