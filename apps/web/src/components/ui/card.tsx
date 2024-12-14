import { useState } from "react";
import { PencilIcon, Trash2Icon } from "lucide-react";

import { cn } from "@/lib/utils";

export const Card = ({
  allowDeleting,
  allowEditing,
  children,
  className,
  onClick,
  onEdit,
  onDelete,
  ...props
}: {
  allowDeleting?: boolean;
  allowEditing?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  onDelete?: () => void;
  onEdit?: () => void;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const [isSwiped, setIsSwiped] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!allowDeleting && !allowEditing) return;

    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!allowDeleting && !allowEditing) return;

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
      className="relative overflow-hidden rounded-lg bg-secondary"
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
      {...props}
    >
      <div
        className={cn(
          "flex items-center justify-between",
          isSwiped ? "-translate-x-[calc(100%-52px)]" : "translate-x-0",
          className,
        )}
        onClick={onClick}
      >
        {children}
      </div>
      {/* Card actions -> */}
      <div
        className={`absolute right-0 top-0 flex h-full items-center transition-transform ${
          isSwiped ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {allowEditing && (
          <button
            className="flex h-full w-20 flex-col items-center justify-center gap-1 bg-yellow-500 text-xs text-white"
            onClick={onEdit}
          >
            <PencilIcon className="size-5" />
            Edit
          </button>
        )}
        {allowDeleting && (
          <button
            className="flex h-full w-20 flex-col items-center justify-center gap-1 bg-red-500 text-xs text-white"
            onClick={onDelete}
          >
            <Trash2Icon className="size-5" />
            Delete
          </button>
        )}
      </div>
    </div>
  );
};
