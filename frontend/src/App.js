import './App.css';
import Navbar from "./components/Navbar";
import AddEmployee from "./components/AddEmployee";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import UpdateEmployee from './components/UpdateEmployee';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<EmployeeList />} > </Route>
            <Route path="/employeeList" element={<EmployeeList />} > </Route>
            <Route path="/add-Employee" element={<AddEmployee />} > </Route>
            <Route path="/edit-Employee/:id" element={<UpdateEmployee />} > </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
