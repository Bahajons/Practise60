import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { globalTypes } from '../../redux/actions/globalTypes';


export default function Login() {
  const initialState = { email: "", password: "" };
  const [state, setState] = useState(initialState)
  const dispatch = useDispatch();
  const handleInput = e => {
    const { name, value } = e.target
    setState({ ...state, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://mynodeapis.herokuapp.com/user/login", state)
      .then(res => {
        console.log(res);
        dispatch({ type: globalTypes.AUTH, payload: res.data })
        localStorage.setItem("login", true);
        localStorage.setItem("token", res.data.accessToken)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="container">
      <div className="row">
        {console.log(state)}
        <div className="col-6 offset-3">
          <form>
            <h2 className='text-center'>Login</h2>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" name='email' onChange={handleInput} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" name='password' onChange={handleInput} className="form-control" id="exampleInputPassword1" required />
            </div>
            <button type="submit" onClick={handleSubmit} className="btn btn-primary">Login</button>
            <Link className='ml-5' to={"/register"}>Register</Link>
          </form>
        </div>
      </div>
    </div>
  )
}
