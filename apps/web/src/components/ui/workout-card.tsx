import { useState } from "react";
import { DumbbellIcon, PencilIcon, Trash2Icon } from "lucide-react";

import { Workout } from "@/types";

import { TypographyH3 } from "@/components/ui";

const WorkoutCardActions = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div
      className={`absolute right-0 top-0 flex h-full items-center transition-transform ${
        isVisible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button className="flex h-full w-20 flex-col items-center justify-center gap-1 bg-yellow-500 text-xs text-white">
        <PencilIcon className="size-5" />
        Edit
      </button>
      <button className="flex h-full w-20 flex-col items-center justify-center gap-1 bg-red-500 text-xs text-white">
        <Trash2Icon className="size-5" />
        Delete
      </button>
    </div>
  );
};

export const WorkoutCard = ({ workout }: { workout: Workout }) => {
  const [isSwiped, setIsSwiped] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
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
      className="relative overflow-hidden rounded-lg bg-secondary p-4"
      tabIndex={workout.id}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
    >
      <div
        className={`flex items-center justify-between ${
          isSwiped ? "-translate-x-[calc(100%-52px)]" : "translate-x-0"
        }`}
      >
        <TypographyH3>{workout.name}</TypographyH3>
        <DumbbellIcon className="text-primary" size={52} />
      </div>
      <WorkoutCardActions isVisible={isSwiped} />
    </div>
  );
};
