import { Route, Routes } from "react-router";

import WorkoutsPage from "@/router/routines/[routineId]/workouts/page";
import NewWorkout from "@/router/routines/[routineId]/workouts/new/page";
import EditWorkout from "@/router/routines/[routineId]/workouts/[workoutId]/edit/page";
import WorkoutPage from "@/router/routines/[routineId]/workouts/[workoutId]/page";

import { ExcercisePage, RoutinesPage } from "@/router/pages";

const Router = () => {
  return (
    <Routes>
      <Route path="routines">
        <Route index element={<RoutinesPage />} />
        <Route path=":routineId">
          <Route path="workouts">
            <Route index element={<WorkoutsPage />} />
            <Route path="new" element={<NewWorkout />} />
            <Route path=":workoutId">
              <Route index element={<WorkoutPage />} />
              <Route path="edit" element={<EditWorkout />} />
              <Route path="excercises">
                <Route path=":excerciseId" element={<ExcercisePage />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
