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
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { AuthPageTemplate } from "./components/AuthPageTemplate/AuthPageTemplate";
import { useAppInit } from "./hooks/useAppInit";
import { PageTemplate } from "./components/PageTemplate/PageTemplate";
import { useCurrentUserQuery } from "./services/auth";

function App() {
  useAppInit();

  const { data } = useCurrentUserQuery();
  return (
    <Routes>
      <Route index path="/" element={<Navigate to={"/home"} replace />} />
      <Route path="auth" element={<AuthPageTemplate />}>
        <Route path="signup" element={<SignupPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="email_verification" element={<EmailVerification />} />
        <Route path="forgotten_password" element={<ForgottenPassword />} />
      </Route>
      <Route path="onboarding" element={<OnBoardingForm />} />
      <Route element={<PageTemplate />}>
        <Route index path="home" element={<HomePage />} />
        <Route path="profile/edit" element={<ProfileForm />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
