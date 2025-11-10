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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/dashboard/home"} />} />
      <Route path="/dashboard/auth/signup" element={<SignupPage />} />
      <Route path="/dashboard/auth/login" element={<LoginPage />} />
      <Route path="/dashboard/auth/onboarding" element={<OnBoardingForm />} />
      <Route
        path="/dashboard/auth/email_verification"
        element={<EmailVerification />}
      />
      <Route
        path="/dashboard/auth/forgotten_password"
        element={<ForgottenPassword />}
      />
      <Route path="/dashboard/home" element={<HomePage />} />
      <Route path="/dashboard/profile/edit" element={<ProfileForm />} />
      <Route path="/dashboardprofile" element={<Profile />} />
    </Routes>
  );
}

export default App;
