import axios from 'axios';

class EmployeeService {
deleteEmployee(id) {
  axios.delete('http://localhost:4000/employees/' + id)
  .then(() => {
    console.log('Employee deleted !!!')
  })
  .catch(err => console.log(err))
}
}

export default EmployeeService;