import React from 'react';
import useStudentList from "./hook";

const StudentList = () => {

  const { getStudentList } = useStudentList();

  

  return (
    <div>
      <h1>List of Student</h1>

      <br />

      
    </div>
  )
}

export default StudentList