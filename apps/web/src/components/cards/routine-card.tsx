import { useNavigate } from "react-router";
import { DumbbellIcon } from "lucide-react";

import { Routine } from "@/types";

import { Card, TypographyH3 } from "@/components";

export const RoutineCard = ({ routine }: { routine: Routine }) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(`/routines/${routine.routineId}/workouts`);

  const handleEdit = () => navigate(`/routines/${routine.routineId}/edit`);

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
      <TypographyH3>{routine.name}</TypographyH3>
      <DumbbellIcon className="text-primary" size={52} />
    </Card>
  );
};
