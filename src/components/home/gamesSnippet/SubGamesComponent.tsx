import { useEffect, useState } from "react";
import SubGameItem from "./SubGameItem";
import classes from "./SubGameItemStyles.module.css";
import { useAppSelector } from "@/store/hooks";
import { leagueDataFormat } from "@/store/generalStore";

const SubGamesComponent: React.FC = (props) => {
  const storeGames = useAppSelector((el) => el.futureGamesData.leagueData);
  const [formatGames, setFormatGames] = useState<boolean>(true);
  const formattedGames: leagueDataFormat[]= storeGames.slice(0, 8);
  const [gamesShown, setGamesShown] = useState<leagueDataFormat[]>(
    formattedGames
  );

  console.log(formattedGames);

  const updateGamesViewHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    //here, we choose to show a few games or all games
    setFormatGames((prevState) => !prevState);
  };

  useEffect(() => {
    if (formatGames) {
      setGamesShown(formattedGames);
    } else {
      setGamesShown(storeGames);
    }
  }, [formatGames]);

  return (
    <ul className={classes.sub_games}>
      <li className={classes.sub_games_header}>
        <div>
          <h3></h3>
        </div>
        <ul className={classes.sub_games_header_title}>
          <div className={classes.homeOrAway}>
            <li>1</li>
            <li>X</li>
            <li>2</li>
          </div>
          <div className={classes.goalsOdds}>
            <li>Goals</li>
            <li>Over</li>
            <li>Under</li>
          </div>
        </ul>
      </li>
      {gamesShown.map((el) => (
        <SubGameItem key={Math.random() * 233} data={el}/>
      ))}
      <button
        className={classes.viewAll_button}
        onClick={updateGamesViewHandler}
      >
       {formatGames ? 'View All' : 'View Less'}
        <span> {">"}</span>
      </button>
    </ul>
  );
};

export default SubGamesComponent;
