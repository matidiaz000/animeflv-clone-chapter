import { Route, Routes } from "react-router-dom";
import Chapter from './pages/Chapter';
import Anime from './pages/Anime';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Anime />} path="/:id/:name" />
      <Route index element={<Chapter />} path="/:id/:name/:chapter" />
    </Routes>
  );
};

export default AppRoutes;
