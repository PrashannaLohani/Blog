import { lazy, Suspense } from "react";
import { useRoutes, Outlet } from "react-router-dom";
import Loader from "../../Components/loader/Loader";
import AdminLayout from "../Layout/AdminLayout";
import ProtectedRoute from "../Layout/ProtectedLayout";

const Login = lazy(() => import("../pages/Auth/Login"));
const EmailVerify = lazy(() => import("../pages/Auth/EmailVerification"));
const ResetPassword = lazy(() => import("../pages/Auth/ResetPassword"));
const Profile = lazy(() => import("../pages/Profile"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const MyPost = lazy(() => import("../pages/MyPost"));
const CreatePost = lazy(() => import("../pages/CreatePost"));
const ArchivedPost = lazy(() => import("../pages/ArchivedPost"));
const Error = lazy(() => import("../../Components/Error/Error"));

export default function AdminRoute() {
  return useRoutes([
    {
      element: (
        <Suspense fallback={<Loader />}>
          <ProtectedRoute>
            <AdminLayout>
              <Outlet />
            </AdminLayout>
          </ProtectedRoute>
        </Suspense>
      ),
      children: [
        { element: <Dashboard />, path: "/dashboard" },
        { element: <MyPost />, path: "/my-posts" },
        { element: <CreatePost />, path: "/create-post" },
        { element: <ArchivedPost />, path: "/archived-posts" },
        { element: <Profile />, path: "/profile" },
      ],
    },
    {
      path: "/",
      index: true,
      element: <Login />,
    },
    {
      path: "/email-verification",
      index: true,
      element: <EmailVerify />,
    },
    {
      path: "/reset-password",
      index: true,
      element: <ResetPassword />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);
}
