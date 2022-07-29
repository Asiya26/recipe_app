import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Form, FormGroup, Input, Label,Button } from "reactstrap";

function Login(props) {
    const navigate=useNavigate()
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(email && password){
            props.setLoggedInOrNot(true)
            navigate("/ ")
        }
    }

    const handleEmail=(e)=>{
        setEmail(e.target.value) 
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value) 
    }

    return (
        <div className="row">
          <div className="col-sm-3">
    
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" value={email} onChange={handleEmail} placeholder="with a placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" value={password} onChange={handlePassword} id="examplePassword" placeholder="password placeholder" />
              </FormGroup>
              <Button color="success">Submit</Button>
            </Form>
          </div>
        </div>
  );
}

export default Login;
