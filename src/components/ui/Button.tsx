import { motion, useSpring } from "framer-motion";
import { useRef } from "react";
import type { PointerEvent as ReactPointerEvent, ReactNode, Ref } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import { useHasFinePointer, usePrefersReducedMotion } from "../../lib/hooks";

type Variant = "solid" | "accent" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

export type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: Variant;
  size?: Size;
  icon?: LucideIcon;
  /** Pulls the button gently toward the cursor. */
  magnetic?: boolean;
  external?: boolean;
  className?: string;
  "aria-label"?: string;
};

const VARIANTS: Record<Variant, string> = {
  solid: "bg-ink text-void hover:bg-ink-bright",
  accent: "bg-accent text-void hover:brightness-110",
  outline: "border border-line-strong text-ink hover:border-ink/35 hover:bg-ink/[0.045]",
  ghost: "text-ink-dim hover:text-ink",
};

const SIZES: Record<Size, string> = {
  sm: "h-9 gap-1.5 px-4 text-[13px]",
  md: "h-11 gap-2 px-6 text-sm",
  lg: "h-[3.25rem] gap-2.5 px-7 text-[0.95rem]",
};

export function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "solid",
  size = "md",
  icon: Icon,
  magnetic = false,
  external = false,
  className,
  ...rest
}: ButtonProps) {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();
  const fine = useHasFinePointer();
  const active = magnetic && fine && !reduced;

  const x = useSpring(0, { stiffness: 240, damping: 18, mass: 0.4 });
  const y = useSpring(0, { stiffness: 240, damping: 18, mass: 0.4 });

  const handleMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (!active || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    x.set(dx * 0.22);
    y.set(dy * 0.3);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const classes = cn(
    "group relative inline-flex select-none items-center justify-center overflow-hidden rounded-full",
    "font-medium tracking-[-0.01em] whitespace-nowrap",
    "transition-[background-color,border-color,color,filter] duration-400 ease-expo",
    VARIANTS[variant],
    SIZES[size],
    className,
  );

  const inner = (
    <>
      {variant === "solid" || variant === "accent" ? (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/10 to-transparent transition-transform duration-700 ease-expo group-hover:translate-x-full"
        />
      ) : null}
      <span className="relative z-10">{children}</span>
      {Icon ? (
        <Icon
          className="relative z-10 size-[1.05em] shrink-0 transition-transform duration-500 ease-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.75}
        />
      ) : null}
    </>
  );

  if (href) {
    return (
      <motion.a
        ref={ref as Ref<HTMLAnchorElement>}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer noopener" : undefined}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        style={active ? { x, y } : undefined}
        className={classes}
        {...rest}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as Ref<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={active ? { x, y } : undefined}
      className={classes}
      {...rest}
    >
      {inner}
    </motion.button>
  );
}
