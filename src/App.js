import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/login/Login";
import SingUp from "./pages/singup/SingUp";
import Dashboard from "./pages/dashboard/Dashboard";
import PaperFormate from "./pages/paper_format/PaperFormate";
import RecentPaper from "./pages/recent_paper/RecentPaper";
import AllPaper from "./pages/all_paper/AllPaper";
import StudentList from "./pages/students_list/StudentList";
import UserDetails from "./pages/user_details/UserDetails";
import NotFound from "./components/NotFound";
import Sidebaar from "./components/Sidebaar";
import "./App.css";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SingUp />} />

        {/* Protected routes */}
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              {/* <Sidebaar> */}
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="paper-formate" element={<PaperFormate />} />
                <Route path="recent-paper" element={<RecentPaper />} />
                <Route path="all-paper" element={<AllPaper />} />
                <Route path="student-list" element={<StudentList />} />
                <Route path="user" element={<UserDetails />} />
              {/* </Sidebaar> */}
            </ProtectedRoute>
          }
        />

        {/* Catch-all route for 404 Page Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default App;
