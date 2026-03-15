import { createBrowserRouter, Navigate } from "react-router";
import { AboutPage } from "../pages/about/AboutPage";
import { ProfilePage } from "../pages/profile/ProfilePage";
import { LoginPage } from "../pages/login/LoginPage";
import { PrivateRouter } from "./PrivateRouter";

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AboutPage />,
  },
  {
    path: '/profile',
    element: <PrivateRouter element={<ProfilePage />} />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  }
]);