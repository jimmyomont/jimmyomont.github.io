import { createRoot } from "react-dom/client";

import   App  from "./components/App";

const domElement = document.getElementById('app');
const root = createRoot(domElement);
root.render(<App />);