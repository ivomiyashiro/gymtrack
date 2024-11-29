import { useNavigate } from "react-router";

import { Workout } from "@/types";

import { Card, TypographyH3 } from "@/components";

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
    navigate(`/routines/${routineId}/${workout.workoutId}/edit`);

  const handleDelete = () => alert("Delete");

  return (
    <Card
      allowDeleting={true}
      allowEditing={true}
      onClick={handleClick}
      onEdit={handleEdit}
      onDelete={handleDelete}
    >
      <TypographyH3>{workout.name}</TypographyH3>
      hola
    </Card>
  );
};
