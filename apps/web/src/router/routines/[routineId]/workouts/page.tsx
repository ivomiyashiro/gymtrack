import { useNavigate, useParams } from "react-router";
import { CalendarDaysIcon, PlusIcon } from "lucide-react";

import { Workout } from "@/types";

import { PageLayout } from "@/layouts";
import { WorkoutCard, Button, TypographyH3, TypographyP } from "@/components";

import data from "@/data/workouts.json";

const WorkoutsPage = () => {
  const navigate = useNavigate();
  const { routineId } = useParams();

  const handleClick = () => navigate(`/routines/${routineId}/workouts/new`);

  return (
    <PageLayout title="Workouts">
      <div className="flex justify-between">
        <TypographyH3>Workout split</TypographyH3>
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
      {data.workouts.length !== 0 && (
        <div className="my-2 flex flex-col gap-4">
          {data.workouts.map((workout) => (
            <WorkoutCard
              key={workout.workoutId}
              routineId={Number(routineId)}
              workout={workout as unknown as Workout} // TODO: Ver de corregir esto cuando use datos de la API
            />
          ))}
        </div>
      )}
      {data.workouts.length === 0 && (
        <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
          <CalendarDaysIcon className="size-16 text-secondary-foreground" />
          <div className="my-6 text-center">
            <TypographyH3 className="mb-1">Workout split</TypographyH3>
            <TypographyP className="text-secondary-foreground">
              Create your workouts separated by days of the week and/or by
              muscle groups
            </TypographyP>
          </div>
          <Button onClick={handleClick}>Create workout split</Button>
        </div>
      )}
    </PageLayout>
  );
};

export default WorkoutsPage;
