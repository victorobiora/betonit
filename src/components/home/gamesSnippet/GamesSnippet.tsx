import classes from "./GamesSnippet.module.css";
import FutureGamesCardComponent from "./FutureGamesCard";
import LiveGamesCard from "./LiveGamesCard";
import BetSlip from "./sideB/BetSlip";
import GrandPrizeComponent from "./sideB/GrandPrizeComponent";
import Image from "next/image";

const GamesSnippet: React.FC = () => {
  return (
    <section className={classes.container}>
      <div className={classes.side_A}>
        <FutureGamesCardComponent />
        <LiveGamesCard />
      </div>
      <div className={classes.side_B}>
        <BetSlip />
        <div className={classes.auto_cashout_image}>
          <Image
            src="https://s.sporty.net/common/main/res/1bb2b841d7d9e35df3c3b9c70306fe0a.png"
            alt="betImga"
            width={500}
            height={500}
          />
        </div>
        <GrandPrizeComponent />
      </div>
    </section>
  );
};

export default GamesSnippet;
