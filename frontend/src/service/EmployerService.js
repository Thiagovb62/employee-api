import axios from "axios";

class EmployerService {
  saveEmployee(employee) {
    return axios.post("http://localhost:8080/employer/save", employee);
  }
  getALlEmployees() {
    return axios.get("http://localhost:8080/employer/list");
  }
  getEmployeeById(id) {
    return axios.get(`http://localhost:8080/employer/${id}`);
  }
  
  updateEmployee(employee, id) {
    return axios.put(`http://localhost:8080/employer/update/${id}`, employee);
  }
}

export default new EmployerService();