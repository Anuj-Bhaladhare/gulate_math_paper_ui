import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import SingUp from "./pages/singup/SingUp";
import Dashboard from "./pages/dashboard/Dashboard";
import Sidebaar from "./components/Sidebaar";
import PaperFormate from "./pages/paper_format/PaperFormate";
import RecentPaper from "./pages/recent_paper/RecentPaper";
import AllPaper from "./pages/all_paper/AllPaper";
import StudentList from "./pages/students_list/StudentList";
import UserDetails from "./pages/user_details/UserDetails";

const App = () => {
  return(
    <>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={ <SingUp /> } />
      </Routes>

      <Sidebaar>
        <Routes>
          <Route path="/dashboard/dashboard" element={ <Dashboard /> } />
          <Route path="/dashboard/paper-formate" element={ <PaperFormate /> } />
          <Route path="/dashboard/recent-paper" element={ <RecentPaper /> } />
          <Route path="/dashboard/all-paper" element={ <AllPaper /> } />
          <Route path="/dashboard/student-list" element={ <StudentList /> } />
          <Route path="/dashboard/user" element={ <UserDetails /> } />
        </Routes>
      </Sidebaar>
    </>
  )
}

export default App;