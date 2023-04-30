import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { firebaseAuth } from "../utils/firebase-config";
export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  
  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  };


  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <Container showPassword={showPassword}>
      {/* <BackgroundImage /> */}
      {/* <div className="content"> */}
        
        <header className="showcase">
        <div className="header">
        <Header login />
        </div>
        <div className="showcase-content">
          <div className="formm">
          <div className="text flex column">
            <h1>Unlimited Movies, TV Shows and More</h1>
            <h4>Watch anywhere, Cancel Anytime.</h4>
            <h6>
              Ready to watch? Enter your email to create or restart membership
            </h6>
          </div>
          <form>
          <div className="info">
            <input
            className="email"
              type="email"
              placeholder="Email Address"
              name="email"
              value={formValues.email}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
            />
            {showPassword && (
              <input
              className="password"
                type="password"
                placeholder="Password"
                name="password"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            )}
            
            {!showPassword && (
              <button className="btn-primary" onClick={() => setShowPassword(true)}>Get Started</button>
            )}
            </div>
            </form>
          
          {showPassword && (<button className="btn-secondary" onClick={handleSignIn}>Sign Up</button>)}
          </div>
        </div>
        </header>
      {/* </div> */}
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
    width: 100vw;
    
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
    padding: 60px 65px;
  }

  .text{
    gap: 1rem;
    margin: 0 auto;
    text-align: center;
    justify-content: center;
    font-size: 2rem;
    h1{
      padding: 0 25rem;
    }
  }

  h6{
    margin-top: 1.5rem;
    margin-bottom: 2rem;
  }
  .formm h1 {
    margin-bottom: 20px;
  }
  
  .formm {
    width: 100%;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .info{
    width: 90%;
    margin: 0 auto;
    margin-top: 5rem;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: ${({ showPassword }) =>
          showPassword ? "1fr 1fr" : "2fr 1fr"}}};
  }
  
  .formm .info {
    padding: 5px 10px;
    /* margin-bottom: 20px; */
    margin-bottom: 20px;
  }
  
  .contrast{
    background: rgb(0, 0, 0, 0.65);
  }

  .formm .info .email {
    margin-left: 10px;
    width: 100%;
    height: 70px;
    border-radius: 5px;
    border: none;
    padding: 10px;
    font-size: inherit;
  }
  .formm .info .password {
    margin-left: 10px;
    width: 100%;
    height: 70px;
    border-radius: 5px;
    border: none;
    padding: 10px;
    font-size: inherit;
  }
  
  .btn-primary {
    margin-left: 10px;
    width: 100%;
    height: 70px;
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
  .btn-secondary{
    display: block;
    margin: auto;
    width: 10%;
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
  
  input[type=email] {
    background: #fff;
    color: #343434;
  }
  
  input[type=password] {
    background: #fff;
    color: #343434;
  }
  `;
  