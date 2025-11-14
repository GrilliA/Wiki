import "@/styles/globals.css";
import "material-symbols";
import "@mantine/core/styles.css";
import "@mantine/tiptap/styles.css";
import { Navigate, Route, Routes } from "react-router";
import SignupPage from "./pages/Signup/SignupPage";
import EmailVerification from "./pages/EmailVerification/EmailVerification";
import { ForgottenPassword } from "./pages/ForgottenPassword/ForgottenPassword";
import { OnBoardingForm } from "./pages/OnBoarding/OnBoarding";
import LoginPage from "./pages/Login/LoginPage";
import { Profile } from "./pages/Profile/Profile";
import { ProfileForm } from "./pages/ProfileForm/ProfileForm";
import { HomePage } from "./pages/Home/HomePage";
import { useCurrentUserQuery } from "./services/auth";
import { RedirectionManager } from "./pages/RedirectionManager/RedirectionManager";
import { useEffect } from "react";
import { useAppInit } from "./hooks/useAppInit";

function App() {
  useAppInit();

  const { data } = useCurrentUserQuery();
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Routes>
      <Route index path="/" element={<Navigate to={"/home"} />} />
      <Route path="/auth/signup" element={<SignupPage />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/onboarding" element={<OnBoardingForm />} />
      <Route path="/auth/email_verification" element={<EmailVerification />} />
      <Route path="/auth/forgotten_password" element={<ForgottenPassword />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/profile/edit" element={<ProfileForm />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<RedirectionManager />} />
    </Routes>
  );
}

export default App;
