import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "./Pages/Home/Home";
import Blogs from "./Pages/Blogs/Blogs";
import ExplorePage from "./Pages/Explore/ExplorePage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Explore" element={<ExplorePage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
