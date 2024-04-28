import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Navbar from '../../../components/Navbar';
import useStudentListM1 from "./hook";
import { Button } from 'primereact/button';
import { FaEdit, FaPlus, FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const StudentListM1 = () => {
  const [nodes, setNodes] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [{ getStudentListM1 }] = useStudentListM1();
  const Navigate = useNavigate();

  useEffect(() => {
    getStudentListM1().then(res => {
      setNodes(res?.data);
    }).catch((error) => {
      console.error('Error fetching data:', error);
    });
  }, []);

  const actionBodyTemplate = (rowData) => {
    return (
       <>
        <Button className="p-button p-button-rounded p-button-text p-button-success mr-2" onClick={() => onEdit(rowData)}>
          <FaEdit />
        </Button>
        <Button className="p-button p-button-rounded p-button-text p-button-warning" onClick={() => onDelete(rowData)}>
          <FaTrashAlt />
        </Button>
       </>
    );
  };

  const onRowSelect = (rowData) => {
      console.log(rowData);
  }

  const addStudent = () => {
    Navigate("/dashboard/student/m1/add-student");
  }

  const onEdit = (rowData) => {
    console.log('Edit action for:', rowData);
    // Implement your edit logic here
  };

  const onDelete = (rowData) => {
    console.log('Delete action for:', rowData);
    // Implement your delete logic here
  };

  const onGlobalFilterChange = (e) => {
    // const value = e.target.value;
    // let _filters = { ...filters };
  }

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 gap-10 place-content-around p-4 h-12 mt-4">
        <div className="flex justify-between items-center">
          <input
            type="text"
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search..."
            className="p-2 border border-gray-300 rounded-md shadow-sm mb-2"
          />
          <Button onClick={addStudent} className="p-button-success">
            <FaPlus className="mr-2" />
            Add Student
          </Button>
        </div>
      </div>
      <div className="px-4 py-2">
        <div className="card">
          <DataTable 
            value={nodes} 
            stripedRows 
            tableStyle={{ minWidth: '50rem' }} 
          >
            <Column field="_id" header="Roll No"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="PassinsStatus" header="Pass / Fail"></Column>
            <Column field="feesh" header="Fee Status"></Column>
            <Column field="amount" header="Pending Amount"></Column>
            <Column header="Action" body={actionBodyTemplate}></Column>
          </DataTable>
        </div>
      </div>
    </div>
  );
}

export default StudentListM1;
