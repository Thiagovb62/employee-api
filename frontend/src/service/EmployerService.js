import axios from "axios";

class EmployerService {
  saveEmployee(employee) {
    return axios.post("http://localhost:8080/employer/save", employee);
  }
  getALlEmployees() {
    return axios.get("http://localhost:8080/employer/list");
  }
}

export default new EmployerService();