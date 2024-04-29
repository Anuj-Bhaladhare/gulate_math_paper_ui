import React, { useEffect, useState } from 'react';
import useStudentListM1 from "./hook";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

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

  const feeStatus = [
    { name: 'Paid', code: 'Paid' },
    { name: 'Not Paid', code: 'Not Paid' },
    { name: 'Pending', code: 'Pending' }
  ]

  const subject = [
    { name: 'Mathamatics 1', code: 'Mathamatics 1' },
    { name: 'Mathamatics 2', code: 'Mathamatics 2' },
    { name: 'Mathamatics 3', code: 'Mathamatics 3' }
  ]

  const studentYear = [
    { name: '1st Year', code: '1st Year' },
    { name: '2nd Year', code: '2nd Year' },
    { name: '3rd Year', code: '3rd Year' },
    { name: '4th Year', code: '4th Year' }
  ]

  const passingStatus = [
    { name: 'Pass', code: 'Pass' },
    { name: 'Fail', code: 'Fail' },
    { name: 'Not Appear', code: 'Not Appear' }
  ]

  const progresh = [
    { name: 'Good', code: 'Good' },
    { name: 'Average', code: 'Average' },
    { name: 'Poor', code: 'Poor' },
    { name: 'Bad', code: 'Bad' },
    { name: 'Not Appear', code: 'Not Appear' }
  ]

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
    <>
      <div class="max-w-[50rem] mx-auto bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">

        <div class="mb-6 flex justify-between items-center">
          <p class="block text-gray-700 text-lg font-bold mr-4">Name : </p>
            <InputText  
              class="shadow appearance-none border rounded w-[70%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
              value={initialValue.name}
              onChange={(e) => setInitialValue({...initialValue, name: e.target.value})}
            />
        </div>

        <div class="mb-6 flex justify-between items-center">
          <p class="block text-gray-700 text-lg font-bold mr-4">email : </p>
            <InputText  
              class="shadow appearance-none border rounded w-[70%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
              value={initialValue.email}
              onChange={(e) => setInitialValue({...initialValue, email: e.target.value})}
            />
        </div>

        <div class="mb-6 flex justify-between items-center">
          <p class="block text-gray-700 text-lg font-bold mr-4">Mobile No : </p>
            <InputText  
              class="shadow appearance-none border rounded w-[70%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
              value={initialValue.mobile}
              onInput={(e) => { e.target.value = Math.max(0, parseInt(e.target.value) || 0) }}
              onChange={(e) => setInitialValue({...initialValue, mobile: e.target.value})}
            />
        </div>

        <div class="mb-6 flex justify-between items-center">
          <p class="block text-gray-700 text-lg font-bold mr-4">Fee:</p>
          <Dropdown
            class="shadow appearance-none border rounded w-[70%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={initialValue.feesh}
            options={feeStatus}
            optionLabel="name"
            optionValue="code"
            checkmark={true}
            highlightOnSelect={false}
            onChange={(e) => setInitialValue({...initialValue, feesh: e.target.value})}
          />
        </div>

        <div class="mb-6 flex justify-between items-center">
          <p class="block text-gray-700 text-lg font-bold mr-4">Remaning Ammount : </p>
            <InputText  
              class="shadow appearance-none border rounded w-[70%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
              value={initialValue.amount}
              onInput={(e) => { e.target.value = Math.max(0, parseInt(e.target.value) || 0) }}
              onChange={(e) => setInitialValue({...initialValue, amount: e.target.value})}
            />
        </div>

        <div class="mb-6 flex justify-between items-center">
          <p class="block text-gray-700 text-lg font-bold mr-4">Subject : </p>
            <Dropdown  
             class="shadow appearance-none border rounded w-[70%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             value={initialValue.subject}
             options={subject}
             optionLabel="name"
             optionValue="code"
             checkmark={true}
             highlightOnSelect={false}
             onChange={(e) => setInitialValue({...initialValue, subject: e.target.value})}
           />
        </div>

        <div class="mb-6 flex justify-between items-center">
          <p class="block text-gray-700 text-lg font-bold mr-4">Mark : </p>
            <InputText  
              class="shadow appearance-none border rounded w-[70%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
              onInput={(e) => { e.target.value = Math.max(0, parseInt(e.target.value) || 0) }}
              value={initialValue.mark}
              onChange={(e) => setInitialValue({...initialValue, mark: e.target.value})}
            />
        </div>

        <div class="mb-6 flex justify-between items-center">
          <p class="block text-gray-700 text-lg font-bold mr-4">Year : </p>
            <Dropdown  
             class="shadow appearance-none border rounded w-[70%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             value={initialValue.year}
             options={studentYear}
             optionLabel="name"
             optionValue="code"
             checkmark={true}
             highlightOnSelect={false}
             onChange={(e) => setInitialValue({...initialValue, year: e.target.value})}
           />
        </div>

        <div class="mb-6 flex justify-between items-center">
          <p class="block text-gray-700 text-lg font-bold mr-4">Passing Status : </p>
            <Dropdown  
              class="shadow appearance-none border rounded w-[70%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={initialValue.PassinsStatus}
              options={passingStatus}
              optionLabel="name"
              optionValue="code"
              checkmark={true}
              highlightOnSelect={false}
              onChange={(e) => setInitialValue({...initialValue, PassinsStatus: e.target.value})}
            />
        </div>

        <div class="mb-6 flex justify-between items-center">
          <p class="block text-gray-700 text-lg font-bold mr-4">Progress : </p>
            <Dropdown  
             class="shadow appearance-none border rounded w-[70%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             value={initialValue.progresh}
             options={progresh}
             optionLabel="name"
             optionValue="code"
             checkmark={true}
             highlightOnSelect={false}
             onChange={(e) => setInitialValue({...initialValue, progresh: e.target.value})}
           />
        </div>

        <div class="flex items-center justify-between">
          <button onClick={handalAddStudent} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add new Student</button>
        </div>
      </div>
    </>
  );
}

export default AddStudentM1;
