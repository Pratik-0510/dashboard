import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./componant/dashboars";
import AddPolicyForm from "./componant/addpolicy";
import Sidebar from "./componant/sidebar";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addpolicy" element={<AddPolicyForm />} />
        <Route path="/" element={<Sidebar />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
