import { cn } from "@/lib/utils";
import { Button } from "./button";

export const Form = ({
  children,
  className,
  onCancel,
  ...props
}: {
  children: React.ReactNode;
  onCancel: () => void;
} & React.FormHTMLAttributes<HTMLFormElement>) => {
  return (
    <form className={cn("my-6 flex flex-col gap-4", className)} {...props}>
      {children}
      <div className="flex gap-2">
        <Button
          type="button"
          size="sm"
          variant="secondary"
          className="w-full"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button type="submit" size="sm" variant="default" className="w-full">
          Save
        </Button>
      </div>
    </form>
  );
};
