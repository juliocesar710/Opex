import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import CharacterPage from "../pages/CharacterPage.jsx";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/character/:id" element={<CharacterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
