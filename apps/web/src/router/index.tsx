import { Route, Routes } from "react-router";

import RoutinesPage from "@/router/routines/page";
import NewRoutine from "@/router/routines/new/page";
import EditRoutine from "@/router/routines/[routineId]/edit/page";

import WorkoutsPage from "@/router/routines/[routineId]/workouts/page";
import NewWorkout from "@/router/routines/[routineId]/workouts/new/page";
import EditWorkout from "./routines/[routineId]/workouts/[workoutId]/edit/page";

import WorkoutPage from "@/router/routines/[routineId]/workouts/[workoutId]/page";

const Router = () => {
  return (
    <Routes>
      <Route path="routines">
        <Route index element={<RoutinesPage />} />
        <Route path="new" element={<NewRoutine />} />
        <Route path=":routineId">
          <Route path="edit" element={<EditRoutine />} />
          <Route path="workouts">
            <Route index element={<WorkoutsPage />} />
            <Route path="new" element={<NewWorkout />} />
            <Route path=":routineId">
              <Route index element={<WorkoutPage />} />
              <Route path="edit" element={<EditWorkout />} />
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};
export default Router;
