import "./Home.css";
import Logo from "/Images/Logo.svg";

const CreateList = () => {
  return (
    <div id="container">
      <div id="left">
        <img src={Logo} alt="Todolist logo" />
        <div id="wrapper">
          <h1>
            Witaj w <span>Todolist</span> życzę miłego planowania.
          </h1>
          <br />
          <br />
          <h1>Tu pokażą się twoje listy kiedy je utworzysz.</h1>
        </div>
      </div>
      <div id="right">
        <button>
          <h2>+</h2>
          <h1>Stwórz listę</h1>
        </button>
      </div>
    </div>
  );
};

export default CreateList;
