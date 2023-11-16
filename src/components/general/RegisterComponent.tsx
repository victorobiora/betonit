import React, { useEffect, useState } from "react";
import classes from "./RegisterComponent.module.css";
import Link from "next/link";

const emailChecker = (val: string) => {
  if (
    val.length > 4 &&
    val.includes(`@`) &&
    val.includes(`.`, val.indexOf(`@`)) &&
    val.indexOf(".") > val.lastIndexOf("@") &&
    val.lastIndexOf(".") !== val.length - 1
  ) {
    return true;
  } else {
    return false;
  }
};

const RegisterComponent: React.FC<{
  removeRegComponent: () => void;
}> = (props) => {
  const [isReg, setIsReg] = useState<boolean>(true);
  const [inputEmailClass, setInputEmailClass] = useState<string>(
    classes.input_text
  );
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [registerDetails, setRegisterDetails] = useState<{
    regEmail: string;
    regPassword: string;
  }>({
    regEmail: "",
    regPassword: "",
  });

  const [logInDetails, setLogInDetails] = useState<{
    logInEmail: string;
    logInPassword: string;
    rememberMeChecked: boolean;
    keepMeLoggedInChecked: boolean;
  }>({
    logInEmail: "",
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
          regPassword: event.target.value,
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

  const updateEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isReg) {
      setRegisterDetails((prevState) => {
        return {
          ...prevState,
          regEmail: event.target.value,
        };
      });
    } else {
      setLogInDetails((prevState) => {
        return {
          ...prevState,
          logInEmail: event.target.value,
        };
      });
    }
  };

  const registerOrLoginHandler = async (
    event: React.MouseEvent<HTMLElement>
  ) => {};

  // console.log(registerDetails, logInDetails);

  useEffect(() => {
    if (isReg) {
      if (
        registerDetails.regPassword.length > 3 &&
        emailChecker(registerDetails.regEmail)
      ) {
        setButtonDisabled(false);
      } else {
        setButtonDisabled(true);
      }
    } else if (!isReg) {
      if (
        logInDetails.logInPassword.length > 3 &&
        emailChecker(logInDetails.logInEmail)
      ) {
        setButtonDisabled(false);
      } else {
        setButtonDisabled(true);
      }
    }
  }, [isReg, registerDetails, logInDetails]);

  console.log(buttonDisabled);

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
            <div className={inputEmailClass}>
              <input
                type="email"
                placeholder="Email"
                onChange={updateEmailHandler}
                value={
                  isReg ? registerDetails.regEmail : logInDetails.logInEmail
                }
                onMouseDown={(): void => {
                  setInputEmailClass(
                    `${classes.input_text} ${classes.addEmailEffect}`
                  );
                }}
                onBlur={(): void => {
                  setInputEmailClass(`${classes.input_text}`);
                }}
                required
              />
            </div>
            <div className={classes.input_password}>
              <input
                type="password"
                placeholder="Set Password"
                onChange={updatePasswordHandler}
                value={
                  isReg
                    ? registerDetails.regPassword
                    : logInDetails.logInPassword
                }
              />
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

          <button
            disabled={buttonDisabled}
            className={buttonClassName}
            onClick={registerOrLoginHandler}
          >
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
