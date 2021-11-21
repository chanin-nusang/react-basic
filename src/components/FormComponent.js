import { useState } from "react";
import "./FormComponent.css";
const FormComponent = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorRepassword, setErrorRepassword] = useState("");
  const [usernameColor, setUsernameColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [repasswordColor, setRepasswordColor] = useState("");
  const validateForm = (e) => {
    e.preventDefault();
    if (username.length > 7) {
      setErrorUsername("");
      setUsernameColor("green");
    } else {
      setErrorUsername(
        "กรุณาป้อนชื่อผู้ใช้ที่มีความยาวตั้งแต่ 8 ตัวอักษรขึ้นไป"
      );
      setUsernameColor("red");
    }
    if (email.includes("@")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("รูปแบบอีเมลไม่ถูกต้อง");
      setEmailColor("red");
    }
    if (
      password.length > 7 &&
      password.search(/[a-z]/i) >= 0 &&
      password.search(/[A-Z]/i) >= 0 &&
      password.search(/[0-9]/) >= 0 &&
      password.search(/[!@#$%^&*.]/) >= 0
    ) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword(
        "รหัสผ่านต้องมีจำนวนตั้งแต่ 8 ตัวอักษรขึ้นไปและประกอบด้วยตัวอักษรพิมพ์เล็ก พิมพ์ใหญ่ สัญลักษณ์ และตัวเลข"
      );
      setPasswordColor("red");
    }
    if (repassword === password && repassword !== "") {
      setErrorRepassword("");
      setRepasswordColor("green");
    } else {
      setErrorRepassword("รหัสผ่านไม่ตรงกัน");
      setRepasswordColor("red");
    }
  };
  return (
    <div className="container">
      <form className="form" onSubmit={validateForm}>
        <h2>แบบฟอร์มลงทะเบียน</h2>
        <div className="form-control">
          <label>ชื่อผู้ใช้</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ borderColor: usernameColor }}
          />
          <small>{errorUsername}</small>
        </div>
        <div className="form-control">
          <label>อีเมล</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderColor: emailColor }}
          />
          <small>{errorEmail}</small>
        </div>
        <div className="form-control">
          <label>รหัสผ่าน</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderColor: passwordColor }}
          />
          <small>{errorPassword}</small>
        </div>
        <div className="form-control">
          <label>ยืนยันรหัสผ่าน</label>
          <input
            type="password"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
            style={{ borderColor: repasswordColor }}
          />
          <small>{errorRepassword}</small>
        </div>
        <button type="submit">ลงทะเบียน</button>
      </form>
    </div>
  );
};
export default FormComponent;
