import { useState } from "react";
import { CornerUpRightIcon, DeleteIcon, KeyboardIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export const NumericKeyboard = ({
  isVisible,
  value = 0,
  currentFocusInputKey,
  className,
  onClose,
  onFocusNext,
  onValueChange,
  ...props
}: {
  value: number;
  isVisible: boolean;
  currentFocusInputKey: string;
  onClose: () => void;
  onFocusNext: () => void;
  onValueChange: (value: number, key: string) => void;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const NUMBER_BUTTONS = [
    { number: "1", gridArea: "1 / 1 / 2 / 2" },
    { number: "2", gridArea: "1 / 2 / 2 / 3" },
    { number: "3", gridArea: "1 / 3 / 2 / 4" },
    { number: "4", gridArea: "2 / 1 / 3 / 2" },
    { number: "5", gridArea: "2 / 2 / 3 / 3" },
    { number: "6", gridArea: "2 / 3 / 3 / 4" },
    { number: "7", gridArea: "3 / 1 / 4 / 2" },
    { number: "8", gridArea: "3 / 2 / 4 / 3" },
    { number: "9", gridArea: "3 / 3 / 4 / 4" },
    { number: ".", gridArea: "4 / 1 / 5 / 2" },
    { number: "0", gridArea: "4 / 2 / 5 / 3" },
  ];

  const [tempPoint, setTempPoint] = useState(false);
  const [isLastStringPoint, setIsLastStringPoint] = useState(false);

  const handleNumberClick = (clickedValue: string) => {
    const newValue =
      tempPoint || isLastStringPoint
        ? Number(value + "." + clickedValue)
        : Number(value + clickedValue);

    onValueChange(newValue, currentFocusInputKey);
    setTempPoint(clickedValue === ".");
  };

  const handleFocusNext = () => {
    onFocusNext?.();
  };

  const handleDeleteClick = () => {
    onValueChange(Number(value.toString().slice(0, -1)), currentFocusInputKey);

    setIsLastStringPoint(value.toString().at(-1) === ".");
  };

  if (!isVisible) return null;

  return (
    <div
      tabIndex={0}
      className={cn(
        "grid grid-cols-4 grid-rows-4 divide-x divide-y",
        className,
      )}
      {...props}
    >
      {NUMBER_BUTTONS.map(({ number, gridArea }, index) => (
        <button
          key={number}
          className={`h-12 w-full text-lg font-semibold focus:bg-muted-foreground/10 focus:opacity-80 ${index === 0 && "border-t"}`}
          style={{ gridArea }}
          onClick={() => handleNumberClick(number)}
        >
          {number}
        </button>
      ))}
      <button
        className="flex h-12 items-center justify-center px-6 text-lg font-semibold"
        style={{ gridArea: "4 / 3 / 5 / 4" }}
        onClick={handleDeleteClick}
      >
        <DeleteIcon />
      </button>
      <button
        className="flex h-full items-center justify-center px-6 text-lg font-semibold"
        style={{ gridArea: "1 / 4 / 3 / 5" }}
        onClick={onClose}
      >
        <KeyboardIcon />
      </button>
      <button
        className="flex h-full items-center justify-center px-6 text-lg font-semibold"
        style={{ gridArea: "3 / 4 / 5 / 5" }}
        onClick={handleFocusNext}
      >
        <CornerUpRightIcon />
      </button>
    </div>
  );
};
