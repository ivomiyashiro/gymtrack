import { cn } from "@/lib/utils";
import React from "react";

export function TypographyP({
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement> & {
  children: React.ReactNode;
}) {
  return (
    <p {...props} className={cn("leading-7", props.className)}>
      {children}
    </p>
  );
}
