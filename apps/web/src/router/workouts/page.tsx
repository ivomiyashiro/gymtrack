import { useNavigate } from "react-router";
import { Workout } from "@/types";
import {
  Button,
  TypographyH1,
  TypographyH3,
  WorkoutCard,
} from "@/components/ui";

import data from "@/data/workouts.json";

const WorkoutsPage = () => {
  const navigate = useNavigate();
  const { workouts } = data;

  return (
    <>
      <TypographyH1>Workouts</TypographyH1>
      <TypographyH3 className="mt-6">My plan</TypographyH3>
      <div className="my-4 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          {workouts.map((workout: Workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
        <Button
          variant="secondary"
          className="w-full"
          onClick={() => navigate("/workouts/new")}
        >
          Create new workout
        </Button>
      </div>
    </>
  );
};

export default WorkoutsPage;
