import '../Register/Register.css'

import {  useNavigate } from 'react-router-dom';
import {  useState } from 'react';
import { emailValidation, passwordValidation ,fNameValidation,lNameValidation} from '../validation';
import axios from 'axios';

function Register(){
  const navigate = useNavigate();
 const [getList, setList] = useState([]);

  const [getForm, setForm] = useState({
    firstName: '',
    lastName: '',
    employeeid: '',
    password: '',
    cpassword:''
  });
  const [getValidation, setValidation] = useState({
    firstName:'',
    lastName:'',
    employeeid: '',
    password: '',
    cpassword:''
  });
  const onChangeHandler = (event) => {
    setForm({
      ...getForm, [event.target.name]: event.target.value
    })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
  
   
    setValidation({
      ...getValidation,
      firstName: fNameValidation(getForm.firstName) ? "first name should be alphabet" : "",
      lastName: lNameValidation(getForm.lastName) ? "last name should be alphabet" : "", 
      employeeid: !emailValidation(getForm.employeeid) ? "Please provide proper email ID" : "",
      password: !passwordValidation(getForm.password) ? "Invalid password" : "",
      
    });
    if(getForm.firstName&&getForm.lastName&&getForm.employeeid&&getForm.password&&getForm.cpassword){
      axios.post('http://localhost:3000/profile',{
      firstName:getForm.firstName,
      lastName:getForm.lastName,
      employeeid:getForm.employeeid,
      password:getForm.password,
      cpassword:getForm.cpassword
      
    }).then(()=>{
      alert("Successfully registered");
        sessionStorage.setItem("email",getForm.employeeid)
        sessionStorage.setItem("password",getForm.password)
      navigate('/login');
    }).catch(()=>{
       alert("error");
    })
  }
      
    }


  return (
        <div className='container'>
        <form>
        <div class="row mb-3">
          <label for="input3" class="col-sm-2 col-form-label">First Name</label>
          <div class="col-sm-10">
            <input  onChange={onChangeHandler} value={getForm.firstName} className='inpt' />
          {getValidation.password && <div className="alert alert-danger" role="alert">
            {getValidation.password}</div>}
          </div>
        </div>

        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label">Last Name</label>
          <div class="col-sm-10">
            <input  onChange={onChangeHandler} value={getForm.lastName} className='inpt' />
          {getValidation.password && <div className="alert alert-danger" role="alert">
            {getValidation.password}</div>}
          </div>
        </div>

        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label">Employee ID</label>
          <div class="col-sm-10">
            <input  onChange={onChangeHandler} value={getForm.employeeid} className='inpt' />
          {getValidation.password && <div className="alert alert-danger" role="alert">
            {getValidation.password}</div>}
          </div>
        </div>

        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input onChange={onChangeHandler} value={getForm.password} className='inpt' />
          {getValidation.password && <div className="alert alert-danger" role="alert">
            {getValidation.password}</div>}
          </div>
        </div>

        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label">Confirm Password</label>
          <div class="col-sm-10">
            <input type="password" onChange={onChangeHandler} value={getForm.cpassword} className='inpt' />
          {getValidation.password && <div className="alert alert-danger" role="alert">
            {getValidation.password}</div>}

            
          </div>
        </div>
        
       <br/>
        <button type="submit" className="btnsubmit" onClick={onSubmitHandler}>Confirm</button>
        &nbsp;
        <button type="Reset" className="btnsubmit" >Cancel</button>
      </form>
        </div> 
    )
}
export default Register
