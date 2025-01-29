import { lazy, Suspense } from "react";
import { useRoutes, Outlet } from "react-router-dom";
import Loader from "../../Components/loader/Loader";
import MainLayout from "../../Layout/MainLayout";
import Error from "../../Components/Error/Error";

// Lazy loading other pages
const Home = lazy(() => import("../Pages/Home/Home"));
const Blogs = lazy(() => import("../Pages/Blogs/Blogs"));
const ExplorePage = lazy(() => import("../Pages/Explore/ExplorePage"));

export default function Route() {
  return useRoutes([
    {
      element: (
        <Suspense fallback={<Loader />}>
          <MainLayout>
            <Outlet />
          </MainLayout>
          {/* </ProtectedRoute> */}
        </Suspense>
      ),
      children: [
        { element: <Home />, index: true },
        { element: <Blogs />, path: "/blogs" },
        { element: <ExplorePage />, path: "/Explore" },
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);
}
