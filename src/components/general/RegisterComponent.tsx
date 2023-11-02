import React, { useState } from "react";
import classes from "./RegisterComponent.module.css";
import Link from "next/link";

const RegisterComponent: React.FC<{
  removeRegComponent: () => void;
}> = (props) => {
  const [isReg, setIsReg] = useState<boolean>(true);
  const [inputNumberClass, setInputNumberClass] = useState<string>(
    classes.input_text
  );
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [registerDetails, setRegisterDetails] = useState<{
    regPhoneNumber: string;
    regPassword: string;
  }>({
    regPhoneNumber: "",
    regPassword: "",
  });

  const [logInDetails, setLogInDetails] = useState<{
    logInPhoneNumber: string;
    logInPassword: string;
    rememberMeChecked: boolean;
    keepMeLoggedInChecked: boolean;
  }>({
    logInPhoneNumber: "",
    logInPassword: "",
    rememberMeChecked: false,
    keepMeLoggedInChecked: false,
  });

  const regOrLoginClass = isReg
    ? `${classes.register_on}`
    : `${classes.login_on}`;

  let buttonClassName = buttonDisabled
    ? `${classes.formButton} ${classes.disabled}`
    : `${classes.formButton}`;

  const removeComponentHandler = (): void => {
    props.removeRegComponent();
  };

  const updateModeToReg = (): void => {
    setIsReg(true);
  };
  const updateModeToLogin = (): void => {
    setIsReg(false);
  };

  const updateCheckedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogInDetails((prevState) => {
      if (event.target.name === "Remember Me") {
        return {
          ...prevState,
          rememberMeChecked: event.target.checked,
        };
      } else {
        return {
          ...prevState,
          keepMeLoggedInChecked: event.target.checked,
        };
      }
    });
  };

  const updatePasswordHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (isReg) {
      setRegisterDetails((prevState) => {
        return {
          ...prevState,
          regPasssword: event.target.value,
        };
      });
    } else {
      setLogInDetails((prevState) => {
        return {
          ...prevState,
          logInPassword: event.target.value,
        };
      });
    }
  };

  const updateRegNumberHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!isNaN(Number(event.target.value))) {
      if (isReg) {
        setRegisterDetails((prevState) => {
          return {
            ...prevState,
            regPhoneNumber: event.target.value,
          };
        });
      } else {
        setLogInDetails((prevState) => {
          return {
            ...prevState,
            logInPhoneNumber: event.target.value,
          };
        });
      }
    }
  };

  console.log(registerDetails, logInDetails);

  return (
    <section className={classes.container}>
      <main className={classes.backdrop}></main>
      <main className={classes.main_form}>
        <div className={classes.exitButton} onClick={removeComponentHandler}>
          X
        </div>
        <div className={`${classes.reg_form_header} ${regOrLoginClass}`}>
          <section>
            <div className={classes.regLog}>
              <div onClick={updateModeToReg}>Register</div>
              <div onClick={updateModeToLogin}>Login</div>
            </div>
            <span></span>
          </section>
        </div>
        <form className={classes.reg_form}>
          <div className={classes.inputData}>
            <div className={inputNumberClass}>
              <span>+234</span>
              <input
                type="text"
                placeholder="Mobile Number"
                onChange={updateRegNumberHandler}
                value={
                  isReg
                    ? registerDetails.regPhoneNumber
                    : logInDetails.logInPhoneNumber
                }
                onMouseDown={(): void => {
                  setInputNumberClass(
                    `${classes.input_text} ${classes.addNumberEffect}`
                  );
                }}
                onBlur={(): void => {
                  setInputNumberClass(`${classes.input_text}`);
                }}
              />
            </div>
            <div
              className={classes.input_password}
              onChange={updatePasswordHandler}
            >
              <input type="password" placeholder="Set Password" />
            </div>
          </div>
          {!isReg && (
            <div className={classes.login_preferences}>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    name="Remember Me"
                    onChange={updateCheckedHandler}
                  />
                  <label htmlFor="Remember Me">Remember me</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="Keep me signed In"
                    onChange={updateCheckedHandler}
                  />
                  <label htmlFor="Keep me signed In">Keep me signed In</label>
                </li>
              </ul>
              <Link href="">Forgot Password ? </Link>
            </div>
          )}

          <button disabled={buttonDisabled} className={buttonClassName}>
            {isReg ? "Create New Account" : "Login"}
          </button>
          {isReg && (
            <p className={classes.compliance_text}>
              By creating an account, you agree to our Terms & Conditions and
              confirm that you are at least <br /> 18 years old or over and all
              information given is true.
            </p>
          )}
          <section className={classes.ball}>
            <img src="https://s.sporty.net/global/main/modules/main/desktop/common/components/login/image/popupBall2.0aaeb1c629.png" />
          </section>
        </form>
      </main>
    </section>
  );
};

export default RegisterComponent;
