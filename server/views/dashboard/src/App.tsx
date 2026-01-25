import "@/styles/globals.css";
import "material-symbols";
import "@mantine/core/styles.css";
import "@mantine/tiptap/styles.css";
import { Route, Routes } from "react-router";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { useAppInit } from "./hooks/useAppInit";
import { UnderConstructionPage } from "./pages/UnderConstructionPage/UnderConstructionPage";

function App() {
  useAppInit();

  return (
    <Routes>
      <Route index path="/" element={<UnderConstructionPage />} />
      {/* <Route path="auth" element={<AuthPageTemplate />}> */}
      {/*   <Route path="signup" element={<SignupPage />} /> */}
      {/*   <Route path="login" element={<LoginPage />} /> */}
      {/*   <Route path="email_verification" element={<EmailVerification />} /> */}
      {/*   <Route path="forgotten_password" element={<ForgottenPassword />} /> */}
      {/* </Route> */}
      {/* <Route element={<PageTemplate />}> */}
      {/*   <Route path="onboarding" element={<OnBoardingForm />} /> */}
      {/*   <Route index path="home" element={<HomePage />} /> */}
      {/*   <Route path="profile/edit" element={<ProfileForm />} /> */}
      {/*   <Route path="profile" element={<Profile />} /> */}
      {/*   <Route path="search" element={<SearchPage />} /> */}
      {/*   <Route path="page/:id" element={<EventPage />} /> */}
      {/* </Route> */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
