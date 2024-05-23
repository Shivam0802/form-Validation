import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./success.css";

const Success = ( ) => {
    const location = useLocation();
    const { firstName,lastName,username,email,country,city,aadhar,pan,password,contact } = location.state || {};


    return (
        <div className="success">
            <div id="userDetails">
                <h2>Details of the user</h2>
                <p><strong>Name:</strong>   {firstName + lastName}</p>
                <p><strong>Username:</strong>  {username} </p>
                <p><strong>Email:</strong>   {email}</p>
                <p><strong>Password:</strong>  {password}</p>
                <p><strong>Contact:</strong>   {contact}</p>
                <p><strong>Country:</strong>   {country}</p>
                <p><strong>City:</strong>   {city}</p>
                <p><strong>Aadhar No.:</strong>   {aadhar}</p>
                <p><strong>PAN No.:</strong>  {pan}</p>
            </div>
            <Link to="/">Go to Home</Link>
        </div>
    );
}

export default Success;