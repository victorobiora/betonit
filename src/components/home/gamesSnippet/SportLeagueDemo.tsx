import classes from "./SportLeagueDemo.module.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
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
//  const [leagueData, setLeagueData] = useState<>()
  const [dataIsFetching, setDataIsFetching] = useState <boolean>(false)

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

  //we use a useEffect that takes place anytime a user selects a different league
  //This updates the loading state accordingly and then makes the fetch call to get data for the selected league
  //afterwards the loading state is removed

  useEffect(() => {
  const updateLeagueData = async (parameter: string = '') => {
    const key:string | undefined = process.env.MY_API_KEY

    console.log(key)
      const initialCall = await fetch(`'https://api.the-odds-api.com/v4/sports/soccer_epl/odds/?apiKey=${key}&regions=us&markets=h2h,spreads,totals&bookmakers=mybookieag&oddsFormat=decimal`)
      const dataGotten = await initialCall.json();

      console.log(dataGotten)
    }

    updateLeagueData()
  }, [selectedLeague])


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
      {dataIsFetching && <div className={classes.loading_spinner}>
      <TailSpin
              color="#0047AB"
              ariaLabel="tail-spin-loading"
              radius="1"
              visible={true}
            />
        </div>}
     {!dataIsFetching && <SubGamesComponent />} 
    </section>
  );
};

export default SportLeagueDemo;
