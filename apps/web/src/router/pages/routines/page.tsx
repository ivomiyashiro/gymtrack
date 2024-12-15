import { useRef, useState } from "react";

import { Routine } from "@/types";

import { PageLayout } from "@/layouts";
import { RoutineCard, TypographyH3 } from "@/components";
import { RoutineDrawer } from "./routine-drawer";

import data from "@/data/routines.json";

const RoutinesPage = () => {
  const { routines } = data;
  const openDrawerButtonRef = useRef<HTMLButtonElement>(null);
  const [selectedRoutine, setSelectedRoutine] = useState<Routine>();

  const handleDeleteRoutine = (routineId: number) =>
    alert(`Delete ${routineId}`);

  const handleEditRoutine = (routine: Routine) => {
    setSelectedRoutine(routine);
    openDrawerButtonRef.current?.click();
  };

  return (
    <PageLayout title="Routines" showPrevButton={false}>
      <div className="flex justify-between">
        <TypographyH3>My collection</TypographyH3>
        <RoutineDrawer ref={openDrawerButtonRef} routine={selectedRoutine} />
      </div>
      <div className="my-4 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          {routines.map((routine) => (
            <RoutineCard
              key={routine.routineId}
              routine={routine as unknown as Routine}
              onEdit={handleEditRoutine}
              onDelete={handleDeleteRoutine}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default RoutinesPage;
