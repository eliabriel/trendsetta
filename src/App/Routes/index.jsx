import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../Modules/Dashboard";
import DashPage from "../Modules/Dashboard/Pages/DashPage";

function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<DashPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AllRoutes;
