import { Route, Routes } from "react-router";

import RoutinesPage from "@/router/routines/page";
import NewRoutine from "@/router/routines/new/page";
import RoutinePage from "@/router/routines/[routineId]/page";
import EditWorkout from "@/router/routines/[routineId]/edit/page";
import NewWorkout from "@/router/routines/[routineId]/new-routine/page";

const Router = () => {
  return (
    <Routes>
      <Route path="routines">
        <Route index element={<RoutinesPage />} />
        <Route path="new" element={<NewRoutine />} />
        <Route path=":routineId">
          <Route index element={<RoutinePage />} />
          <Route path="edit" element={<EditWorkout />} />
          <Route path="workouts">
            <Route index element={<RoutinePage />} />
            <Route path="new" element={<NewWorkout />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};
export default Router;
