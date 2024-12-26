import { useState } from "react";
import "./LoginAndRegister.css";
import Logo from "/Images/Logo.svg";

//Login and Register component
const LoginAndRegister = () => {
  const [isActive, setIsActive] = useState(false);
  const [visible, setVisibility] = useState(false);

  //Sleep function
  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  //Site render function
  const handleRender = async () => {
    setIsActive(!isActive);
    await sleep(100);
    setVisibility(!visible);
  };

  //Getting value of input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isSamePassword, setIsSamePassword] = useState("");

  const handleGetLoginValues = () => {
    if (email != "" && password != "") {
      alert(email + " " + password);
      setEmail("");
      setPassword("");
    } else {
      alert("Pole email lub hasło jest puste");
      setEmail("");
      setPassword("");
    }
  };

  const handleGetRegisterValues = () => {
    if (email != "" && password != "" && isSamePassword != "") {
      if (isSamePassword == password) {
        alert(email + " " + password);
        setEmail("");
        setPassword("");
        setIsSamePassword("");
      } else {
        alert("Hasłą różnią się!");
      }
    } else {
      alert("Któreś z pól jest puste");
    }
  };

  return (
    <div id="container">
      <div id="cover" className={isActive ? "active" : ""}>
        <img src={Logo} alt="ToDoList logo" id="logo" />
      </div>
      <div id="loginAndRegister">
        {!visible ? (
          <div id="login" className="activeForm">
            <h1>Logowanie</h1>
            <div className="inputLabelContainer">
              <label htmlFor="email">Adres e-mail:</label>
              <input
                type="email"
                name="email"
                className="inputs"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="inputLabelContainer">
              <label htmlFor="password">Hasło:</label>
              <input
                type="password"
                className="inputs"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button onClick={handleGetLoginValues}>Zaloguj się!</button>
          </div>
        ) : (
          <div id="login" className="form">
            <h1>Masz już konto?</h1>
            <button onClick={handleRender}>Zaloguj się!</button>
          </div>
        )}
        {visible ? (
          <div id="register" className="activeForm">
            <h1>Rejestracja</h1>

            <div className="inputLabelContainer">
              <label htmlFor="email">Adres e-mail:</label>
              <input
                type="email"
                name="email"
                className="inputs"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="inputLabelContainer">
              <label htmlFor="password">Hasło:</label>
              <input
                type="password"
                className="inputs"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="inputLabelContainer">
              <label htmlFor="password">Powtórz hasło:</label>
              <input
                type="password"
                className="inputs"
                name="password"
                value={isSamePassword}
                onChange={(e) => setIsSamePassword(e.target.value)}
              />
            </div>

            <button onClick={handleGetRegisterValues}>Zarejstruj się!</button>
          </div>
        ) : (
          <div id="register" className="form">
            <h1>Nie masz konta?</h1>
            <button onClick={handleRender}>Zarejstruj się!</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginAndRegister;
