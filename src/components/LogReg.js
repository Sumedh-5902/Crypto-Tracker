import React, { useState } from "react";
import "../styles/LogReg.css";
import img1 from "../assets/left.jpeg";
import img from "../assets/right.jpg";

const LogReg = () => {
  const [formDataRegister, setFormDataRegister] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");

  const handleChangeRegister = (e) => {
    const { name, value } = e.target;
    setFormDataRegister({ ...formDataRegister, [name]: value });
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formDataRegister;
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataRegister),
      });
      const data = await response.json();
      setMessage(data.message);
      if (response.ok) {
        window.location.href = "http://localhost:3000/login";
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Server Error");
    }
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setMessage(data.message);
      if (response.ok) {
        window.location.href = "http://localhost:3000/";
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Server Error");
    }
  };
  const toggleForm = () => {
    const container = document.querySelector(".container");
    container.classList.toggle("active");
  };

  return (
    <div className="main-container">
      <div className="container">
        <div className="user signinBx">
          <div className="imgBx">
            <img src={img1} alt="" />
          </div>
          <div className="formBx">
            <form onSubmit={handleSubmitLogin}>
              <h2>Log In</h2>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <input type="submit" value="Login" />
              <p className="signup">
                Don't have an account ?<a onClick={toggleForm}>Sign Up.</a>
              </p>
            </form>
          </div>
        </div>

        <div className="user signupBx">
          <div className="formBx">
            <form onSubmit={handleSubmitRegister}>
              <h2>Create an account</h2>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formDataRegister.username}
                onChange={handleChangeRegister}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formDataRegister.email}
                onChange={handleChangeRegister}
              />
              <input
                type="password"
                name="password"
                placeholder="Create Password"
                value={formDataRegister.password}
                onChange={handleChangeRegister}
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formDataRegister.confirmPassword}
                onChange={handleChangeRegister}
              />
              <input type="submit" value="Sign Up" />
              <p className="signup">
                Already have an account ?
                <a href="#" onClick={toggleForm}>
                  Sign in.
                </a>
              </p>
              {message && <p className="message">{message}</p>}
            </form>
          </div>
          <div className="imgBx">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogReg;