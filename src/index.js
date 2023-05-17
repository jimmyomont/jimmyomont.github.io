import { createRoot } from "react-dom/client";

import   Portfolio  from "./components/Portfolio";

const domElement = document.getElementById('test');
const root = createRoot(domElement);
root.render(<Portfolio />);