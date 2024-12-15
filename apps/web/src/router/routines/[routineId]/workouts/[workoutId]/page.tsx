import { useState } from "react";
import { DumbbellIcon, PlusIcon } from "lucide-react";

import type { WorkoutExcercise } from "@/types";

import { PageLayout } from "@/layouts";

import { Button, ExcerciseCard, TypographyH3, TypographyP } from "@/components";

import data from "@/data/workouts.json";

const excercises: WorkoutExcercise[] = data.workouts[0].exercises;

const WorkoutPage = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleClick = () => setPopupOpen(true);

  return (
    <PageLayout title="Workout">
      <div className="flex justify-between">
        <TypographyH3>Excercises</TypographyH3>
        <Button
          variant="link"
          size="sm"
          className="text-primary"
          onClick={handleClick}
        >
          <PlusIcon />
          Add
        </Button>
      </div>
      {excercises.length !== 0 && (
        <div className="my-2 flex flex-col gap-4">
          {excercises.map((excercise) => (
            <ExcerciseCard
              key={excercise.workoutExcerciseId}
              excercise={excercise as unknown as WorkoutExcercise} // TODO: Ver de corregir esto cuando use datos de la API
            />
          ))}
        </div>
      )}
      {excercises.length === 0 && (
        <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
          <DumbbellIcon className="size-16 text-secondary-foreground" />
          <div className="my-6 text-center">
            <TypographyH3 className="mb-1">No excercises yet</TypographyH3>
            <TypographyP className="text-secondary-foreground">
              Add excersices to your workout to start training
            </TypographyP>
          </div>
          <Button onClick={handleClick}>Add excercises</Button>
        </div>
      )}
      {isPopupOpen && (
        <div>
          <div>hola</div>
        </div>
      )}
    </PageLayout>
  );
};

export default WorkoutPage;
