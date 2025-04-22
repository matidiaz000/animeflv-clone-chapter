import { Route, Routes } from "react-router-dom";
import Chapter from './pages/Chapter';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Chapter />} path="/" />
    </Routes>
  );
};

export default AppRoutes;
