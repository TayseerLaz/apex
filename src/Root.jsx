import React, { useEffect, useState } from "react";
import App from "./App.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Terms from "./pages/Terms.jsx";
import CookieConsent from "./components/CookieConsent.jsx";

function getRoute() {
  const hash = window.location.hash;
  if (hash.startsWith("#/privacy")) return "privacy";
  if (hash.startsWith("#/terms")) return "terms";
  return "home";
}

export default function Root() {
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onHashChange = () => {
      const next = getRoute();
      setRoute((prev) => {
        if (prev !== next) window.scrollTo(0, 0);
        return next;
      });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <>
      {route === "privacy" ? <PrivacyPolicy /> : route === "terms" ? <Terms /> : <App />}
      <CookieConsent />
    </>
  );
}
