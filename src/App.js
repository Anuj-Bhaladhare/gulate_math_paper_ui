import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/login/Login";
import SingUp from "./pages/singup/SingUp";
import Dashboard from "./pages/dashboard/Dashboard";
import UserDetails from "./pages/user_details/UserDetails";
import NotFound from "./components/NotFound";
// import Sidebaar from "./components/Sidebaar";
import "./App.css";
import Papers from "./pages/papers/Papers";
import StudentListM1 from "./pages/students_list/math_1/StudentListM1";
import StudentListM2 from "./pages/students_list/math_2/StudentListM2";
import StudentListM3 from "./pages/students_list/math_3/StudentListM3";
import Student12thList from "./pages/student_12th_list/Student12thList";
import BacklogMath1 from "./pages/backlog_student_list/math_1/BacklogMath1";
import BacklogMath2 from "./pages/backlog_student_list/math_2/BacklogMath2";
import BacklogMath3 from "./pages/backlog_student_list/math_3/BacklogMath3";
import AddStudentM1 from "./pages/students_list/math_1/AddStudentM1";
import EditViewStudentM1 from "./pages/students_list/math_1/EditViewStudentM1";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SingUp />} />

        {/* Protected routes */}
        <Route
          element={ <ProtectedRoute /> }
        >
          <Route path="/dashboard/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/papers" element={<Papers />} />

          <Route path="/dashboard/student/m1" element={<StudentListM1 />} />
          <Route path="/dashboard/student/m1/add-m1student" element={<AddStudentM1 />} />
          <Route path="/dashboard/student/m1/:editView" element={<EditViewStudentM1 />} />

          <Route path="/dashboard/student/m2" element={<StudentListM2 />} />

          <Route path="/dashboard/student/m3" element={<StudentListM3 />} />

          <Route path="/dashboard/student/backlog/m1" element={<BacklogMath1 />} />
          <Route path="/dashboard/student/backlog/m2" element={<BacklogMath2 />} />
          <Route path="/dashboard/student/backlog/m3" element={<BacklogMath3 />} />

          <Route path="/dashboard/student-12th" element={<Student12thList />} />
          <Route path="/dashboard/user" element={<UserDetails />} />

        </Route>

        {/* Catch-all route for 404 Page Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default App;
