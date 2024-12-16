import { useState } from "react";
import { ChevronRightIcon, RepeatIcon, Trash2Icon } from "lucide-react";

import { Set } from "@/types";

import { cn } from "@/lib/utils";

import { TypographyP } from "@/components";

export const SetInfo = ({
  allowDeleting,
  allowRepeting,
  children,
  className,
  set,
  onClick,
  onRepeat,
  onDelete,
  onEdit,
  ...props
}: {
  allowDeleting?: boolean;
  allowRepeting?: boolean;
  set: Set;
  onClick?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onRepeat?: () => void;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const { reps, weight, rir, createdAt } = set;

  const [isSwiped, setIsSwiped] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!allowDeleting && !allowRepeting) return;

    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!allowDeleting && !allowRepeting) return;

    const currentX = e.touches[0].clientX;
    const deltaX = currentX - startX;

    if (deltaX < -50) {
      setIsSwiped(true);
    }

    if (deltaX > 50) {
      setIsSwiped(false);
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden border-t border-muted-foreground/20 px-4"
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
      {...props}
    >
      <div
        className={cn(
          "flex w-full justify-between py-3",
          isSwiped ? "-translate-x-[calc(100%-200px)]" : "translate-x-0",
          className,
        )}
        onClick={() => onEdit?.()}
        {...props}
      >
        <TypographyP className="text-muted-foreground">
          {createdAt.toLocaleTimeString()}
        </TypographyP>
        <div className="flex items-center gap-4">
          <TypographyP>
            <span className="font-bold">{reps}</span>{" "}
            <span className="text-muted-foreground">reps</span>
          </TypographyP>
          <TypographyP>
            <span className="font-bold">{weight}</span>{" "}
            <span className="text-muted-foreground">kg</span>
          </TypographyP>
          <TypographyP>
            <span className="font-bold">{rir}</span>{" "}
            <span className="text-muted-foreground">RIR</span>
          </TypographyP>
          <ChevronRightIcon className="size-4 text-muted-foreground" />
        </div>
      </div>
      {/* Card actions -> */}
      <div
        className={`absolute right-0 top-0 flex h-full items-center transition-transform ${
          isSwiped ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {allowRepeting && (
          <button
            className="flex h-full w-16 flex-col items-center justify-center gap-1 bg-yellow-500 text-xs text-white"
            onClick={onRepeat}
          >
            <RepeatIcon className="size-5" />
          </button>
        )}
        {allowDeleting && (
          <button
            className="flex h-full w-16 flex-col items-center justify-center gap-1 bg-red-500 text-xs text-white"
            onClick={onDelete}
          >
            <Trash2Icon className="size-5" />
          </button>
        )}
      </div>
    </div>
  );
};
