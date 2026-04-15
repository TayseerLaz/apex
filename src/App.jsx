import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Building2,
  Wrench,
  Zap,
  Paintbrush2,
  Phone,
  Mail,
  ArrowRight,
  Check,
  ChevronDown,
  Moon,
  SunMedium,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import topImage from "./assets/top.jpg";
import service1Image from "./assets/service1.png";
import service2Image from "./assets/service2.jpg";
import service3Image from "./assets/service3.jpg";
import service4Image from "./assets/service4.jpg";

const services = [
  {
    icon: Wrench,
    title: "Repairs & Emergency Response",
    text: "From broken pipes to urgent furniture fixes, Apex coordinates the right specialist fast.",
    image: service1Image,
  },
  {
    icon: Zap,
    title: "Electrical & Technical Maintenance",
    text: "Power issues, lighting, socket failures, and office infrastructure support handled with precision.",
    image: service2Image,
  },
  {
    icon: Paintbrush2,
    title: "Walls, Surfaces & Workspace Upkeep",
    text: "Interior refreshes, repairs, repainting, and practical upkeep that keeps workplaces client-ready.",
    image: service3Image,
  },
  {
    icon: Building2,
    title: "Facility Operations Logistics",
    text: "A dependable layer between your company and the people who keep your space running.",
    image: service4Image,
  },
];

const whyApexFaqs = [
  {
    question: "How fast does Apex respond to urgent facility issues?",
    answer:
      "If it's an emergency, we can be there within 4 hours of recieving the work order, and in case it is not an emergency, we can have someone on site on the same day.",
  },
  {
    question: "Do you handle both emergency and planned maintenance?",
    answer:
      "Yes. Apex supports both emergencies and non-urgent issues, ensures that the facility remains operational at all times.",
  },
  {
    question: "Can Apex scale support across multiple States?",
    answer:
      "Absolutely. We operate in all 50 states , covering all industries.",
  },
];

const stats = [
  { value: "24/7", label: "Response mindset" },
  { value: "1 Hub", label: "For all facility requests" },
  { value: "360Ã‚Â°", label: "Operational oversight" },
  { value: "Ã¢Ë†Å¾", label: "Scalable support" },
];

const processJourney = [
  {
    id: "01",
    title: "Request received",
    text: "You report the issue once and we log urgency, scope, and location instantly.",
  },
  {
    id: "02",
    title: "Response coordinated",
    text: "Apex dispatches the right team and aligns access, timing, and communication.",
  },
  {
    id: "03",
    title: "Workplace restored",
    text: "The issue is closed cleanly and your workplace returns to full operation.",
  },
];

const stepPositions = [
  { x: "10%", y: "72%", trigger: 0.2 },
  { x: "43%", y: "39%", trigger: 0.5 },
  { x: "77%", y: "21%", trigger: 0.62 },
];

const mobileStepPositions = [
  { y: "12%", trigger: 0.22, side: "left" },
  { y: "41%", trigger: 0.46, side: "right" },
  { y: "70%", trigger: 0.62, side: "left" },
];

const scenes = [
  {
    title: "Office restoration",
    before: "/ac bad.png",
    after: "/ac good.png",
  },
  {
    title: "Electrical Solutions ",
    before: "/electric bad.png",
    after: "/electric good.png",
  },
  {
    title: "Plumbing",
    before: "/pipe bad.png",
    after: "/pipe good.png",
  },
  {
    title: "Structural repair",
    before: "/table bad.png",
    after: "/table good.png",
  },
];

const orbitItems = [
  { label: "Plumbing", angle: 0 },
  { label: "Electrical", angle: 90 },
  { label: "Furniture", angle: 180 },
  { label: "Interiors", angle: 270 },
];

const countryCodeOptions = [
  { code: "+1", label: "United States / Canada" },
  { code: "+7", label: "Russia / Kazakhstan" },
  { code: "+20", label: "Egypt" },
  { code: "+27", label: "South Africa" },
  { code: "+30", label: "Greece" },
  { code: "+31", label: "Netherlands" },
  { code: "+32", label: "Belgium" },
  { code: "+33", label: "France" },
  { code: "+34", label: "Spain" },
  { code: "+36", label: "Hungary" },
  { code: "+39", label: "Italy" },
  { code: "+40", label: "Romania" },
  { code: "+41", label: "Switzerland" },
  { code: "+43", label: "Austria" },
  { code: "+44", label: "United Kingdom" },
  { code: "+45", label: "Denmark" },
  { code: "+46", label: "Sweden" },
  { code: "+47", label: "Norway" },
  { code: "+48", label: "Poland" },
  { code: "+49", label: "Germany" },
  { code: "+51", label: "Peru" },
  { code: "+52", label: "Mexico" },
  { code: "+53", label: "Cuba" },
  { code: "+54", label: "Argentina" },
  { code: "+55", label: "Brazil" },
  { code: "+56", label: "Chile" },
  { code: "+57", label: "Colombia" },
  { code: "+58", label: "Venezuela" },
  { code: "+60", label: "Malaysia" },
  { code: "+61", label: "Australia" },
  { code: "+62", label: "Indonesia" },
  { code: "+63", label: "Philippines" },
  { code: "+64", label: "New Zealand" },
  { code: "+65", label: "Singapore" },
  { code: "+66", label: "Thailand" },
  { code: "+81", label: "Japan" },
  { code: "+82", label: "South Korea" },
  { code: "+84", label: "Vietnam" },
  { code: "+86", label: "China" },
  { code: "+90", label: "Turkey" },
  { code: "+91", label: "India" },
  { code: "+92", label: "Pakistan" },
  { code: "+93", label: "Afghanistan" },
  { code: "+94", label: "Sri Lanka" },
  { code: "+95", label: "Myanmar" },
  { code: "+98", label: "Iran" },
  { code: "+212", label: "Morocco" },
  { code: "+213", label: "Algeria" },
  { code: "+216", label: "Tunisia" },
  { code: "+218", label: "Libya" },
  { code: "+220", label: "Gambia" },
  { code: "+221", label: "Senegal" },
  { code: "+222", label: "Mauritania" },
  { code: "+223", label: "Mali" },
  { code: "+224", label: "Guinea" },
  { code: "+225", label: "Cote d'Ivoire" },
  { code: "+226", label: "Burkina Faso" },
  { code: "+227", label: "Niger" },
  { code: "+228", label: "Togo" },
  { code: "+229", label: "Benin" },
  { code: "+230", label: "Mauritius" },
  { code: "+231", label: "Liberia" },
  { code: "+232", label: "Sierra Leone" },
  { code: "+233", label: "Ghana" },
  { code: "+234", label: "Nigeria" },
  { code: "+235", label: "Chad" },
  { code: "+236", label: "Central African Republic" },
  { code: "+237", label: "Cameroon" },
  { code: "+238", label: "Cape Verde" },
  { code: "+239", label: "Sao Tome and Principe" },
  { code: "+240", label: "Equatorial Guinea" },
  { code: "+241", label: "Gabon" },
  { code: "+242", label: "Republic of the Congo" },
  { code: "+243", label: "DR Congo" },
  { code: "+244", label: "Angola" },
  { code: "+245", label: "Guinea-Bissau" },
  { code: "+248", label: "Seychelles" },
  { code: "+249", label: "Sudan" },
  { code: "+250", label: "Rwanda" },
  { code: "+251", label: "Ethiopia" },
  { code: "+252", label: "Somalia" },
  { code: "+253", label: "Djibouti" },
  { code: "+254", label: "Kenya" },
  { code: "+255", label: "Tanzania" },
  { code: "+256", label: "Uganda" },
  { code: "+257", label: "Burundi" },
  { code: "+258", label: "Mozambique" },
  { code: "+260", label: "Zambia" },
  { code: "+261", label: "Madagascar" },
  { code: "+262", label: "Reunion / Mayotte" },
  { code: "+263", label: "Zimbabwe" },
  { code: "+264", label: "Namibia" },
  { code: "+265", label: "Malawi" },
  { code: "+266", label: "Lesotho" },
  { code: "+267", label: "Botswana" },
  { code: "+268", label: "Eswatini" },
  { code: "+269", label: "Comoros" },
  { code: "+291", label: "Eritrea" },
  { code: "+297", label: "Aruba" },
  { code: "+298", label: "Faroe Islands" },
  { code: "+299", label: "Greenland" },
  { code: "+350", label: "Gibraltar" },
  { code: "+351", label: "Portugal" },
  { code: "+352", label: "Luxembourg" },
  { code: "+353", label: "Ireland" },
  { code: "+354", label: "Iceland" },
  { code: "+355", label: "Albania" },
  { code: "+356", label: "Malta" },
  { code: "+357", label: "Cyprus" },
  { code: "+358", label: "Finland" },
  { code: "+359", label: "Bulgaria" },
  { code: "+370", label: "Lithuania" },
  { code: "+371", label: "Latvia" },
  { code: "+372", label: "Estonia" },
  { code: "+373", label: "Moldova" },
  { code: "+374", label: "Armenia" },
  { code: "+375", label: "Belarus" },
  { code: "+376", label: "Andorra" },
  { code: "+377", label: "Monaco" },
  { code: "+378", label: "San Marino" },
  { code: "+380", label: "Ukraine" },
  { code: "+381", label: "Serbia" },
  { code: "+382", label: "Montenegro" },
  { code: "+383", label: "Kosovo" },
  { code: "+385", label: "Croatia" },
  { code: "+386", label: "Slovenia" },
  { code: "+387", label: "Bosnia and Herzegovina" },
  { code: "+389", label: "North Macedonia" },
  { code: "+420", label: "Czech Republic" },
  { code: "+421", label: "Slovakia" },
  { code: "+423", label: "Liechtenstein" },
  { code: "+500", label: "Falkland Islands" },
  { code: "+501", label: "Belize" },
  { code: "+502", label: "Guatemala" },
  { code: "+503", label: "El Salvador" },
  { code: "+504", label: "Honduras" },
  { code: "+505", label: "Nicaragua" },
  { code: "+506", label: "Costa Rica" },
  { code: "+507", label: "Panama" },
  { code: "+508", label: "Saint Pierre and Miquelon" },
  { code: "+509", label: "Haiti" },
  { code: "+590", label: "Guadeloupe / Saint Martin" },
  { code: "+591", label: "Bolivia" },
  { code: "+592", label: "Guyana" },
  { code: "+593", label: "Ecuador" },
  { code: "+594", label: "French Guiana" },
  { code: "+595", label: "Paraguay" },
  { code: "+596", label: "Martinique" },
  { code: "+597", label: "Suriname" },
  { code: "+598", label: "Uruguay" },
  { code: "+599", label: "Curacao / Caribbean Netherlands" },
  { code: "+670", label: "Timor-Leste" },
  { code: "+673", label: "Brunei" },
  { code: "+674", label: "Nauru" },
  { code: "+675", label: "Papua New Guinea" },
  { code: "+676", label: "Tonga" },
  { code: "+677", label: "Solomon Islands" },
  { code: "+678", label: "Vanuatu" },
  { code: "+679", label: "Fiji" },
  { code: "+680", label: "Palau" },
  { code: "+681", label: "Wallis and Futuna" },
  { code: "+682", label: "Cook Islands" },
  { code: "+683", label: "Niue" },
  { code: "+685", label: "Samoa" },
  { code: "+686", label: "Kiribati" },
  { code: "+687", label: "New Caledonia" },
  { code: "+688", label: "Tuvalu" },
  { code: "+689", label: "French Polynesia" },
  { code: "+690", label: "Tokelau" },
  { code: "+691", label: "Micronesia" },
  { code: "+692", label: "Marshall Islands" },
  { code: "+850", label: "North Korea" },
  { code: "+852", label: "Hong Kong" },
  { code: "+853", label: "Macao" },
  { code: "+855", label: "Cambodia" },
  { code: "+856", label: "Laos" },
  { code: "+880", label: "Bangladesh" },
  { code: "+886", label: "Taiwan" },
  { code: "+960", label: "Maldives" },
  { code: "+961", label: "Lebanon" },
  { code: "+962", label: "Jordan" },
  { code: "+963", label: "Syria" },
  { code: "+964", label: "Iraq" },
  { code: "+965", label: "Kuwait" },
  { code: "+966", label: "Saudi Arabia" },
  { code: "+967", label: "Yemen" },
  { code: "+968", label: "Oman" },
  { code: "+970", label: "Palestine" },
  { code: "+971", label: "United Arab Emirates" },
  { code: "+973", label: "Bahrain" },
  { code: "+974", label: "Qatar" },
  { code: "+975", label: "Bhutan" },
  { code: "+976", label: "Mongolia" },
  { code: "+977", label: "Nepal" },
  { code: "+992", label: "Tajikistan" },
  { code: "+993", label: "Turkmenistan" },
  { code: "+994", label: "Azerbaijan" },
  { code: "+995", label: "Georgia" },
  { code: "+996", label: "Kyrgyzstan" },
  { code: "+998", label: "Uzbekistan" },
];

function TimelineStep({ step, pos, scrollProgress, glass, theme, compact = false }) {
  const opacity = useTransform(
    scrollProgress,
    [pos.trigger - 0.15, pos.trigger],
    [0, 1]
  );
  const yOffset = useTransform(
    scrollProgress,
    [pos.trigger - 0.15, pos.trigger],
    [40, 0]
  );
  const dotScale = useTransform(
    scrollProgress,
    [pos.trigger - 0.15, pos.trigger],
    [0.6, 1]
  );

  return (
    <motion.div
      className={`absolute ${compact ? "w-[190px]" : "w-[220px]"}`}
      style={{
        left: pos.x,
        top: pos.y,
        opacity,
        y: yOffset,
      }}
    >
      <motion.div
        className="mx-auto mb-3 h-4 w-4 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.5)]"
        style={{ scale: dotScale }}
      />

      <div className="mb-2 text-center text-xs font-bold uppercase tracking-widest text-sky-400">
        {step.id}
      </div>

      <div
        className={`rounded-2xl border p-4 backdrop-blur-md ${glass}`}
      >
        <div className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-sky-400">
          Step {step.id}
        </div>
        <div
          className={`mb-1 text-sm font-bold ${
            theme === "dark" ? "text-white" : "text-slate-900"
          }`}
        >
          {step.title}
        </div>
        <div
          className={`text-xs leading-relaxed ${
            theme === "dark" ? "text-slate-400" : "text-slate-500"
          }`}
        >
          {step.text}
        </div>
      </div>
    </motion.div>
  );
}

function MobileTimelineStep({ step, pos, scrollProgress, glass, theme }) {
  const opacity = useTransform(
    scrollProgress,
    [pos.trigger - 0.15, pos.trigger],
    [0, 1]
  );
  const xOffset = useTransform(
    scrollProgress,
    [pos.trigger - 0.15, pos.trigger],
    [pos.side === "left" ? -20 : 20, 0]
  );
  const dotScale = useTransform(
    scrollProgress,
    [pos.trigger - 0.15, pos.trigger],
    [0.6, 1]
  );

  return (
    <motion.div
      className={`absolute w-[calc(50%-1.1rem)] max-w-[170px] ${
        pos.side === "left" ? "left-1" : "right-1"
      }`}
      style={{
        top: pos.y,
        opacity,
        x: xOffset,
      }}
    >
      <motion.div
        className={`absolute top-2 h-3.5 w-3.5 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.55)] ${
          pos.side === "left" ? "-right-4" : "-left-4"
        }`}
        style={{ scale: dotScale }}
      />

      <div className={`rounded-2xl border p-3 backdrop-blur-md ${glass}`}>
        <div className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-sky-400">
          Step {step.id}
        </div>
        <div
          className={`mb-1 text-sm font-bold ${
            theme === "dark" ? "text-white" : "text-slate-900"
          }`}
        >
          {step.title}
        </div>
        <div
          className={`text-xs leading-relaxed ${
            theme === "dark" ? "text-slate-400" : "text-slate-500"
          }`}
        >
          {step.text}
        </div>
      </div>
    </motion.div>
  );
}

function WorkplaceJourney({ theme, glass }) {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 25%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.35,
  });
  const pathLength = useTransform(smoothProgress, [0, 0.5], [0, 1]);
  const lineOpacity = useTransform(smoothProgress, [0, 0.08], [0.25, 1]);

  return (
    <div ref={sectionRef}>
      <div className="mb-12 text-center">
        <h2
          className={`text-3xl font-extrabold tracking-tight md:text-4xl ${
            theme === "dark" ? "text-white" : "text-slate-900"
          }`}
        >
          Workplace Journey
        </h2>
        <p
          className={`mt-2 text-base ${
            theme === "dark" ? "text-sky-300" : "text-sky-600"
          }`}
        >
          From issue to resolution, tracked in one clean flow.
        </p>
        <p
          className={`mx-auto mt-2 max-w-xl text-sm ${
            theme === "dark" ? "text-slate-400" : "text-slate-500"
          }`}
        >
          A visual process line that starts at the first report and moves
          checkpoint by checkpoint until the workspace is fully restored.
        </p>
      </div>

      <div className="relative hidden min-h-[420px] md:block">
        <svg
          viewBox="0 0 900 320"
          fill="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M60,260 C200,260 200,130 450,130 C700,130 700,60 840,60"
            stroke="url(#skyGradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            style={{ pathLength, opacity: lineOpacity }}
          />
          <defs>
            <linearGradient id="skyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>

        {stepPositions.map((pos, idx) => (
          <TimelineStep
            key={idx}
            step={processJourney[idx]}
            pos={pos}
            scrollProgress={smoothProgress}
            glass={glass}
            theme={theme}
          />
        ))}
      </div>

      <div className="relative min-h-[540px] md:hidden">
        <svg
          viewBox="0 0 320 540"
          fill="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M160,34 C160,140 160,140 160,248 C160,356 160,356 160,506"
            stroke="url(#skyGradientMobile)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            style={{ pathLength, opacity: lineOpacity }}
          />
          <defs>
            <linearGradient id="skyGradientMobile" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>

        {mobileStepPositions.map((pos, idx) => (
          <MobileTimelineStep
            key={`mobile-${idx}`}
            step={processJourney[idx]}
            pos={pos}
            scrollProgress={smoothProgress}
            glass={glass}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
}

function LogoMark({ dark = false, className = "" }) {
  return (
    <div className={`relative h-14 w-14 ${className}`}>
      <div
        className={`absolute inset-0 rounded-full border-[6px] ${
          dark ? "border-slate-500/80" : "border-slate-400/80"
        }`}
        style={{ clipPath: "inset(0 0 0 18%)" }}
      />
      <div
        className="absolute inset-0 rounded-full border-[7px] border-sky-500"
        style={{ clipPath: "inset(0 18% 0 0)" }}
      />
      <div className="absolute left-[18px] top-[13px] flex items-end gap-[3px]">
        <span className={`block h-5 w-2 skew-x-[-18deg] ${dark ? "bg-white" : "bg-slate-500"}`} />
        <span className={`block h-8 w-2 skew-x-[-18deg] ${dark ? "bg-white" : "bg-slate-500"}`} />
        <span className={`block h-10 w-2 skew-x-[-18deg] ${dark ? "bg-white" : "bg-slate-500"}`} />
        <span className={`block h-7 w-2 skew-x-[-18deg] ${dark ? "bg-white" : "bg-slate-500"}`} />
      </div>
      <div className="absolute bottom-[10px] left-[11px] h-0 w-0 border-b-[14px] border-l-[18px] border-r-[18px] border-b-sky-500 border-l-transparent border-r-transparent" />
    </div>
  );
}

function ThemeToggle({ theme, setTheme }) {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full border-white/20 bg-white/10 backdrop-blur text-current hover:bg-white/20"
    >
      {theme === "dark" ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}

function CountryCodePicker({ value, onChange, theme }) {
  const [open, setOpen] = useState(false);
  const selected =
    countryCodeOptions.find((opt) => opt.code === value) || countryCodeOptions[0];

  return (
    <div
      tabIndex={0}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
      className="relative"
    >
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className={`flex h-10 w-full items-center justify-between rounded-2xl border px-3 text-sm transition ${
          theme === "dark"
            ? "border-white/20 bg-transparent text-slate-200 hover:border-sky-500/45"
            : "border-slate-300 bg-white/70 text-slate-700 hover:border-sky-500/55"
        }`}
      >
        <span className="font-medium">{selected.code}</span>
        <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className={`absolute z-30 mt-2 max-h-64 w-[280px] overflow-y-auto rounded-2xl border shadow-xl ${
              theme === "dark"
                ? "border-white/20 bg-[#0f1f2f]/95 backdrop-blur"
                : "border-slate-200 bg-white/95 backdrop-blur"
            }`}
          >
            {countryCodeOptions.map((option) => (
              <button
                key={`${option.code}-${option.label}`}
                type="button"
                onClick={() => {
                  onChange(option.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition ${
                  option.code === value
                    ? theme === "dark"
                      ? "bg-sky-500/20 text-sky-200"
                      : "bg-sky-100 text-sky-700"
                    : theme === "dark"
                      ? "text-slate-200 hover:bg-white/10"
                      : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <span className="w-12 shrink-0 font-semibold">{option.code}</span>
                <span className="truncate">{option.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FloatingOrbital() {
  return (
    <div className="relative mx-auto h-[380px] w-[380px] max-w-full">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
        className="absolute inset-0"
      >
        <div className="absolute inset-5 rounded-full border border-sky-400/20" />
        <div className="absolute inset-12 rounded-full border border-slate-400/20" />
        {orbitItems.map((item) => (
          <div
            key={item.label}
            className="absolute left-1/2 top-1/2"
            style={{ transform: `rotate(${item.angle}deg) translateY(-150px)` }}
          >
            <div className="-translate-x-1/2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white backdrop-blur">
              {item.label}
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-[72px] rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 p-8 shadow-2xl"
      >
        <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-white/10 bg-black/20 p-6">
          <div className="flex items-center justify-between">
            <LogoMark dark />
            <Sparkles className="h-5 w-5 text-sky-400" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.45em] text-sky-300">Apex Global</div>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              Facility flow, repaired with precision.
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Logistics for the problems companies canÃ¢â‚¬â„¢t afford to leave unresolved.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs text-slate-300">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">Dispatch-ready teams</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">Workspace-first approach</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ApexGlobalLandingPage() {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [countryCode, setCountryCode] = useState("+971");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    if (!sent) return;
    const timeout = setTimeout(() => setSent(false), 2500);
    return () => clearTimeout(timeout);
  }, [sent]);

  const mailtoLink = useMemo(() => {
    const subject = encodeURIComponent("Facility Support Request");
    const body = encodeURIComponent(
      "Hello Apex Global,%0D%0A%0D%0AI'd like to discuss facility management support for our office/company.%0D%0A%0D%0AName:%0D%0ACompany:%0D%0AIssue / Need:%0D%0ALocation:%0D%0A%0D%0AThank you."
    );
    return `mailto:hello@apexglobalfm.com?subject=${subject}&body=${body}`;
  }, []);

  const shell =
    theme === "dark"
      ? "bg-[#0d1b2a] text-white"
      : "bg-[#f3f8fe] text-slate-900";

  const glass =
    theme === "dark"
      ? "border-white/10 bg-white/5"
      : "border-slate-200 bg-white/80";

  return (
    <div className={`${shell} relative isolate min-h-screen overflow-x-hidden transition-colors duration-500`}>
      <div className="fixed left-0 right-0 top-0 z-50 h-1 bg-white/10">
        <motion.div className="h-full bg-sky-500 origin-left" style={{ scaleX: scrollYProgress }} />
      </div>
      <div className="relative z-10">
      <header
        className={`sticky top-0 z-40 backdrop-blur-xl ${
          theme === "dark" ? "bg-inherit/70" : "bg-[#f3f8fe]/80"
        }`}
      >
        <div className="mx-auto flex max-w-[92rem] items-center px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Apex Global logo" className="h-14 w-auto object-contain" />
            <div>
              <div className="text-sm font-semibold tracking-[0.3em] text-sky-500">APEX GLOBAL</div>
              <div className={`text-xs ${theme === "dark" ? "text-slate-300" : "text-slate-500"}`}>
                Facility Management LLC.
              </div>
            </div>
          </div>

          <nav className="ml-auto hidden items-center gap-8 md:flex">
            {[
              ["Services", "#services"],
              ["Why Apex", "#why-apex"],
              ["Visuals", "#visuals"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="text-sm transition hover:text-sky-500">
                {label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-3 md:hidden">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-white/10 bg-transparent md:hidden"
              onClick={() => setMenuOpen((s) => !s)}
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`border-t md:hidden ${theme === "dark" ? "border-white/10" : "border-slate-200"}`}
            >
              <div className="flex flex-col gap-4 px-6 py-5">
                {[
                  ["Services", "#services"],
                  ["Why Apex", "#why-apex"],
                  ["Visuals", "#visuals"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <a key={label} href={href} onClick={() => setMenuOpen(false)}>
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <section className="relative mx-auto min-h-[calc(100vh-86px)] max-w-[92rem] px-6 pb-10 pt-0 lg:px-8 lg:pb-12">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:items-center">
          <div className="lg:-mt-3">
            <h1 className="mt-1 text-4xl font-semibold leading-tight md:text-6xl">
              <span className="block">We keep the</span>
              <span className="block">workplace</span>
              <span className="block">
                <span className="relative inline-block text-sky-500">
                  <span className="relative z-10">in motion</span>
                  <motion.span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-20 select-none bg-[linear-gradient(104deg,rgba(203,213,225,0)_14%,rgba(203,213,225,0.32)_37%,rgba(241,245,249,0.72)_50%,rgba(203,213,225,0.34)_63%,rgba(203,213,225,0)_86%)] bg-clip-text text-transparent [background-size:230%_100%] drop-shadow-[0_0_8px_rgba(148,163,184,0.58)]"
                    animate={{ backgroundPosition: ["160% 0%", "-160% 0%"] }}
                    transition={{ duration: 6.2, ease: "easeInOut", repeat: Infinity }}
                  >
                    in motion
                  </motion.span>
                </span>
              </span>
            </h1>

            <p className={`mt-3 max-w-lg text-base md:text-lg ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
              Apex Global manages the operational pressure behind offices and companies: repairs, urgent dispatch, and facility logistics that keep business running.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="group relative block select-none overflow-hidden rounded-xl bg-sky-500 px-7 py-4 text-white transition-colors duration-300 hover:text-slate-800"
              >
                <span className="relative z-10 flex items-center gap-2 font-medium">
                  Get facility support
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="pointer-events-none absolute inset-0 z-0 rounded-xl border-4 border-sky-500">
                  <span className="absolute left-1/2 top-1/2 h-[500%] w-0 -translate-x-1/2 -translate-y-1/2 -rotate-[60deg] bg-white transition-[width,transform] duration-500 ease-out group-hover:w-[130%] group-hover:-rotate-90 group-active:bg-slate-100" />
                </span>
              </motion.a>

              <motion.a
                href="#services"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={`group relative overflow-hidden rounded-xl border px-6 py-4 transition ${
                  theme === "dark"
                    ? "border-slate-300/30 bg-gradient-to-b from-slate-500/35 via-slate-400/25 to-slate-500/35 text-slate-100 hover:from-slate-400/40 hover:via-slate-300/30 hover:to-slate-500/35"
                    : "border-slate-300 bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300 text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_20px_-16px_rgba(71,85,105,0.65)] hover:from-slate-50 hover:via-slate-200 hover:to-slate-300"
                }`}
              >
                <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 rotate-12 bg-white/55 blur-md transition-transform duration-500 group-hover:translate-x-[360%]" />
                <span className="relative z-10">Explore services</span>
              </motion.a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-y-4 gap-x-1 sm:grid-cols-4">
              {[
                ["24/7", "Response mindset"],
                ["1 Hub", "All requests"],
                ["360\u00B0", "Full oversight"],
                ["\u221E", "Scalable support"],
              ].map(([num, label]) => (
                <div
                  key={num}
                  className={`group relative mx-auto flex aspect-square w-full max-w-[98px] flex-col items-center justify-center overflow-hidden rounded-xl border text-center transition ${
                    theme === "dark"
                      ? "border-slate-300/30 bg-gradient-to-b from-slate-500/35 via-slate-400/25 to-slate-500/35"
                      : "border-slate-300/90 bg-white/65 hover:border-slate-300 hover:bg-gradient-to-b hover:from-slate-100 hover:via-slate-200 hover:to-slate-300 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_20px_-16px_rgba(71,85,105,0.65)]"
                  }`}
                >
                  <span className="pointer-events-none absolute inset-y-0 -left-1/3 z-0 w-1/3 rotate-12 bg-white/50 blur-md opacity-0 transition-all duration-500 group-hover:translate-x-[360%] group-hover:opacity-100" />
                  <div className="pointer-events-none absolute -inset-[4px] z-20 rounded-[16px] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:drop-shadow-[0_0_10px_rgba(14,165,233,0.5)]">
                    <svg viewBox="0 0 120 120" fill="none" className="h-full w-full">
                      <rect x="4" y="4" width="112" height="112" rx="15" stroke="rgba(56,189,248,0.5)" strokeWidth="1.2" />
                      <rect x="4" y="4" width="112" height="112" rx="15" stroke="#0ea5e9" strokeWidth="2.3" strokeLinecap="round" strokeDasharray="52 420">
                        <animate attributeName="stroke-dashoffset" from="0" to="-472" dur="3.2s" repeatCount="indefinite" />
                      </rect>
                      <rect x="4" y="4" width="112" height="112" rx="15" stroke="#7dd3fc" strokeWidth="2.3" strokeLinecap="round" strokeDasharray="52 420">
                        <animate attributeName="stroke-dashoffset" from="-236" to="-708" dur="3.2s" repeatCount="indefinite" />
                      </rect>
                    </svg>
                  </div>
                  <div
                    className={`relative z-10 font-semibold leading-none text-sky-400 ${
                      num === "\u221E" ? "text-3xl" : "text-xl"
                    }`}
                  >
                    {num}
                  </div>
                  <div className={`relative z-10 text-xs leading-4 ${theme === "dark" ? "text-slate-300" : "text-slate-500"}`}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-0 flex justify-center lg:-mt-1 lg:translate-x-6">
            <div className="relative w-full max-w-[615px]">
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative h-[485px] w-full overflow-hidden rounded-[2.25rem] border border-white/15 shadow-[0_40px_90px_-45px_rgba(15,23,42,0.55)]"
                style={{
                  WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 24%, black 100%)",
                  maskImage: "linear-gradient(to right, transparent 0%, black 24%, black 100%)",
                }}
              >
                <img
                  src={topImage}
                  alt="Modern office environment"
                  className="h-full w-full object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-300/15 via-transparent to-slate-300/20" />
              </motion.div>
              <div
                className={`pointer-events-none absolute left-0 top-0 h-full w-[54%] bg-gradient-to-r ${
                  theme === "dark"
                    ? "from-[#0d1b2a] via-[#0d1b2a]/75 to-transparent"
                    : "from-[#f7fbff] via-[#f7fbff]/80 to-transparent"
                }`}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-[92rem] px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="text-sm uppercase tracking-[0.35em] text-sky-500">Services</div>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Built for real issues, not generic promises.</h2>
          </div>
          <p className={`max-w-2xl text-lg leading-8 ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
            Apex delivers a modern approach to facility management, combining responsive systems with seamless coordination to support efficient, real time operations and performance.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const imageOrder = index % 2 === 0 ? "md:order-1" : "md:order-2";
            const textOrder = index % 2 === 0 ? "md:order-2" : "md:order-1";
            const isServiceTwo = index === 1;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ delay: index * 0.06, duration: 0.62 }}
                className="group"
              >
                <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
                  <div
                    className={`${imageOrder} relative w-full ${
                      isServiceTwo
                        ? "aspect-[18/9] max-w-[300px] md:max-w-[380px] lg:max-w-[445px]"
                        : "aspect-[16/9] max-w-[255px] md:max-w-[320px] lg:max-w-[365px]"
                    } md:justify-self-center`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className={`h-full w-full transition duration-500 group-hover:scale-[1.01] ${
                        isServiceTwo ? "object-contain" : "object-cover"
                      }`}
                    />
                  </div>

                  <div className={`${textOrder}`}>
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-sky-500" />
                      <div className="text-xs font-semibold uppercase tracking-[0.26em] text-sky-500">
                        Service {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    <h3 className="mt-4 text-xl font-semibold leading-tight md:text-2xl">
                      {service.title}
                    </h3>
                    <p className={`mt-3 max-w-xl text-sm leading-7 md:text-base ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
                      {service.text}
                    </p>

                    <a
                      href="#contact"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-500 transition hover:text-sky-600"
                    >
                      Request this service
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="visuals" className="mx-auto max-w-[92rem] px-6 py-20 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.35em] text-sky-500">Visual direction</div>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Before & after. Problems solved visually.
            </h2>
          </div>
          <p className={`max-w-2xl leading-7 ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
            Hover to see how Apex transforms broken environments into clean, functional workspaces.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {scenes.map((scene, index) => (
            <motion.div
              key={scene.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.07, duration: 0.6 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src={scene.before}
                  alt="before"
                  className="h-[360px] w-full object-cover"
                />

                <img
                  src={scene.after}
                  alt="after"
                  className="absolute inset-0 h-full w-full object-cover
                             opacity-0 group-hover:opacity-100
                             transition duration-700 ease-in-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
                    <div className="text-lg font-medium text-white">
                      {scene.title}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[92rem] px-6 py-20 lg:px-8">
        <WorkplaceJourney theme={theme} glass={glass} />
      </section>

      <section id="why-apex" className="mx-auto max-w-[92rem] px-6 py-20 lg:px-8">
        <div className={`rounded-[2rem] border px-6 py-10 md:px-10 md:py-12 ${glass}`}>
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-sm uppercase tracking-[0.35em] text-sky-500">FAQs</div>
              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                Any questions?
                <span className="block">We got you.</span>
              </h2>
              <p className={`mt-6 max-w-md text-base leading-8 ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
                A cleaner way to understand how Apex works: fast response, practical coordination, and dependable facility support.
              </p>
              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-sky-400 transition hover:text-sky-300"
              >
                More FAQs <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: 0.08, duration: 0.6 }}
              className="lg:self-center lg:pl-3"
            >
              {whyApexFaqs.map((item, idx) => {
                const isOpen = idx === activeFaq;
                return (
                  <div key={item.question} className={`${theme === "dark" ? "border-slate-500/35" : "border-slate-300"} border-b`}>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveFaq((current) => (current === idx ? null : idx))
                      }
                      className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span
                        className={`text-base font-semibold leading-snug transition-colors ${
                          isOpen
                            ? "text-sky-400"
                            : theme === "dark"
                              ? "text-slate-100 group-hover:text-sky-300"
                              : "text-slate-900 group-hover:text-sky-600"
                        }`}
                      >
                        {item.question}
                      </span>
                      <span
                        className={`text-2xl leading-none transition-transform duration-300 ${
                          isOpen
                            ? "rotate-180 text-sky-400"
                            : theme === "dark"
                              ? "text-slate-400 group-hover:text-sky-300"
                              : "text-slate-500 group-hover:text-sky-600"
                        }`}
                      >
                        {isOpen ? "-" : "+"}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className={`pb-6 pr-8 text-sm leading-8 ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-[92rem] px-6 pb-24 pt-10 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.35em] text-sky-500">Contact us</div>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Let us build the cleaner next version.</h2>
            <p className={`mt-5 max-w-xl text-lg leading-8 ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
              Enter your contact details and a brief description of your facility needs or inquiries , and we'll be in touch you to discuss how we can support you.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-sky-500" /> <span>+971 XX XXX XXXX</span></div>
              <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-sky-500" /> <span>info@apexglobalfm.com</span></div>
            </div>
          </div>

          <motion.form
            onSubmit={async (e) => {
              e.preventDefault();
              setSent(false);
              setIsSubmitting(true);

              const formData = new FormData(e.target);

              const data = {
                name: formData.get("name"),
                email: formData.get("email"),
                phone: `${countryCode} ${formData.get("phone")}`,
                company: formData.get("company"),
                location: formData.get("location"),
                message: formData.get("message"),
              };

              try {
                await fetch("http://localhost:5000/api/contact", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(data),
                });

                setSent(true);
              } catch (err) {
                console.error(err);
              } finally {
                setIsSubmitting(false);
              }
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className={`relative w-full max-w-[560px] justify-self-end rounded-[2rem] border p-4 md:p-5 ${glass}`}
          >
            <div className="grid gap-3 md:grid-cols-2">
              <Input
                required
                name="name"
                placeholder="Your name"
                className={`h-10 rounded-2xl bg-transparent text-sm ${theme === "dark" ? "border-white/20" : "border-slate-300"}`}
              />
              <Input
                required
                name="email"
                type="email"
                placeholder="Work email"
                className={`h-10 rounded-2xl bg-transparent text-sm ${theme === "dark" ? "border-white/20" : "border-slate-300"}`}
              />
              <Input
                name="company"
                placeholder="Company"
                className={`h-10 rounded-2xl bg-transparent text-sm ${theme === "dark" ? "border-white/20" : "border-slate-300"}`}
              />
              <Input
                name="location"
                placeholder="Location"
                className={`h-10 rounded-2xl bg-transparent text-sm ${theme === "dark" ? "border-white/20" : "border-slate-300"}`}
              />
              <div className="flex items-center gap-2 md:col-span-2">
                <div className="w-[120px] shrink-0">
                  <CountryCodePicker value={countryCode} onChange={setCountryCode} theme={theme} />
                </div>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone number"
                  className={`h-10 w-[150px] shrink-0 rounded-2xl border bg-transparent px-3 text-sm ${
                    theme === "dark"
                      ? "border-white/20 text-slate-200 placeholder:text-slate-400"
                      : "border-slate-300 text-slate-700 placeholder:text-slate-400"
                  }`}
                />
              </div>
              <Textarea
                name="message"
                placeholder="Tell us what needs attention..."
                className={`min-h-[120px] rounded-2xl bg-transparent text-sm md:col-span-2 ${theme === "dark" ? "border-white/20" : "border-slate-300"}`}
              />
            </div>
            <div className="mt-5 flex justify-end">
              <motion.div
                animate={
                  isSubmitting
                    ? { scale: [1, 1.04, 1], y: [0, -1, 0] }
                    : sent
                      ? { scale: [1, 1.08, 1], rotate: [0, -2, 0] }
                      : { scale: 1, rotate: 0, y: 0 }
                }
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-10 items-center whitespace-nowrap rounded-full bg-sky-500 px-6 text-white hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : "Send request"}
                  <motion.span
                    className="ml-2 inline-flex"
                    animate={isSubmitting ? { x: [0, 3, 0] } : { x: 0 }}
                    transition={{ duration: 0.6, repeat: isSubmitting ? Infinity : 0 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Button>
              </motion.div>
            </div>
          </motion.form>
        </div>
      </section>

      <footer
        className={`border-t ${
          theme === "dark" ? "border-white/10" : "border-slate-300/70"
        }`}
      >
        <div className="mx-auto flex max-w-[92rem] items-center justify-center px-6 py-4 text-center text-sm lg:px-8">
          <p className={theme === "dark" ? "text-slate-400" : "text-slate-500"}>
            Copyright {new Date().getFullYear()} Apex Global Facility Management LLC.
          </p>
        </div>
      </footer>

      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/30 px-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.86, rotate: -8 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, y: 14, scale: 0.94 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-sm rounded-2xl border border-emerald-200 bg-white p-6 text-center shadow-[0_28px_70px_-30px_rgba(16,185,129,0.45)]"
            >
              <motion.div
                initial={{ opacity: 0, rotate: -220, scale: 0.3 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 17 }}
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 ring-4 ring-emerald-50"
              >
                <Check className="h-9 w-9 text-emerald-600" />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.25 }}
                className="mt-4 text-xl font-semibold text-slate-900"
              >
                Submission Confirmed
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.14, duration: 0.25 }}
                className="mt-2 text-sm leading-6 text-slate-600"
              >
                Your request was sent successfully.
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
}
