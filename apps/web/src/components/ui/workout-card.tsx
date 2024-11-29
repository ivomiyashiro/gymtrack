import { useNavigate } from "react-router";
import { DumbbellIcon } from "lucide-react";

import { Workout } from "@/types";

import { Card, TypographyH3 } from "@/components";

export const WorkoutCard = ({ workout }: { workout: Workout }) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(`/workouts/${workout.id}`);

  const handleEdit = () => navigate(`/workouts/${workout.id}/edit`);

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
      <DumbbellIcon className="text-primary" size={52} />
    </Card>
  );
};
