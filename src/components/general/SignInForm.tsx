import { useState } from "react";
import classes from "./SignInForm.module.css";
import RegisterComponent from "./RegisterComponent";
import { useAppSelector } from "@/store/hooks";
import { useAppDispatch } from "@/store/hooks";

const SignInForm: React.FC = () => {
  const isLoggedIn = useAppSelector((state) => state.logInStatus.areWeLoggedIn);
  const dispatch = useAppDispatch();
  const [showRegComponent, setShowRegComponent] = useState<boolean>(false);

  const checkLogin = () => {
    //..check if login details are correct
  };

  const registerButtonHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setShowRegComponent(true);
  };

  const removeRegHandler = () => {
    setShowRegComponent(false);
  };
  return (
    <>
      {!isLoggedIn && (
        <form className={classes.form_container}>
          <div className={classes.form_getInput}>
            <input type="text" placeholder="Email" />
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
      )}
      {isLoggedIn && (
        <div className={classes.logout_button}>
          <button onClick={registerButtonHandler}> Log Out </button>
        </div>
      )}

      {showRegComponent ||
        (isLoggedIn && (
          <RegisterComponent removeRegComponent={removeRegHandler} />
        ))}
    </>
  );
};

export default SignInForm;
