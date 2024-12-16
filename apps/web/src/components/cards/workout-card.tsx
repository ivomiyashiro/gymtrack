import { useNavigate } from "react-router";
import { BicepsFlexedIcon } from "lucide-react";

import { Workout } from "@/types";

import { Card, TypographyH3, TypographyP } from "@/components";

export const WorkoutCard = ({
  workout,
  onEdit,
  onDelete,
}: {
  workout: Workout;
  onDelete: (routineId: number) => void;
  onEdit: (routine: Workout) => void;
}) => {
  const navigate = useNavigate();

  const handleClick = () =>
    navigate(`/routines/${workout.routineId}/workouts/${workout.workoutId}`);

  return (
    <Card
      className="p-4"
      allowDeleting={true}
      allowEditing={true}
      onClick={handleClick}
      onDelete={() => onDelete(workout.workoutId)}
      onEdit={() => onEdit(workout)}
    >
      <div>
        <TypographyH3>{workout.name}</TypographyH3>
        <TypographyP className="text-muted-foreground">
          {workout.exercises.length} excersises
        </TypographyP>
      </div>
      <BicepsFlexedIcon className="text-primary" size={52} />
    </Card>
  );
};
