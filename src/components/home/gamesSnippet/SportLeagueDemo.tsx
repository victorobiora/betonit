import classes from "./SportLeagueDemo.module.css";
import React from "react";
import { useState } from "react";
import SubGamesComponent from "./SubGamesComponent";

const SportLeagueDemo: React.FC = (props) => {
  const [selectedLeague, setSelectedLeague] = useState<
    {
      num: number;
      active: boolean;
    }[]
  >([
    { num: 1, active: true },
    { num: 2, active: false },
    { num: 3, active: false },
    { num: 4, active: false },
    { num: 5, active: false },
  ]);

  const updateGamesHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    //The data attritube represents all data as string and that is why the conditional is structured that way
    //I could use JSON.parse() to convert it back to boolean.

    if (event.currentTarget.dataset.active === "true") {
      return;
    } else {
      const newArray = [...selectedLeague];

      const currentSelectedID = selectedLeague.findIndex(
        (el) => el.active === true
      );
      const IDToBeChanged = selectedLeague.findIndex(
        (el) => el.num === parseInt(event.currentTarget.dataset.id as string)
      );
      console.log(currentSelectedID, IDToBeChanged);
      newArray[currentSelectedID].active = false;
      newArray[IDToBeChanged].active = true;

      setSelectedLeague(newArray);
    }
  };


  return (
    <section className={classes.container}>
      <ul className={classes.sub_leagues}>
        {selectedLeague.map((el) => {
          const activeClass = (activeState: boolean) =>
            activeState === true
              ? `${classes.sub_leagues_item} ${classes.active}`
              : `${classes.sub_leagues_item}`;
          return (
            <li
              className={activeClass(el.active)}
              onClick={updateGamesHandler}
              data-active={el.active}
              data-id={el.num}
              key={el.num}
            >
              <p
                className={classes.sub_leagues_country}
                data-active={el.active}
                data-id={el.num}
              >
                Japan
              </p>
              <h3
                className={classes.sub_leagues_league}
                data-active={el.active}
                data-id={el.num}
              >
                B1 League
              </h3>
            </li>
          );
        })}
      </ul>
      <SubGamesComponent />
    </section>
  );
};

export default SportLeagueDemo;
