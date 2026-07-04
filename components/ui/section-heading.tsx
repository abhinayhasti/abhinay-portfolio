import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" && "text-center mx-auto",
        className
      )}
    >
      <p className="mb-4 text-sm font-medium tracking-[0.2em] text-sky-400/80 uppercase">
        {eyebrow}
      </p>

      <h2 className="bg-gradient-to-br from-white via-white to-white/40 bg-clip-text text-4xl leading-tight font-bold tracking-tight text-transparent md:text-6xl">
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-6 max-w-2xl text-lg leading-relaxed text-gray-400",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
