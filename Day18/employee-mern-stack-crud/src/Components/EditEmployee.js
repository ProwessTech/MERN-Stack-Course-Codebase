import React, { Component } from 'react';
import axios from 'axios';

const customStyle = {
  width: '300px',
  margin: '0 auto'
}

class EditEmployee extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    }
  }
  componentDidMount = () => {
    this.getEmployeeById();
  }

  getEmployeeById() {
    axios.get('http://localhost:4000/employees/' +
      this.props.match.params.id)
      .then((response) => {
        this.setState({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          phone: response.data.phone
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, phone } = this.state;
    axios.post('http://localhost:4000/employees/' + this.props.match.params.id,
      {
        firstName,
        lastName,
        email,
        phone,
      })
      .then((response) => {
        console.log(response);
        this.props.history.push('/');
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className='container'>
        <form style={customStyle} onSubmit={this.handleSubmit}>
          <label>
            First name
            <input
              className='form-control'
              name="firstName"
              type="text"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </label> <br />
          <label>
            Last name
            <input
              className='form-control'
              name="lastName"
              type="text"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </label> <br />
          <label>
            Email
            <input
              className='form-control'
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label><br />
          <label>
            Phone No
            <input
              className='form-control'
              name="phone"
              type="text"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </label> <br />
          <input
            type="submit"
            value="Update"
            className="btn btn-primary"
          />
        </form>
      </div>
    )
  }
}

export default EditEmployee;