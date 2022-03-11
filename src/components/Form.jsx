import React, { useState } from 'react';

const Form = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    return (
        <div>
            <h2 className="text-center">New User Form</h2>
            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">First Name:</span>
                    <input type="text" name="firstname" onChange={(e) => setFirstname(e.target.value)} className="form-control" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Last Name:</span>
                    <input type="text" name="lastname" onChange={(e) => setLastname(e.target.value)} className="form-control" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Email:</span>
                    <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} className="form-control" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Password:</span>
                    <input type="text" name="password" onChange={(e) => setPassword(e.target.value)} className="form-control" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Confirm Password:</span>
                    <input type="text" name="confirm" onChange={(e) => setConfirm(e.target.value)} className="form-control"/>
                </div>
            </form>
            <div className="m-3">
            <h4 className="text-center my-4">User Form Data</h4>
            <p>First Name: {firstname}</p>
            <p>Last Name: {lastname}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirm}</p>
            </div>
        </div>
    )
}

export default Form;