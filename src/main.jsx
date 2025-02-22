import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from "./navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TableView from "./tableView/tableView.jsx";
// import FloatingNav from "./floatingNav.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/table-view" element={<TableView />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
