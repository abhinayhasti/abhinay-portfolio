import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function GlassCard({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300",
        "hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_0_40px_-15px_rgba(56,189,248,0.35)]",
        className
      )}
      {...props}
    >
      {/* top hairline highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {children}
    </div>
  );
}
