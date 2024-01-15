import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Register from "./routes/SignUp";
import HomeLayout from "./layouts/HomeLayout";
import { SignInPage } from "./routes/SignIn";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { Dashboard } from "./routes/Dashboard";
import { AuthGuard } from "./components/AuthGuard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <SignInPage /> },
    ],
  },
  {
    path: "dashboard",
    element: (
      <AuthGuard allowedRoles={["Admin", "User"]}>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: "blogs", element: <h1>blogs</h1> },
      { path: "products", element: <h1>products</h1> },
      { path: "profile", element: <h1>profile</h1> },
      { path: "settings", element: <h1>settings</h1> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
