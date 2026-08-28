interface SplitHeadingProps {
  label?: string;
  lines: string[];
  className?: string;
  accentLine?: number;
}

export default function SplitHeading({
  label,
  lines,
  className = "",
  accentLine,
}: SplitHeadingProps) {
  return (
    <div className={className}>
      {label && (
        <p className="section-label mb-6">{label}</p>
      )}
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] leading-[1.05]">
        {lines.map((line, i) => (
          <span
            key={line}
            className={`block ${
              accentLine === i ? "text-muted" : "text-foreground"
            }`}
          >
            {line}
          </span>
        ))}
      </h2>
    </div>
  );
}
