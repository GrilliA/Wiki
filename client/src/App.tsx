import "@/styles/globals.css";
import "material-symbols";
import "@mantine/core/styles.css";
import { Route, Routes } from "react-router";
import SignupPage from "./pages/Signup/SignupPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignupPage />} />
    </Routes>
  );
}

export default App;
