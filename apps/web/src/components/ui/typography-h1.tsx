import { cn } from "@/lib/utils";

export const TypographyH1 = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
}) => {
  return (
    <h1
      {...props}
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        props.className,
      )}
    >
      {children}
    </h1>
  );
};
