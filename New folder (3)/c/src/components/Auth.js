import React,{useState} from 'react'
import {FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { useNavigate } from "react-router-dom";

const Auth = () => {
const [isSignup, setisSignup] = useState(false)
const [inputs, setinputs] = useState({
    name:"",email:"",password:""
})   
const handleChange = (e) => {
    setinputs((prev)=>({
        ...prev,
        [e.target.name]:e.target.value
    }))
} 
const handileSubmit = (e) => {
    e.preventDefault()
    console.log(inputs)
}
    return (
      <div style={{height:"100vh", background:"black"}} className="bg-dark py-5">
                <div className='' >
            <div className=" height-100 container d-flex justify-content-center align-items-center  ">
                <div style={{border:"0px solid #5DFF6B",boxShadow:" inset 0px 1px 10px 1px #5DFF6B"}}  className="px-4 pb-4 pt-4 bg-dark text-light rounded ">
             <Form className=" "onSubmit={handileSubmit} >
                <div className="text-center display-4">
                   <h1>  { isSignup? "Login" : "Signup"}</h1>
                </div>
                  {!isSignup &&               
                   <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control name="name" value={inputs.name} onChange={handleChange} type="text" placeholder="Enter Name" />
                </Form.Group>}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" value={inputs.email} onChange={handleChange} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" value={inputs.password} onChange={handleChange}  type="password" placeholder="Password" />
                </Form.Group>
                <Button className=" w-100 " variant="primary" type="submit">
                {isSignup?"Login":"Signup"}
                </Button>
            </Form>
                    
            <div className="togle-box">
                    
                      <p className='text-center mt-3 ' > <button className='btn btn-primary' onClick={()=>setisSignup(!isSignup)} href=""> {!isSignup? "Switch to Login":"Switch to SignUp"}</button>  </p>
                        
                    
                </div> 
                </div>
            </div>
        </div>
      </div>
    )
}

export default Auth