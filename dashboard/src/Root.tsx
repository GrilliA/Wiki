import { StrictMode } from "react";
import App from "./App.tsx";
import WikiProvider from "./WikiProvider.tsx";
import { WikiLoader } from "./components/Loader/Loader.tsx";
import { ErrorModal } from "./components/ErrorModal/ErrorModal.tsx";

export const Root = () => {
  return (
    <StrictMode>
      <WikiProvider>
        <App />
        <WikiLoader />
        <ErrorModal />
      </WikiProvider>
    </StrictMode>
  );
};
