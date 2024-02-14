import { useState, useRef } from "react";
import s from "./Assignment6.module.css";

const Assignment6 = () => {
  const [inputVal, setInputValue] = useState("");
  const [boolVal, setBoolValue] = useState(null);

  function clickHandler(e) {
    e.preventDefault();

    if (inputVal.length < 10 || inputVal.length > 10) {
      setBoolValue(false);
    } else {
      setBoolValue(true);
    }
  }

  return (
    <div>
      <div
        className={s.container}
        style={{ display: boolVal == true ? "none" : "flex" }}
      >
        <h2>Login via OTP</h2>
        <input
          style={{ border: boolVal == false ? "1px solid red" : "" }}
          type="number"
          placeholder="Enter mobile number"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={clickHandler}>Sent OTP</button>
      </div>
      {/* {console.log("bool", boolVal)} */}
      {boolVal ? <OTP /> : ""}
    </div>
  );
};

export default Assignment6;

function OTP() {
  const [otp, setOTP] = useState(["", "", "", ""]);
  const otpInputs = useRef([]);

  const handleChange = (index, event) => {
    const value = event.target.value;
    if (!isNaN(value) && value !== "") {
      // Allow only numeric input
      const updatedOTP = [...otp];
      updatedOTP[index] = value;
      setOTP(updatedOTP);

      // Move focus to the next input field
      if (index < otp.length - 1 && value !== "") {
        otpInputs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && otp[index] === "") {
      // Move focus to the previous input field on backspace
      otpInputs.current[index - 1].focus();
    }
  };

  function handleClick(e) {
    e.preventDefault();
    console.log(otp);
  }

  return (
    <div className={s.otp_container}>
      <h2>Login via OTP</h2>
      <div className={s.otp_input_container}>
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(input) => (otpInputs.current[index] = input)} // Save reference to the input field
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
          />
        ))}
      </div>
      <button onClick={handleClick}>Login</button>
    </div>
  );
}
