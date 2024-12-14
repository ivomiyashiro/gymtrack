import { useRef } from "react";
import { MinusIcon, PlusIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components";

const ButtonsWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center gap-2">{children}</div>;
};

const MinusButtons = ({
  steps,
  onClick,
}: {
  steps: number[];
  onClick: (value: number) => void;
}) => {
  return (
    <ButtonsWrapper>
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 shrink-0 rounded-full hover:bg-background/50"
        onClick={() => onClick(1)}
      >
        <MinusIcon />
        <span className="sr-only">Decrease</span>
      </Button>
      {steps.map((step) => (
        <Button
          key={step}
          variant="outline"
          size="icon"
          className="h-8 w-8 shrink-0 rounded-full hover:bg-background/50"
          onClick={() => onClick(step)}
        >
          {step}
        </Button>
      ))}
    </ButtonsWrapper>
  );
};

const PlusButtons = ({
  steps,
  onClick,
}: {
  steps: number[];
  onClick: (value: number) => void;
}) => {
  return (
    <ButtonsWrapper>
      {steps.map((step) => (
        <Button
          key={step}
          variant="outline"
          size="icon"
          className="hover:bg- h-8 w-8 shrink-0 rounded-full hover:bg-background/50"
          onClick={() => onClick(step)}
        >
          {step}
        </Button>
      ))}
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 shrink-0 rounded-full hover:bg-background/50"
        onClick={() => onClick(1)}
      >
        <PlusIcon />
        <span className="sr-only">Increase</span>
      </Button>
    </ButtonsWrapper>
  );
};

export const InputCounter = ({
  className,
  isFocus = false,
  label,
  name,
  steps = [1],
  value = 0,
  onBlur,
  onChange,
  onFocus,
  onClick,
  onValueChange,
  ...props
}: {
  isFocus?: boolean;
  label: string;
  name?: string;
  steps?: number[];
  value?: number;
  onValueChange: (value: number, key: string) => void;
} & React.HTMLAttributes<HTMLInputElement>) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const stepsWithoutOne = steps.filter((step) => step !== 1);

  const handleDecrease = (step: number) => {
    const newValue = value - step;
    onValueChange(newValue >= 0 ? newValue : 0, name ?? "");
  };

  const handleIncrease = (step: number) => {
    const newValue = value + step;
    onValueChange(newValue >= 0 ? newValue : 0, name ?? "");
  };

  const handleFocus = () => inputRef.current?.focus();

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-lg bg-muted p-2",
        isFocus && "outline outline-ring",
      )}
    >
      <MinusButtons steps={stepsWithoutOne} onClick={handleDecrease} />
      <div
        tabIndex={0}
        className={cn(
          "flex h-full w-full items-center justify-center gap-2 text-center text-lg",
          className,
        )}
        onFocus={handleFocus}
      >
        <input
          name={name}
          ref={inputRef}
          type="number"
          value={value}
          className="pointer-events-none absolute h-full w-full rounded border-none bg-transparent p-0 text-center opacity-0 outline-none"
          onFocus={(e) => onFocus?.(e)}
          onBlur={(e) => onBlur?.(e)}
          onClick={(e) => onClick?.(e)}
          onChange={(e) => onChange?.(e)}
          {...props}
        />
        <span>{value}</span>
        <span>{label}</span>
      </div>
      <PlusButtons steps={stepsWithoutOne} onClick={handleIncrease} />
    </div>
  );
};
