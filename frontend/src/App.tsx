import * as React from "react";
import "./App.css";
import TabelPage from "./pages/TabelPage/tabelPage";
import VideoPage from "./pages/VideoPage/videoPage";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <Sidebar>
      <Routes>
        <Route path="/" element={<VideoPage />} />
        <Route path="/tabel" element={<TabelPage />} />
      </Routes>
    </Sidebar>
  );
}

export default App;
