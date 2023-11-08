import classes from "./SportLeagueDemo.module.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import SubGamesComponent from "./SubGamesComponent";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { futureGamesActions } from "@/store/generalStore";
import * as dotenv from "dotenv";
import { demoData } from "../../../../demodata";
import ErrorComponent from "@/components/general/ErrorComponent";

dotenv.config();

const SportLeagueDemo: React.FC<{
  activeSport: string;
}> = ({ activeSport }) => {
  const valve = useAppSelector((el) => el.futureGamesData.leagueData);
  const dispatch = useAppDispatch();
  const [selectedLeague, setSelectedLeague] = useState<
    {
      requestID: string;
      country: string;
      competitionCode: string;
      active: boolean;
    }[]
  >([
    {
      requestID: "soccer_epl",
      country: "England",
      competitionCode: "EPL",
      active: true,
    },
    {
      requestID: "soccer_spain_la_liga",
      country: "Spain",
      competitionCode: "La Liga",
      active: false,
    },
    {
      requestID: "soccer_italy_serie_a",
      country: "Italy",
      competitionCode: "Serie A",
      active: false,
    },
    {
      requestID: "soccer_uefa_champs_league",
      country: "Europe",
      competitionCode: "UCL",
      active: false,
    },
    {
      requestID: "soccer_uefa_europa_league",
      country: "Europe",
      competitionCode: "UEL",
      active: false,
    },
  ]);
  const [dataIsFetching, setDataIsFetching] = useState<boolean>(false);
  const [isError, setIsError] = useState<{
    state: boolean,
    message: string

  }>({state: false, message: 'nil'})

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
        (el) => el.requestID === (event.currentTarget.dataset.id as string)
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
  console.log(valve);
  useEffect(() => {
    const updateLeagueData = async (
      parameter: string = selectedLeague[0].requestID
    ) => {
      const key: string | undefined = process.env.MY_API_KEY;

      console.log(key);
      console.log(demoData);
      dispatch(futureGamesActions.updateLeagueData(demoData));

      /*
      try{
  setDataIsFetching(true)
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

            dispatch(futureGamesActions.updateLeagueData(gameItemObject));
              setDataIsFetching(false)

      }catch(err){
        setIsError({state: true,
        message: 'We could not get your games for some reason. sorry :)'})
      }
     
      console.log(dataGotten);
      console.log(gameItemObject);*/
    };

    //passing in the active category into the async function
    const index = selectedLeague.findIndex((el) => el.active === true);

    updateLeagueData(selectedLeague[index].requestID);
  }, [selectedLeague]);

  return (
    <section className={classes.container}>
      {activeSport === "Football" && (
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
                data-id={el.requestID}
                key={el.requestID}
              >
                <p
                  className={classes.sub_leagues_country}
                  data-active={el.active}
                  data-id={el.requestID}
                >
                  {el.country}
                </p>
                <h3
                  className={classes.sub_leagues_league}
                  data-active={el.active}
                  data-id={el.requestID}
                >
                  {el.competitionCode}
                </h3>
              </li>
            );
          })}
        </ul>
      )}
      {dataIsFetching && (
        <div className={classes.loading_spinner}>
          <TailSpin
            color="grey"
            ariaLabel="tail-spin-loading"
            visible={true}
          />
        </div>
      )}
      {!dataIsFetching && !isError.state && <SubGamesComponent />}
      {!dataIsFetching && isError.state && <ErrorComponent errMessage={isError.message}/>}
    </section>
  );
};

export default SportLeagueDemo;
