import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import WikiProvider from "./WikiProvider.tsx";
import { store } from "./state/store.ts";
import { Provider } from "react-redux";
import { WikiLoader } from "./components/Loader/Loader.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <WikiProvider>
          <App />
          <WikiLoader />
        </WikiProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
