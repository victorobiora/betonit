import { useState } from "react";
import classes from "./RegisterComponent.module.css";
import Link from "next/link";

const RegisterComponent: React.FC = (props) => {
  const [isReg, setIsReg] = useState<boolean>(true);

  const regOrLoginClass = isReg
    ? `${classes.register_on}`
    : `${classes.login_on}`;

  return (
    <section className={classes.container}>
      <main className={classes.main_form}>
        <div className={`${classes.reg_form_header} ${regOrLoginClass}`}>
          <div>Register</div>
          <div>Login</div>
        </div>
        <form className={classes.reg_form}>
          <div>
            <input type="text" />
            <div className={classes.input_password}>
              <input type="password" />
            </div>
          </div>
          {!isReg && (
            <div className={classes.login_preferences}>
              <div>
                <input type="checkbox" name="Remember Me" />
                <input type="checkbox" name="Keep me signed In" />
              </div>
              <Link href="">Forgot Password</Link>
            </div>
          )}

          <button>{isReg ? "Create New Account" : "Login"}</button>
        </form>
        <div className={classes.ball}></div>
      </main>
    </section>
  );
};
