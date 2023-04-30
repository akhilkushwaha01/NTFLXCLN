import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { firebaseAuth } from "../utils/firebase-config";
export default function Login() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = formValues;
      console.log(email, password);
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  };
  

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <Container>
      {/* <BackgroundImage /> */}
        
        <header className="showcase">
        <div className="header">
        <Header />
        </div>
        <div className="showcase-content">
          <div className="formm">
            <form>
              <h1>Sign In</h1>
              <div className="info">
                <input
                  className="email"
                  type="email"
                  name="email"
                  placeholder="Email or phone number"
                  value={formValues.email}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                <br />
                <input
                  className="email"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formValues.password}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
              <div className="btn">
                <button className="btn-primary" type="submit"  onClick={handleLogin}>
                  Sign In
                </button>
              </div>
              <div className="help">
                <div>
                  <input value="true" type="checkbox" />
                  <label>Remember me</label>
                </div>

                <a href="https://www.netflix.com/dz-en/LoginHelp" className="helpLink">
                  Need Help ?
                </a>
              </div>
            </form>
          </div>

          <div className="signup">
            <p>New to Netflix ?</p>
            <a href="/Signup" className="signupLink">Sign up now</a>
          </div>
        </div>
      </header>
        
    </Container>
  );
}

const Container = styled.div`
.header{
  position: relative;
  z-index: 2;
}
.showcase {
  position: absolute;
	width: 100%;
	height: 100vh;
	position: absolute;
  background: url('https://akhilkushwaha.com/assets/NTFLXCLN/login.jpg') no-repeat center center/cover;
  
}

.showcase::after {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	background: rgba(0, 0, 0, 0.65);
	box-shadow: inset 30px 10px 150px #000000;
}
.showcase-content {
	position: relative;
	z-index: 2;
	width: 450px;
	height: 550px;
	background: rgb(0, 0, 0, 0.65);
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	text-align: left;
	padding: 60px 65px;
}

.formm h1 {
	margin-bottom: 20px;
}

.formm {
	width: 100%;
	margin-bottom: 40px;
}

.formm .info {
	padding: 5px 0;
	/* margin-bottom: 20px; */
}

.formm .info .email {
	margin-bottom: 30px;
	width: 100%;
	height: 50px;
	border-radius: 5px;
	border: none;
	padding: 10px;
	font-size: inherit;
}

.formm .btn {
	margin-bottom: 10px;
	width: 100%;
}

.btn-primary {
	width: 100%;
	height: 50px;
	border-radius: 5px;
	background: red;
	color: #fff;
	font-size: inherit;
	font-weight: bold;
	border: none;
	cursor: pointer;
	outline: none;
	box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
}
.help {
	display: flex;
	justify-content: space-between;
	font-size: 0.8rem;
}

.help a {
	color: #999;
}

.help a:hover {
	text-decoration: underline;
}

input[type=checkbox] {
	background: #737373;
	-webkit-border-radius: 2px;
	-moz-border-radius: 2px;
	border-radius: 2px;
	border: 0;
	height: 16px;
	left: -20px;
	width: 16px;
	margin-right: 5px;
}

input[type=email] {
	background: #343434;
  color: #fff;
}

input[type=password] {
	background: #343434;
  color: #fff;
}

.helpLink{
  text-decoration: none;
}
.helpLink:focus{
  text-decoration: none;
}
.signup {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
}

.signup p {
	margin-right: 5px;
  color: #999;
}

.signupLink {
  color: #fff;
  text-decoration: none;
}
`;
