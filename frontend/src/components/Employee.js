import React from "react";
import { useNavigate } from "react-router-dom";




const Employee = (employee) => {

    const navigate = useNavigate();

    const deleteEmployee = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8080/employer/delete/${employee.id}`, {
            method: 'DELETE',
        }).then(() => {
            window.location.reload();
        })
    }
    
    const editEmployee = (e,id) => {
        e.preventDefault();
        navigate(`/edit-Employee/${id}`);
    }

  return (
    <tr>
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="text-sm text-gray-600">{employee.firstName}</div>
      </td>
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="text-sm text-gray-600">{employee.email}</div>
      </td>
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="text-sm text-gray-600">{employee.phone}</div>
      </td>
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <a  href="#" onClick={(e,id) => editEmployee(e,employee.id)} className="text-indigo-600 hover:text-indigo-900 mr-4">
          Edit
        </a>
        <a onClick={deleteEmployee} href="#" className="text-red-600 hover:text-red-900">
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Employee;
