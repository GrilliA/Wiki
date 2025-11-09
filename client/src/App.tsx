import "@/styles/globals.css";
import "material-symbols";
import "@mantine/core/styles.css";
import { Route, Routes } from "react-router";
import SignupPage from "./pages/Signup/SignupPage";
import EmailVerification from "./pages/EmailVerification/EmailVerification";
import { ForgottenPassword } from "./pages/ForgottenPassword/ForgottenPassword";
import { OnBoardingForm } from "./pages/OnBoarding/OnBoarding";
import LoginPage from "./pages/Login/LoginPage";
import { Profile } from "./pages/Profile/Profile";
import { ProfileForm } from "./pages/ProfileForm/ProfileForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<>Home page</>} />
      <Route path="/auth/signup" element={<SignupPage />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/onboarding" element={<OnBoardingForm />} />
      <Route path="/auth/email_verification" element={<EmailVerification />} />
      <Route path="/auth/forgotten_password" element={<ForgottenPassword />} />
      <Route path="/profile/edit" element={<ProfileForm />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
