import { useNavigate } from "react-router";

import { Routine } from "@/types";

import { PageLayout } from "@/layouts";
import { Button, RoutineCard, TypographyH3 } from "@/components";

import data from "@/data/routines.json";

const RoutinesPage = () => {
  const navigate = useNavigate();
  const { routines } = data;

  return (
    <PageLayout title="Routines" showPrevButton={false}>
      <TypographyH3>My collection</TypographyH3>
      <div className="my-4 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          {routines.map((routine) => (
            <RoutineCard
              key={routine.routineId}
              routine={routine as unknown as Routine}
            />
          ))}
        </div>
        <Button
          variant="secondary"
          className="w-full"
          onClick={() => navigate("/routines/new")}
        >
          Create new workout
        </Button>
      </div>
    </PageLayout>
  );
};

export default RoutinesPage;
