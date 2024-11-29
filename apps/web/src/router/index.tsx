import { Route, Routes } from "react-router";

import WorkoutsPage from "@/router/workouts/page";
import NewWorkout from "@/router/workouts/new/page";
import EditWorkout from "@/router/workouts/[id]/edit/page";
import WorkoutPage from "@/router/workouts/[id]/page";
import NewTraining from "./workouts/[id]/new-training/page";

const Router = () => {
  return (
    <Routes>
      <Route path="/workouts" element={<WorkoutsPage />} />
      <Route path="/workouts/new" element={<NewWorkout />} />
      <Route path="/workouts/:id" element={<WorkoutPage />} />
      <Route path="/workouts/:id/edit" element={<EditWorkout />} />
      <Route path="/workouts/:id/new-training" element={<NewTraining />} />

      {/* <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="concerts">
        <Route index element={<ConcertsHome />} />
        <Route path=":city" element={<City />} />
        <Route path="trending" element={<Trending />} />
      </Route> */}
    </Routes>
  );
};
export default Router;
