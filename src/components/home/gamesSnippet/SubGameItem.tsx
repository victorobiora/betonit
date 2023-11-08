import classes from "./SubGameItemStyles.module.css";
import { useState } from "react";
import { leagueDataFormat } from "@/store/generalStore";

const SubGameItem: React.FC<{
  data: leagueDataFormat;
}> = ({ data }) => {
  const [goalsOver, setGoalsOver] = useState<string>();

  const updateGoalsOverHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setGoalsOver(event.target.value);
  };

  const date = new Date(data.time);

  const minute = () => {
    if (date.getUTCMinutes() === 0) {
      return "00";
    }
    return date.getUTCMinutes();
  };

  const time = `${date.getUTCHours()} : ${minute()}`;

  const newID = data.id.slice(0, 4).toUpperCase();

  console.log(time);

  return (
    <li className={classes.sub_games_main}>
      <div className={classes.team_data}>
        <div className={classes.team_data_details}>
          <div className={classes.time}>{time}</div>
          <div className={classes.id}>ID: {newID}</div>
        </div>
        <ul className={classes.teams}>
          <li className={classes.home_team}>{data.home_team}</li>
          <li className={classes.away_team}> {data.away_team}</li>
        </ul>
      </div>
      <ul className={classes.sub_games_main_odds}>
        <div>
          <li>{data.odds.h2h.home_team_win.toFixed(2)}</li>
          <li>{data.odds.h2h.draw.toFixed(2)}</li>
          <li>{data.odds.h2h.away_team_win.toFixed(2)}</li>
        </div>
        <div>
          <select value={goalsOver} onChange={updateGoalsOverHandler}>
            <option value={Math.abs(data.odds.totals.point)}>{Math.abs(data.odds.totals.point)}</option>
          </select>
          <li>{data.odds.totals.over}</li>
          <li>{data.odds.totals.under}</li>
        </div>
      </ul>
    </li>
  );
};
export default SubGameItem;
