import React from "react";

const AddEmployee = () => {
    return (
        <div className="flex max-w-2xl mx-auto shadow border-b">
            <div className="px-8 py-8">
                <div className="font-thin text-2xl text-wider">
                    <h1>Add New Employee</h1>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 font-sans">First Name</label>
                    <input type="text" className="border-2 h-10 border-gray-300 rounded-md mt-2 w-96 px-2 py-2" placeholder="Joao"/>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 font-sans">E-mail</label>
                    <input type="text" className="border-2 h-10 border-gray-300 rounded-md mt-2 w-96 px-2 py-2  " placeholder="@email.com.br"/>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 font-sans">Phone</label>
                    <input type="tel" className="border-2 h-10 border-gray-300 rounded-md mt-2 w-96 px-2 py-2 " placeholder="+57 929292922"/>
                </div>
                <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                  <button className="bg-green-400 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded">
                    Save
                  </button>
                    <button className="bg-red-400 hover:bg-red-800 text-white font-semibold py-2 px-6  rounded">
                        Clear
                    </button>
                </div>
            </div>
        </div>
    )
}
export default AddEmployee;