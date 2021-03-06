import React, { useState, useEffect } from "react";
import "../App.css";
import Username from "../components/Username";
import Password from "../components/Password";
import {  Navigate } from "react-router-dom";
const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function login() {
    const res = await fetch(`http://127.0.0.1:8000/api/v1/admin/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });
    const data = await res.json();
    console.log(data);
    return data;
  }

  // useEffect(() => {
  //   const getTasks = async () => {
  //     const serverTasks = await fetchTasks();
  //     setTasks(serverTasks);
  //   };
  //   getTasks();
  // }, []);
  return (
    <div className="body_container">
      <div className="content_container">
        <h1 class="title">Login</h1>
        <hr></hr>
        <hr class="hr"></hr>
        <form onSubmit={console.log(email)}>
          <Username setEmail={setEmail} email={email} />
          <Password setPassword={setPassword} password={password} />
          <input
            onClick={(e) => {
              e.preventDefault();
              let response=login();
              console.log("R",response['access_token'])
              if (response["access_token"]){
                localStorage.setItem("access_token",response["access_token"]);
                <Navigate to="/Admin page"/>
              }
              else{
                alert("Wrong username or password")
              }
            }}
            type="submit"
            className="submit"
            value="Login"
          />
          <br />
        </form>
      </div>
    </div>
  );
};

export default Admin;
