// src/components/Login.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/login", {
        email,
        password
      }).then(res => {
        if (res.data === "exist") {
          navigate("/search", { state: { id: email } });
        } else if (res.data === "notexist") {
          alert("User has not signed up");
        }
      }).catch(e => {
        alert("Wrong details");
        console.log(e);
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={submit}>
        <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" /> <br /><br />
        <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" /> <br /><br />
        <input type="submit" />
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to="/signup">Signup Page</Link>
    </div>
  );
}

export default Login;