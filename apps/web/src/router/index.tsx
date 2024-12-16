import { Route, Routes } from "react-router";

import {
  ExcercisePage,
  RoutinesPage,
  WorkoutsPage,
  WorkoutPage,
} from "@/router/pages";

const Router = () => {
  return (
    <Routes>
      <Route path="routines">
        <Route index element={<RoutinesPage />} />
        <Route path=":routineId">
          <Route path="workouts">
            <Route index element={<WorkoutsPage />} />
            <Route path=":workoutId">
              <Route index element={<WorkoutPage />} />
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
