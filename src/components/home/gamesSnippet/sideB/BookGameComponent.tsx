import { useState } from "react";
import classes from "./BookGameComponent.module.css";

const BookGameComponent: React.FC = (props) => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);


  let buttonClassName = buttonDisabled ? `${classes.formButton} ${classes.disabled}` : `${classes.formButton}`
  const updateInputTextHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.value.length > 0) {
      setButtonDisabled(false)
    }else{
      setButtonDisabled(true)
    }
  };
  return (
    <main className={classes.bookgame_container}>
      <div className={classes.bookingcode_section}>
        <p>To place a bet, click on the odds. Or insert a booking code</p>
        <form>
          <div className={classes.custom_select}>
            <div className={classes.selected_option}>
                <span>Nigeria</span>
                <span>{'>'}</span>
            </div>
            <select>
              <option value="Nigeria">Nigeria</option>
              <option value="Ghana">Ghana</option>
              <option value="Canada">Canada</option>
            </select>
          </div>

          <input
            type="text"
            placeholder="Booking Code"
            onChange={updateInputTextHandler}
          />
          <button disabled={buttonDisabled} className={buttonClassName}>Load</button>
          <p>
            A booking code enables one to transfer a betslip between different
            devices.
          </p>
        </form>
      </div>
    </main>
  );
};

export default BookGameComponent;
