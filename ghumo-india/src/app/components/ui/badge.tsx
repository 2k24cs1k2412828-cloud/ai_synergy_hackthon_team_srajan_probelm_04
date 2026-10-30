import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-[11px] font-semibold w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1.5 [&>svg]:pointer-events-none transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-[var(--color-border)] bg-[var(--color-surface-secondary)] text-[var(--color-text-primary)] shadow-2xs",
        secondary:
          "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)]",
        verified:
          "border-[#183D32]/20 dark:border-[#34D399]/30 bg-[#183D32]/10 dark:bg-[#34D399]/15 text-[#183D32] dark:text-[#34D399] font-medium",
        heritage:
          "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] font-medium tracking-tight",
        live:
          "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] font-medium",
        accent:
          "border-[#A94327]/25 bg-[#A94327]/10 text-[#A94327] dark:text-[#E06D4E]",
        gold:
          "border-[#A77C35]/30 bg-[#A77C35]/10 text-[#A77C35] dark:text-[#D6A85B]",
        warning:
          "border-[#8A4B08]/25 bg-[#8A4B08]/10 text-[#8A4B08] dark:text-[#FBBF24]",
        destructive:
          "border-[#991B1B]/25 bg-[#991B1B]/10 text-[#991B1B] dark:text-[#F87171]",
        outline:
          "border-[var(--color-border)] text-[var(--color-text-primary)] bg-transparent",
        category:
          "border-transparent bg-transparent text-[var(--color-text-secondary)] font-medium tracking-wider uppercase text-[10px] px-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
