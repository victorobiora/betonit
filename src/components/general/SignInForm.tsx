import { useState } from "react";
import classes from "./SignInForm.module.css";
import RegisterComponent from "./RegisterComponent";

const SignInForm: React.FC = () => {
  const [showRegComponent, setShowRegComponent] = useState<boolean>(false);

  const checkLogin = () => {
    //..check if login details are correct
  };

  const registerButtonHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setShowRegComponent(true)
  };

  const removeRegHandler = () => {
    setShowRegComponent(false)
  }
  return (
    <>
      {" "}
      <form className={classes.form_container}>
        <div className={classes.form_getInput}>
          <span>+234</span>
          <input type="text" placeholder="Mobile Number" />
        </div>
        <div className={classes.form_getInput}>
          <input type="password" placeholder="Password" />
          <span className={classes.login_button} onClick={checkLogin}>
            Login
          </span>
        </div>
        <div className={classes.form_getInput}>
          <button onClick={registerButtonHandler}> Register </button>
        </div>
      </form>
      {showRegComponent && <RegisterComponent removeRegComponent= {removeRegHandler}/>}
    </>
  );
};

export default SignInForm;
