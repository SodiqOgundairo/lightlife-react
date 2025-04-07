import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./assets/css/index.css"
import App from "./App.tsx"
import { BrowserRouter as Router } from "react-router-dom"

createRoot(document.getElementById("root")!).render(
  <Router>
    <StrictMode>
      <App />
    </StrictMode>
  </Router>
)
