import classes from "./GrandCarousel.module.css";
import { useEffect, useState } from "react";

const GrandCarousel: React.FC<{
  winnerData: {
    amount: number;
    phoneNumber: string;
  }[];
}> = ({ winnerData }) => {
    const [animationClass, setAnimationClass] = useState<boolean>(true)


    const stopAnimationHandler = (event: React.MouseEvent<HTMLDivElement>)=> {

        setAnimationClass(false)
    }
    const playAnimationHandler = (event: React.MouseEvent<HTMLDivElement>)=> {

        setAnimationClass(true)
    }

  return (
    <div className={classes.container} onMouseEnter={stopAnimationHandler} onMouseLeave={playAnimationHandler}>
      {winnerData.map((el) => {
        const formatter = new Intl.NumberFormat("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
        const formattedNumber = formatter.format(el.amount);

        return (
          <div className={animationClass ? `${classes.win_item} ${classes.playAnimation}` : `${classes.win_item} ${classes.pauseAnimation}`} key={el.amount}>
            <div className={classes.win_item_amountTime}>
              <div className={classes.amount}>NGN{formattedNumber}</div>
              <div className={classes.time}>1 min ago</div>
            </div>
            <div className={classes.win_item_numberSport}>
              <div className={classes.sport}>Sport Betting</div>
              <div className={classes.number}>{el.phoneNumber}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GrandCarousel;
