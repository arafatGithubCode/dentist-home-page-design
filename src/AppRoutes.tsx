import { Route, Routes } from "react-router-dom";
import Layouts from "./layouts/Layouts";
import Home from "./pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layouts>
            <Home />
          </Layouts>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
