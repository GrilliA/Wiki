import { createRoot } from "react-dom/client";
import "./helper/i18n.ts";
import { Root } from "./Root.tsx";

createRoot(document.getElementById("root")!).render(<Root />);
