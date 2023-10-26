import SubGameItem from "./SubGameItem";
import classes from "./SubGameItemStyles.module.css";

const SubGamesComponent: React.FC = (props) => {

  const p = [1, 3, 4, 5, 6, 7];

  return (
    <ul className={classes.sub_games}>
      <li className={classes.sub_games_header}>
        <div>
          <h3> 8/10 Sunday </h3>
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
      {p.map((el) => (
       <SubGameItem key={Math.random()* 233}/>
      ))}
    </ul>
  );
};

export default SubGamesComponent;
