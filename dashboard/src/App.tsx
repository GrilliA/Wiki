import "material-symbols";
import "@mantine/core/styles.css";
import "@mantine/tiptap/styles.css";
import "@/styles/globals.css";
import { Route, Routes } from "react-router";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import EmailVerificationPage from "./pages/EmailVerification/EmailVerificationPage";
import { ForgottenPassword } from "./pages/ForgottenPassword/ForgottenPassword";
import LoginPage from "./pages/Login/LoginPage";
import SignupPage from "./pages/Signup/SignupPage";
import { EventPage } from "./pages/EventPage/EventPage";
import { HomePage } from "./pages/Home/HomePage";
import { OnBoardingForm } from "./pages/OnBoarding/OnBoarding";
import { ProfileForm } from "./pages/ProfileForm/ProfileForm";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import { UnderConstructionPage } from "./pages/UnderConstructionPage/UnderConstructionPage";
import { ProfilePage } from "./pages/Profile/ProfilePage";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<UnderConstructionPage />} />
      <Route path="auth">
        <Route path="signup" element={<SignupPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="email_verification" element={<EmailVerificationPage />} />
        <Route path="forgotten_password" element={<ForgottenPassword />} />
      </Route>
      <Route>
        <Route path="onboarding" element={<OnBoardingForm />} />
        <Route index path="home" element={<HomePage />} />
        <Route path="profile/edit" element={<ProfileForm />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="page/:id" element={<EventPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
