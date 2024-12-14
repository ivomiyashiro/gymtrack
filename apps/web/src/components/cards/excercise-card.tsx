import { useNavigate, useParams } from "react-router";

import type { WorkoutExcercise } from "@/types";
import { Card, TypographyH3, TypographyP } from "@/components";
import { DumbbellIcon } from "lucide-react";

export const ExcerciseCard = ({
  excercise,
}: {
  excercise: WorkoutExcercise;
}) => {
  const { routineId, workoutId } = useParams(); // TODO: Ver de sacar una vez que se haga la api
  const navigate = useNavigate();

  const handleClick = () =>
    navigate(
      `/routines/${routineId}/workouts/${workoutId}/excercises/${excercise.workoutExcerciseId}`,
    );

  const handleDelete = () => alert("Delete");

  return (
    <Card
      className="p-4"
      allowDeleting={true}
      onClick={handleClick}
      onDelete={handleDelete}
    >
      <div>
        <TypographyH3>{excercise.name}</TypographyH3>
        <TypographyP className="text-muted-foreground">
          P.R: {excercise.personalRecord.reps} x{" "}
          {excercise.personalRecord.weight} kg
        </TypographyP>
      </div>
      <DumbbellIcon className="text-primary" size={52} />
    </Card>
  );
};
