import { useRef, useState } from "react";
import { DumbbellIcon } from "lucide-react";

import type { Workout, WorkoutExcercise } from "@/types";

import { PageLayout } from "@/layouts";

import { Button, TypographyH3, TypographyP, WorkoutCard } from "@/components";
import { WorkoutDrawer } from "./workout-drawer";

import data from "@/data/routines.json";

const excercises: WorkoutExcercise[] = data.routines[0].workouts[0].exercises;

const WorkoutPage = () => {
  const openDrawerButtonRef = useRef<HTMLButtonElement>(null);
  const [selectedWorkout, setSelectedWorkout] = useState<Workout>();

  const handleAddWorkout = () => {
    openDrawerButtonRef.current?.click();
  };

  const handleDeleteWorkout = (routineId: number) =>
    alert(`Delete ${routineId}`);

  const handleEditWorkout = (routine: Workout) => {
    setSelectedWorkout(routine);
    openDrawerButtonRef.current?.click();
  };

  return (
    <PageLayout title="Workouts">
      <div className="flex justify-between">
        <TypographyH3>Workout Split</TypographyH3>
        <WorkoutDrawer ref={openDrawerButtonRef} workout={selectedWorkout} />
      </div>
      {excercises.length !== 0 && (
        <div className="my-2 flex flex-col gap-4">
          {data.routines[0].workouts.map((workout) => (
            <WorkoutCard
              key={workout.workoutId}
              workout={workout as unknown as Workout} // TODO: Ver de corregir esto cuando use datos de la API
              onDelete={handleDeleteWorkout}
              onEdit={handleEditWorkout}
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
          <Button onClick={handleAddWorkout}>Add excercises</Button>
        </div>
      )}
    </PageLayout>
  );
};

export default WorkoutPage;
