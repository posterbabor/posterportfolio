import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

function Root() {
  useEffect(() => {
    // simple Reveal on scroll using IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            // optionally unobserve for performance
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<Root />);
