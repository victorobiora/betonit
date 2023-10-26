import { useState } from "react";
import classes from "./CashOutComponent.module.css";

const CashOutComponent: React.FC = (props) => {
  const [isLogggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <section>
      {!isLogggedIn && (
        <div className={classes.notLoggedIn}>No bets available</div>
      )}
    </section>
  );
};

export default CashOutComponent;