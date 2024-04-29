import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Navbar from '../../../components/Navbar';
import useStudentListM1 from "./hook";
import { Button } from 'primereact/button';
import { FaEdit, FaPlus, FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const StudentListM1 = () => {
  const [nodes, setNodes] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [{ getStudentListM1, deleteStudent_M1 }] = useStudentListM1();
  const Navigate = useNavigate();

  useEffect(() => {
    getStudentListM1().then(res => {
      setNodes(res?.data);
    }).catch((error) => {
      console.error('Error fetching data:', error);
    });
  }, []);

  const filteredNodes = nodes.filter(node => node.name.toLowerCase().includes(globalFilter.toLowerCase()));

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

  const rowClassName = (rowData) => {
    return 'p-datatable-row p-selectable-row hover-pointer-student';
  };

  const onRowSelect = (rowData) => {
    Navigate(`/dashboard/student/m1/viewStudent`, { state: { rowData } });  }

  const addStudent = () => {
    Navigate("/dashboard/student/m1/add-m1student");
  }

  const onEdit = (rowData) => {
    Navigate(`/dashboard/student/m1/editStudent`, { state: { rowData } });
  };

  const onDelete = (rowData) => {
      const { _id } = rowData;
      deleteStudent_M1(_id).then(res => {
        toast.success(res.message);
        window.location.reload();
      }).catch((error) => {
        toast.error(error.message);
      })
  };

  const onGlobalFilterChange = (e) => {
    setGlobalFilter(e.target.value);
  }

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 gap-10 place-content-around p-4 h-12 mt-4">
        <div className="flex justify-between items-center">
          <input
            type="text"
            value={globalFilter}
            onChange={onGlobalFilterChange}
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
            value={filteredNodes} 
            stripedRows 
            tableStyle={{ minWidth: '50rem' }}
            onRowClick={(event) => onRowSelect(event.data)}
            rowClassName={rowClassName}
            globalFilter={globalFilter}
            emptyMessage="No records found"
          >
            <Column field="_id" header="Roll No"></Column>
            <Column field="name" header="Name" filter filterPlaceholder="Search by name" filterMatchMode="contains"></Column>
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
