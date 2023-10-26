import classes from './SubGameItemStyles.module.css'
import { useState } from "react";

const SubGameItem: React.FC = () => {
  const [goalsOver, setGoalsOver] = useState<string>();

  const updateGoalsOverHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setGoalsOver(event.target.value);
  };

  return (
    <li className={classes.sub_games_main}>
      <div className={classes.team_data}>
        <div className={classes.team_data_details}>
          <div className={classes.time}>16: 30</div>
          <div className={classes.id}>ID: 345T</div>
        </div>
        <ul className={classes.teams}>
          <li className={classes.home_team}>Manchester United</li>
          <li className={classes.away_team}> Chelsea</li>
        </ul>
      </div>
      <ul className={classes.sub_games_main_odds}>
        <div>
          <li>1.86</li>
          <li>2.3</li>
          <li>4.77</li>
        </div>
        <div>
          <select value={goalsOver} onChange={updateGoalsOverHandler}>
            <option value="1.3">1.3</option>
            <option value="2.3">2.3</option>
          </select>
          <li>1.22</li>
          <li>4.66</li>
        </div>
      </ul>
    </li>
  );
};
export default SubGameItem;
