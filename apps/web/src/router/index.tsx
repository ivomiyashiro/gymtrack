import { Route, Routes } from "react-router";
import { WorkoutsPage } from "@/router/pages";

const Router = () => {
  return (
    <Routes>
      <Route index element={<WorkoutsPage />} />

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
