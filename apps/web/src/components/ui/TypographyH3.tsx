import { cn } from "@/lib/utils";

export const TypographyH3 = ({
  children,
  ...props
}: React.HtmlHTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
}) => {
  return (
    <h3
      {...props}
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        props.className,
      )}
    >
      {children}
    </h3>
  );
};
