import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";

const CONSENT_KEY = "apex-consent-v1";

function needsConsent() {
  try {
    return !localStorage.getItem(CONSENT_KEY);
  } catch {
    return true;
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(needsConsent);
  const [agreed, setAgreed] = useState(false);

  const accept = () => {
    if (!agreed) return;
    try {
      localStorage.setItem(CONSENT_KEY, new Date().toISOString());
    } catch {
      /* ignore storage errors */
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-[80] px-4 pb-4 sm:px-6 sm:pb-6"
        >
          <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-[0_28px_70px_-30px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:flex-row sm:items-center sm:gap-6">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-500">
              <Cookie className="h-5 w-5" />
            </span>

            <div className="flex-1 space-y-3">
              <p className="text-sm leading-6 text-slate-600">
                We use cookies necessary for this website to function and to improve your experience. By
                continuing, you agree to our use of cookies.
              </p>
              <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-700">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-sky-500 accent-sky-500 focus:ring-sky-400"
                />
                <span>
                  I have read and accept the use of cookies, the{" "}
                  <a href="#/privacy" className="font-medium text-sky-600 underline">
                    Privacy Policy
                  </a>{" "}
                  and the{" "}
                  <a href="#/terms" className="font-medium text-sky-600 underline">
                    Terms &amp; Conditions
                  </a>
                  .
                </span>
              </label>
            </div>

            <button
              type="button"
              onClick={accept}
              disabled={!agreed}
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-sky-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
