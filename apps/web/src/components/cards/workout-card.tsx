import { useNavigate } from "react-router";

import { Workout } from "@/types";

import { Card, TypographyH3, TypographyP } from "@/components";
import { BicepsFlexedIcon } from "lucide-react";

export const WorkoutCard = ({
  routineId,
  workout,
}: {
  routineId: number;
  workout: Workout;
}) => {
  const navigate = useNavigate();

  const handleClick = () =>
    navigate(`/routines/${routineId}/workouts/${workout.workoutId}`);

  const handleEdit = () =>
    navigate(`/routines/${routineId}/workouts/${workout.workoutId}/edit`);

  const handleDelete = () => alert("Delete");

  return (
    <Card
      className="p-4"
      allowDeleting={true}
      allowEditing={true}
      onClick={handleClick}
      onEdit={handleEdit}
      onDelete={handleDelete}
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
