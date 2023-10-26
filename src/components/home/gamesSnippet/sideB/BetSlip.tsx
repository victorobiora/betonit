import classes from "./BetSlip.module.css";
import { useState } from "react";
import BookGameComponent from "./BookGameComponent";
import CashOutComponent from "./CashOutComponent";

const BetSlip: React.FC = (props) => {
  const [mode, setMode] = useState<string>("betslip");

  const setListClass = (arg:string) => {
    if((mode === 'betslip' && arg === 'betslip') || (mode === 'cashout' && arg === 'cashout')){
        return classes.active_option
    }else {
        return ''
    }
}
  
  return (
    <section className={classes.slip_container}>
      <ul>
        <li className={setListClass('betslip')} onClick={() => setMode('betslip')}>
         BetSlip
        </li>
        <li className={setListClass('cashout')}  onClick={() => setMode('cashout')}>
          Cash-Out
        </li>
      </ul>
      {mode === "betslip" && <BookGameComponent />}
      {mode !== "betslip" && <CashOutComponent/>}
    </section>
  );
};

export default BetSlip;
