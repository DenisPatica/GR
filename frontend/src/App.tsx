import * as React from "react";
import "./App.css";
import TablePage from "./pages/TablePage/TablePage";
import VideoPage from "./pages/VideoPage/videoPage";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <Sidebar>
      <Routes>
        <Route path="/" element={<VideoPage />} />
        <Route path="/tabel" element={<TablePage />} />
      </Routes>
    </Sidebar>
  );
}

export default App;
