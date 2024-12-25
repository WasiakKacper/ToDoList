import { useState } from "react";
import "./LoginAndRegister.css";
import Logo from "/Images/Logo.svg";

const LoginAndRegister = () => {
  const [isActive, setIsActive] = useState(false);
  const [visible, setVisibility] = useState(false);

  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const handleRender = async () => {
    setIsActive(!isActive);
    await sleep(100);
    setVisibility(!visible);
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
              <input type="email" name="email" className="inputs" />
            </div>

            <div className="inputLabelContainer">
              <label htmlFor="password">Hasło:</label>
              <input type="password" className="inputs" name="password" />
            </div>

            <button onSubmit={(e) => e.preventDefault()}>Zaloguj się!</button>
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
              <input type="email" name="email" className="inputs" />
            </div>

            <div className="inputLabelContainer">
              <label htmlFor="password">Hasło:</label>
              <input type="password" className="inputs" name="password" />
            </div>

            <div className="inputLabelContainer">
              <label htmlFor="password">Powtórz hasło:</label>
              <input type="password" className="inputs" name="password" />
            </div>

            <button>Zarejstruj się!</button>
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
