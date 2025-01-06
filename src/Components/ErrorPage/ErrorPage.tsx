import "./ErrorPage.css";
import Logo from "/Images/Logo.svg";

const ErrorPage = () => {
  return (
    <div id="errorWrapper">
      <img src={Logo} alt="Logo todolist" />
      <h1>404</h1>
      <h2>Strona nie znaleziona!</h2>
    </div>
  );
};

export default ErrorPage;
