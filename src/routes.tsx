import { Route, Routes } from "react-router-dom";
import Chapter from './pages/Chapter';
import Anime from './pages/Anime';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Anime />} path="/:id" />
      <Route element={<Chapter />} path="/:id/capitulo/:chapter" />
    </Routes>
  );
};

export default AppRoutes;
