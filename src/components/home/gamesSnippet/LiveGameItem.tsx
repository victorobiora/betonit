import classes from "./LiveGameItem.module.css";
import { useState } from "react";

const LiveGameItem: React.FC = () => {
  const [goalsOver, setGoalsOver] = useState<string>();

  const updateGoalsOverHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setGoalsOver(event.target.value);
  };

  return (
    <main className={classes.sub_games_main}>
      <div className={classes.team_data}>
        <div className={classes.team_data_details}>
          <div className={classes.polygon}></div>
          <div>
            <div className={classes.time}>84: 05</div>
            <div className={classes.id}>H2</div>
          </div>
        </div>
        <ul className={classes.teams_1}>
          <li className={classes.home_team}>RUGR</li>

          <li className={classes.away_team}> Chelsea</li>
        </ul>
        <ul className={classes.teams_2}>
          <li className={classes.home_team_score}>3</li>
          <li className={classes.away_team_score}> 0</li>
        </ul>
      </div>
      <div className={classes.team_odds_1}>
        <li>1.86</li>
        <li>2.3</li>
        <li>4.77</li>
      </div>
      <div className={classes.team_odds_2}>
        <select value={goalsOver} onChange={updateGoalsOverHandler}>
          <option value="1.3">1.3</option>
          <option value="2.3">2.3</option>
        </select>
        <li>1.22</li>
        <li>3.56</li>
        <li>4.66</li>
      </div>
    </main>
  );
};
export default LiveGameItem;
