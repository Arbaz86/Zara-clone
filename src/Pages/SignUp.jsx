import React, { useState } from "react";
import styles from "../Styled/signup.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../Redux/AuthReducer/action";
import { SIGNUP_SUCCESS } from "../Redux/AuthReducer/actionTypes";
const SignUp = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    name: "",
    username: "",
    // address : '',
    // locality : '',
    // pincode : '',
    // city : '',
    // state : '',
    mobile: "",
    description: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUserDetails = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };
  // console.log(userDetails);
  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(register(userDetails)).then((r) => {
      if (r === SIGNUP_SUCCESS) {
        navigate("/in/login", { replace: true });
      }
    });
  };
  return (
    <div className={styles.main}>
      <div>
        <p style={{ marginLeft: "30px" }} className={styles.heading}>
          PERSONAL DETAILS
        </p>

        <div style={{ marginLeft: "30px" }}>
          <span>
            <input type="radio" />
            &nbsp; PERSONAL
          </span>{" "}
          &nbsp; &nbsp; &nbsp; &nbsp;
          <span>
            <input type="radio" /> &nbsp;COMPANY
          </span>
        </div>

        <div className={styles.input_wrap}>
          <br />

          <input
            style={{ width: "400px" }}
            className={styles.inputText}
            name="email"
            value={userDetails.email}
            onChange={handleUserDetails}
            type="text"
            required
          />
          <label className={styles.label}>E-MAIL</label>
        </div>
        <div className={styles.input_wrap}>
          <br />
          <input
            style={{ width: "400px" }}
            className={styles.inputText}
            name="password"
            value={userDetails.password}
            onChange={handleUserDetails}
            type="password"
            required
          />
          <label className={styles.label}>PASSWORD</label>
        </div>
        <div className={styles.input_wrap}>
          <br />
          <input
            style={{ width: "400px" }}
            className={styles.inputText}
            name="name"
            value={userDetails.name}
            onChange={handleUserDetails}
            type="text"
            required
          />
          <label className={styles.label}>NAME</label>
        </div>

        <div className={styles.input_wrap}>
          <br />
          <input
            style={{ width: "400px" }}
            className={styles.inputText}
            name="username"
            value={userDetails.username}
            onChange={handleUserDetails}
            type="text"
            required
          />
          <label className={styles.label}>USERNAME</label>
        </div>

        <div className={styles.input_wrap}>
          <br />
          <input
            style={{ width: "400px" }}
            className={styles.inputText}
            name="description"
            value={userDetails.description}
            onChange={handleUserDetails}
            type="text"
            required
          />
          <label className={styles.label}>ADDRESS</label>
        </div>

        <div className={styles.input_wrap}>
          <br />
          <input
            style={{ width: "400px" }}
            className={styles.inputText}
            name="pincode"
            value={userDetails.pincode}
            type="number"
            required
          />
          <label className={styles.label}>PINCODE</label>
        </div>
        <div className={styles.input_wrap}>
          <br />
          <input
            style={{ width: "400px" }}
            className={styles.inputText}
            name="city"
            value={userDetails.city}
            type="text"
            required
          />
          <label className={styles.label}>CITY</label>
        </div>
        <div className={styles.input_wrap}>
          <br />
          <input
            style={{ width: "400px" }}
            className={styles.inputText}
            name="state"
            value={userDetails.state}
            type="text"
            required
          />
          <label className={styles.label}>STATE</label>
        </div>
        <div className={styles.input_wrap}>
          <br />
          <input
            style={{ width: "400px" }}
            className={styles.inputText}
            name="mobile"
            value={userDetails.mobile}
            onChange={handleUserDetails}
            type="number"
            required
          />
          <label className={styles.label}>MOBILE</label>
        </div>
        <div style={{ marginLeft: "30px" }}>
          <input
            type="checkbox"
            style={{ display: "inline", marginRight: "6px" }}
          />
          <p style={{ display: "inline" }}>
            {" "}
            I WISH TO RECEIVE ZARA NEWS ON MY E-MAIL
          </p>
        </div>
        <div style={{ marginLeft: "30px" }}>
          <input
            type="checkbox"
            required
            style={{ display: "inline", marginRight: "6px" }}
          />
          <p style={{ display: "inline" }}>
            {" "}
            I ACCEPT THE{" "}
            <p style={{ textDecoration: "underline", display: "inline" }}>
              PRIVACY STATEMENT
            </p>
          </p>
        </div>
        <div className={styles.btnDiv}>
          <input
            style={{ width: "400px" }}
            className={styles.submitBtn}
            onClick={handleSignUp}
            type="submit"
            value="CREATE ACCOUNT"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default SignUp;
