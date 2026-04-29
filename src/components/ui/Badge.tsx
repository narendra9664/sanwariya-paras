import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "solid" | "outline" | "text";
  children: React.ReactNode;
}

export default function Badge({ variant = "solid", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center font-semibold rounded-full",
        {
          "bg-accent text-white px-3 py-1 text-xs shadow-sm": variant === "solid",
          "border border-accent text-accent px-3 py-1 text-xs": variant === "outline",
          "text-accent tracking-widest uppercase text-sm": variant === "text",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
