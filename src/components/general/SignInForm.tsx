import classes from "./SignInForm.module.css";

const SignInForm: React.FC = () => {

  const checkLogin = () => {
    //..check if login details are correct 
  }

  const registerButtonHandler = (event:React.FormEvent) => {
    event.preventDefault()
  }
  return (
    <form className={classes.form_container}>
      <div className={classes.form_getInput}>
        <span>+234</span>
        <input type="text" placeholder="Mobile Number" />
      </div>
      <div className={classes.form_getInput}>
        <input type="password" placeholder="Password" />
        <span className={classes.login_button} onClick={checkLogin}>Login</span>
      </div>
      <div className={classes.form_getInput}>
        <button onClick={registerButtonHandler}> Register </button>
      </div>
    </form>
  );
};

export default SignInForm;
