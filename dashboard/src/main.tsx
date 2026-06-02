import { createRoot } from "react-dom/client";
import { Root } from "./Root.tsx";
import "./initializeTranslations.ts";

createRoot(document.getElementById("root")!).render(<Root />);
