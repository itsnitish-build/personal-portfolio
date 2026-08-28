export default function SectionDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className="relative w-full h-16 md:h-24 overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full ${flip ? "rotate-180" : ""}`}
        preserveAspectRatio="none"
      >
        <path
          d="M0 40 Q360 80 720 40 T1440 40 V80 H0 Z"
          fill="url(#divider-gradient)"
          opacity="0.3"
        />
        <defs>
          <linearGradient id="divider-gradient" x1="0" y1="0" x2="1440" y2="0">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
