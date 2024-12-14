import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

export type ProgressBgColors = "blue" | "red" | "green" | "orange" | "primary";

interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  bgColor?: ProgressBgColors;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, bgColor = "primary", ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full",
      {
        "bg-primary/20": bgColor === "primary",
        "bg-blue-500/20": bgColor === "blue",
        "bg-red-500/20": bgColor === "red",
        "bg-orange-500/20": bgColor === "orange",
        "bg-green-500/20": bgColor === "green",
      },
      className,
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn("h-full w-full flex-1 transition-all", {
        "bg-primary": bgColor === "primary",
        "bg-blue-500": bgColor === "blue",
        "bg-red-500": bgColor === "red",
        "bg-orange-500": bgColor === "orange",
        "bg-green-500": bgColor === "green",
      })}
      style={{ transform: `translateY(${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
