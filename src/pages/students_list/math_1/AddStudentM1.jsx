import React, { useEffect, useState } from 'react';
import useStudentListM1 from "./hook";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';

const AddStudentM1 = () => {
  const [{ AddStudents_M1 }] = useStudentListM1();
  const Navigate = useNavigate();

  const value = {
    name: '', 
    email: '', 
    mobile: '', 
    feesh: '', 
    amount: '', 
    subject: '', 
    mark: '', 
    year: '', 
    PassinsStatus: '', 
    progresh: ''
  }

  const [initialValue, setInitialValue] = useState(value);

  const handalAddStudent = () => {
    AddStudents_M1(initialValue).then((res) => {
      toast.success(res.message);
      Navigate(-1);
    }).catch((error) => {
      toast.error(error.message);
    })
  }

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-lg font-bold">Name :</p>
          <InputText 
            value={initialValue.name} 
            onChange={(e) => setInitialValue({...initialValue, name: e.target.value})} 
          />
        </div>
        <div>
          <p className="text-lg font-bold">Email :</p>
          <InputText value={initialValue.email} onChange={(e) => setInitialValue({...initialValue, email: e.target.value})} />
        </div>
        <div>
          <p className="text-lg font-bold">Mobile :</p>
          <InputNumber value={initialValue.mobile} onValueChange={(e) => setInitialValue({...initialValue, mobile: e.target.value})} />
        </div>
        <div>
          <p className="text-lg font-bold">Fees :</p>
          <Dropdown value={initialValue.feesh} onValueChange={(e) => setInitialValue({...initialValue, feesh: e.target.value})} />
        </div>
        <div>
          <p className="text-lg font-bold">Amount :</p>
          <InputNumber value={initialValue.amount} onValueChange={(e) => setInitialValue({...initialValue, amount: e.target.value})} />
        </div>
        <div>
          <p className="text-lg font-bold">Subject :</p>
          <Dropdown value={initialValue.subject} onValueChange={(e) => setInitialValue({...initialValue, subject: e.target.value})} />
        </div>
        <div>
          <p className="text-lg font-bold">Mark :</p>
          <InputNumber value={initialValue.mark} onValueChange={(e) => setInitialValue({...initialValue, mark: e.target.value})} />
        </div>
        <div>
          <p className="text-lg font-bold">Year :</p>
          <Dropdown value={initialValue.year} onValueChange={(e) => setInitialValue({...initialValue, year: e.target.value})} />
        </div>
        <div>
          <p className="text-lg font-bold">Passing Status :</p>
          <Dropdown value={initialValue.PassinsStatus} onValueChange={(e) => setInitialValue({...initialValue, PassinsStatus: e.target.value})} />
        </div>
        <div>
          <p className="text-lg font-bold">Progress :</p>
          <Dropdown value={initialValue.progresh} onValueChange={(e) => setInitialValue({...initialValue, progresh: e.target.value})} />
        </div>
      </div>
    </div>
  );
}

export default AddStudentM1;
