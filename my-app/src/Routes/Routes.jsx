import { Route } from "react-router-dom";
import Homepage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProtectedPage from "./ProtectedPage";
import RegisterPage from "../pages/RegisterPage";

const routes = [
  <Route
    path="/home"
    element={
      <ProtectedPage guestOnly={false} needLogin={true}>
        <Homepage />
      </ProtectedPage>
    }
  />,
  <Route
    path="/login"
    element={
      <ProtectedPage guestOnly={true} needLogin={false}>
        <LoginPage />
      </ProtectedPage>
    }
  />,
  <Route
    path="/register"
    element={
      <ProtectedPage guestOnly={true} needLogin={false}>
        <RegisterPage />
      </ProtectedPage>
    }
  />,
];

export default routes;
