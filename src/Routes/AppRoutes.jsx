import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../Page/Auth/LoginPage";
import RegisterPage from "../Page/Auth/RegisterPage";
import HomePage from "../Page/Tenant/HomePage";
import ProfilePage from "../Page/Tenant/ProfilePage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LoginPage />}
        />

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/register"
          element={<RegisterPage />}
        />
        <Route
          path="/home"
          element={<HomePage />}
        />

        <Route
          path="/profile"
          element={<ProfilePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;