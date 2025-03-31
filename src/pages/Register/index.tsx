import { useState } from "react";
import styles from "./Register.module.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const handleMobileNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMobileNumber(value);

    const mobileNumberRegex = /^[6-9]\d{9}$/; // Indian mobile numbers start with 6-9 and are 10 digits long
    if (!mobileNumberRegex.test(value)) {
      setMobileNumberError("Invalid Indian mobile number");
    } else {
      setMobileNumberError("");
    }
  };

  return (
    <div className={styles.container}>
      <h5>Welcome to the registration page!</h5>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required />
          {emailError && <p>{emailError}</p>}
        </div>
        <div>
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input type="tel" id="mobileNumber" name="mobileNumber" pattern="[0-9]{10}" value={mobileNumber} onChange={handleMobileNumberChange} required />
          {mobileNumberError && <p>{mobileNumberError}</p>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
