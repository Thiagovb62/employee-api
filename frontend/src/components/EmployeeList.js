import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import EmployerService from "../service/EmployerService";

const EmployeeList = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = React.useState(true);
    const [employees, setEmployees] = React.useState(null);

    useEffect(() => {
       const fetchDate = async () => {
           setLoading(true);
           try {
            const response = await  EmployerService.getALlEmployees();
            console.log(response.data);
            setEmployees(response.data);
           }catch (e) {
                console.log(e);
           }
              setLoading(false);
       }
       fetchDate();
    },[]);

    return(
    <>
        <div className="container mx-auto my-8">
            <div className="h-12">
                <button
                    onClick={() => navigate("/add-employee")}
                    className="rounded bg-slate-600 text-white  px-6 py-2 font-semibold">Add Employee</button>
            </div>
            <div className=" flex shadow border-b0">
                <table className=" min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">First Name</th>
                            <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">E-mail</th>
                            <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">Phone</th>
                            <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">Actions</th>
                        </tr>
                    </thead>
                    {!loading && (
                    <tbody className="divide-y divide-gray-200">
                        {employees.map((employee) => (
                        <tr>
                            <td className="py-3 px-6 text-left whitespace-nowrap"><div className="text-sm text-gray-600">{employee.firstName}</div></td>
                            <td className="py-3 px-6 text-left whitespace-nowrap"><div className="text-sm text-gray-600">{employee.email}</div></td>
                            <td className="py-3 px-6 text-left whitespace-nowrap"><div className="text-sm text-gray-600">{employee.phone}</div></td>
                            <td className="py-3 px-6 text-left whitespace-nowrap">
                                <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</a>
                                <a href="#" className="text-red-600 hover:text-red-900">Delete</a>
                            </td>
                        </tr>
                        ))}
                    </tbody>)}
                </table>
            </div>
        </div>
    </>
    )
}
export default EmployeeList;