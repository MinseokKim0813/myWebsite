import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

/** GitHub Pages serves SPA fallback via 404.html → index.html; restore the intended route. */
(function restoreGhPagesRoute() {
  const redirect = sessionStorage.getItem("gh-pages-redirect");
  if (redirect) {
    sessionStorage.removeItem("gh-pages-redirect");
    window.history.replaceState(null, "", redirect);
    return;
  }

  const path = window.location.pathname;
  if (path.endsWith("/index.html")) {
    const cleaned =
      path.replace(/\/index\.html$/, "/") +
      window.location.search +
      window.location.hash;
    window.history.replaceState(null, "", cleaned);
  }
})();

createRoot(document.getElementById("root")!).render(<App />);
