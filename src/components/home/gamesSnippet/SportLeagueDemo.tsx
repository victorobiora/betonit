import classes from "./SportLeagueDemo.module.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import SubGamesComponent from "./SubGamesComponent";

import * as dotenv from "dotenv";
import ErrorComponent from "@/components/general/ErrorComponent";

dotenv.config();

const SportLeagueDemo: React.FC<{
  activeSport: string;
  dataIsFetching: boolean;
  isError: {
    state: boolean;
    message: string;
  };
  updateLeagueData: (parameter: string) => void;
}> = ({ activeSport, dataIsFetching, isError, updateLeagueData }) => {
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

  useEffect(() => {
    //first, we find the index of the active class/active football league
    const index = selectedLeague.findIndex((el) => el.active === true);

    updateLeagueData(selectedLeague[index].requestID);
  }, [selectedLeague]);

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
          <TailSpin color="grey" ariaLabel="tail-spin-loading" visible={true} />
        </div>
      )}
      {!dataIsFetching && !isError.state && <SubGamesComponent />}
      {!dataIsFetching && isError.state && (
        <ErrorComponent errMessage={isError.message} />
      )}
    </section>
  );
};

export default SportLeagueDemo;
