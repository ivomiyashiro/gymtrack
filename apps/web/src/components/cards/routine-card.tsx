import { useNavigate } from "react-router";
import { DumbbellIcon } from "lucide-react";

import { Routine } from "@/types";

import { Card, TypographyH3 } from "@/components";

export const RoutineCard = ({
  routine,
  onEdit,
  onDelete,
}: {
  routine: Routine;
  onDelete: (routineId: number) => void;
  onEdit: (routine: Routine) => void;
}) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(`/routines/${routine.routineId}/workouts`);

  return (
    <Card
      className="p-4"
      allowDeleting={true}
      allowEditing={true}
      onClick={handleClick}
      onDelete={() => onDelete(routine.routineId)}
      onEdit={() => onEdit(routine)}
    >
      <TypographyH3>{routine.name}</TypographyH3>
      <DumbbellIcon className="text-primary" size={52} />
    </Card>
  );
};
