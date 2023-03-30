import { Routes, Route } from "react-router-dom";
import Navigation from "./pages/components/nav/Navigation";
import ConfirmPassword from "./pages/confirm-password/ConfirmPassword";
import Home from "./pages/home/Home";
import LogOut from "./pages/log-out/LogOut";
import LogIn from "./pages/login/LogIn";
import NewPass from "./pages/new-pass/NewPass";
import ResetPass from "./pages/reset-pass/ResetPass";
import SignUp from "./pages/sign-up/SignUp";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/confirm-password" element={<ConfirmPassword />} />
        <Route path="/reset-password" element={<ResetPass />} />
        <Route path="/new-password" element={<NewPass />} />
        <Route path="/log-out" element={<LogOut />} />
      </Route>
    </Routes>
  );
};

export default Router;
