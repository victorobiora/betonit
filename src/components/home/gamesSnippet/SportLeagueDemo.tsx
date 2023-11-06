import classes from "./SportLeagueDemo.module.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import SubGamesComponent from "./SubGamesComponent";
import * as dotenv from "dotenv";
import { demoData } from '../../../../demodata'

dotenv.config();

const SportLeagueDemo: React.FC = (props) => {
  const [selectedLeague, setSelectedLeague] = useState<
    {
      category: string;
      active: boolean;
    }[]
  >([
    { category: "soccer_epl", active: true },
    { category: "soccer_spain_la_liga", active: false },
    { category: "soccer_italy_serie_a", active: false },
    { category: "soccer_uefa_champs_league", active: false },
    { category: "soccer_uefa_europa_league", active: false },
  ]);
  //  const [leagueData, setLeagueData] = useState<>()
  const [dataIsFetching, setDataIsFetching] = useState<boolean>(false);

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
        (el) => el.category === (event.currentTarget.dataset.id as string)
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
    const updateLeagueData = async (
      parameter: string = selectedLeague[0].category
    ) => {
      const key: string | undefined = process.env.MY_API_KEY;

      console.log(key);
        console.log(demoData)
      /*
      const initialCall = await fetch(
        `https://api.the-odds-api.com/v4/sports/${parameter}/odds/?apiKey=1a70c240f4f2b2068b7456231b0a35c9&regions=us&markets=h2h,spreads,totals&bookmakers=mybookieag&oddsFormat=decimal`
      );
      const dataGotten = await initialCall.json();

      const gameItemObject = dataGotten.map((el: any) => {
        return {
          id: el.id,
          home_team: el.home_team,
          away_team: el.away_team,
          time: el.commence_time,
          odds: {
            h2h: {
              away_team_win: el.bookmakers[0].markets[0].outcomes[1].price,
              home_team_win: el.bookmakers[0].markets[0].outcomes[0].price,
              draw: el.bookmakers[0].markets[0].outcomes[2].price,
            },
            totals: {
              point: el.bookmakers[0].markets[1].outcomes[0].point,
              over: el.bookmakers[0].markets[1].outcomes[0].price,
              under: el.bookmakers[0].markets[1].outcomes[1].price,
            },
          },
        };
      });

      console.log(dataGotten);
      console.log(gameItemObject);*/
    };

    //passing in the active category into the async function
    const index = selectedLeague.findIndex((el) => el.active === true);

    updateLeagueData(selectedLeague[index].category);
  }, [selectedLeague]);

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
              data-id={el.category}
              key={el.category}
            >
              <p
                className={classes.sub_leagues_country}
                data-active={el.active}
                data-id={el.category}
              >
                Japan
              </p>
              <h3
                className={classes.sub_leagues_league}
                data-active={el.active}
                data-id={el.category}
              >
                B1 League
              </h3>
            </li>
          );
        })}
      </ul>
      {dataIsFetching && (
        <div className={classes.loading_spinner}>
          <TailSpin
            color="#0047AB"
            ariaLabel="tail-spin-loading"
            radius="1"
            visible={true}
          />
        </div>
      )}
      {!dataIsFetching && <SubGamesComponent />}
    </section>
  );
};

export default SportLeagueDemo;
