import React from "react";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";

export default function LegalLayout({ title, effectiveDate, lastUpdated, children }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f3f8fe] text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-300/70 bg-[#f3f8fe]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[92rem] items-center px-6 py-4 lg:px-8">
          <a href="#/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Apex Global logo" className="h-14 w-auto object-contain" />
            <div>
              <div className="text-sm font-semibold tracking-[0.3em] text-sky-500">APEX GLOBAL</div>
              <div className="text-xs text-slate-500">Facility Management LLC.</div>
            </div>
          </a>
          <a
            href="#/"
            className="ml-auto inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:text-sky-500"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to site
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12 lg:px-8 lg:py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h1>
        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-500">
          {effectiveDate && <span>Effective Date: {effectiveDate}</span>}
          {lastUpdated && <span>Last Updated: {lastUpdated}</span>}
        </div>
        <div className="mt-8 space-y-8 text-[15px] leading-7 text-slate-600">{children}</div>
      </main>

      <footer className="border-t border-slate-300/70">
        <div className="mx-auto flex max-w-[92rem] flex-col items-center gap-3 px-6 py-6 text-center text-sm text-slate-500 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-sky-500" /> 101 Ipswich Ct, Dover, Delaware 19901
            </span>
            <a href="tel:+13028100018" className="inline-flex items-center gap-2 transition hover:text-sky-500">
              <Phone className="h-4 w-4 text-sky-500" /> (302) 810-0018
            </a>
            <a href="mailto:info@apexglobalfm.com" className="inline-flex items-center gap-2 transition hover:text-sky-500">
              <Mail className="h-4 w-4 text-sky-500" /> info@apexglobalfm.com
            </a>
          </div>
          <p>Copyright {new Date().getFullYear()} Apex Global Facility Management LLC.</p>
        </div>
      </footer>
    </div>
  );
}

export function Section({ heading, children }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-slate-900">{heading}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

export function Bullets({ items }) {
  return (
    <ul className="ml-5 list-disc space-y-1.5">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
