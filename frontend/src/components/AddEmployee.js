import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployerService from "../service/EmployerService";

const AddEmployee = () => {
  const [employer, setEmployer] = useState({
    id: "",
    firstName: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    try {
      const value = e.target.value;
      setEmployer({ ...employer, [e.target.name]: value });
    } catch (e) {
      console.log(e);
    }
  }

  const clearEmployer = (e) => {
    e.preventDefault();
    setEmployer({ id: "", firstName: "", email: "", phone: "" });
  };

  const saveEmployer = (e) => {
    e.preventDefault();
    EmployerService.saveEmployee(employer)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        navigate("/employeeList");
        console.log(res);
      })
      .catch((error) => {
        alert("Ocorreu um erro: " + error.message);
      });
    setEmployer({ id: "", firstName: "", email: "", phone: "" });
  };
  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl text-wider">
          <h1>Add New Employee</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 font-sans">Name</label>
          <input
            name="firstName"
            value={employer.firstName}
            onChange={(e) => handleChange(e)}
            type="text"
            className="border-2 h-10 border-gray-300 rounded-md mt-2 w-96 px-2 py-2  "
            placeholder="Joao"
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 font-sans">E-mail</label>
          <input
            name="email"
            value={employer.email}
            onChange={(e) => handleChange(e)}
            type="text"
            className="border-2 h-10 border-gray-300 rounded-md mt-2 w-96 px-2 py-2  "
            placeholder="@email.com.br"
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 font-sans">Phone</label>
          <input
            name="phone"
            value={employer.phone}
            onChange={(e) => handleChange(e)}
            type="tel"
            className="border-2 h-10 border-gray-300 rounded-md mt-2 w-96 px-2 py-2  "
            placeholder="85 957002"
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={saveEmployer}
            className="bg-green-400 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded"
          >
            Save
          </button>
          <button
            onClick={clearEmployer}
            className="bg-red-400 hover:bg-red-800 text-white font-semibold py-2 px-6  rounded"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddEmployee;
