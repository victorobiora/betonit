import classes from "./FutureGamesCard.module.css";
import svgList from "@/styles/svgList";
import { useState } from "react";
import SportsSnippetItem from "./SportSnippetItem";
import SportLeagueDemo from "./SportLeagueDemo";
import { useAppDispatch } from "../../../store/hooks";
import { futureGamesActions } from "@/store/generalStore";

export const sportsSnippetObj: { name: string; id: string }[] = [
  { name: "Football", id: "soccer_epl" },
  { name: "Basketball", id: "basketball_nba" },
  { name: "A. Football", id: "americanfootball_nfl" },
  { name: "Boxing", id: "boxing_boxing" },
  { name: "MMA", id: "mma_mixed_martial_art" },
  { name: "Cricket", id: "cricket_icc_world_cup" },
];

const FutureGamesCardComponent: React.FC = () => {
  const [section, setSection] = useState<string>("Football");
  const dispatch = useAppDispatch();
  const [dataIsFetching, setDataIsFetching] = useState<boolean>(false);
  const [isError, setIsError] = useState<{
    state: boolean;
    message: string;
  }>({ state: false, message: "nil" });

  const updateSection = (name: string) => setSection(name);

  const setClassActive = (path: string): string => {
    if (section === path) {
      return classes.active;
    } else {
      return "";
    }
  };

  const updateLeagueData: () => void = async (
    parameter: string = "soccer_epl"
  ) => {
    //  const key: string | undefined = process.env.MY_API_KEY;

    //  console.log(key);
    console.log(parameter)

    try {
      setDataIsFetching(true);

      const initialCall = await fetch(
        `https://api.the-odds-api.com/v4/sports/${parameter}/odds/?apiKey=b8a8bf18424792bc0d72c5843ee3eb01&regions=us&markets=h2h,spreads,totals&bookmakers=mybookieag&oddsFormat=decimal`
      );
      const dataGotten = await initialCall.json();

      console.log(dataGotten);

      const gameItemObject = dataGotten.map((el: any) => {
        return {
          id: el.id,
          home_team: el.home_team,
          away_team: el.away_team,
          time: el.commence_time,
          odds: {
            h2h: {
              away_team_win:
                el.bookmakers.length > 0
                  ? el.bookmakers[0].markets[0].outcomes[1].price
                  : 0.0,
              home_team_win:
                el.bookmakers.length > 0
                  ? el.bookmakers[0].markets[0].outcomes[0].price
                  : 0.0,
              draw:
                el.bookmakers.length > 0 &&
                el.bookmakers[0].markets[0].outcomes.length > 2
                  ? el.bookmakers[0].markets[0].outcomes[2].price
                  : 0.0,
            },
            totals: {
              point:
                el.bookmakers.length > 0
                  ? el.bookmakers[0].markets[1].outcomes[0].point
                  : 0.0,
              over:
                el.bookmakers.length > 0
                  ? el.bookmakers[0].markets[1].outcomes[0].price
                  : 0.0,
              under:
                el.bookmakers.length > 0
                  ? el.bookmakers[0].markets[1].outcomes[1].price
                  : 0.0,
            },
          },
        };
      });

      dispatch(futureGamesActions.updateLeagueData(gameItemObject));
      setIsError({ state: false, message: "yes" });
      setDataIsFetching(false);
    } catch (err) {
      console.log("vdjfdnigj" + err);
      setIsError({
        state: true,
        message: "We could not get your games for some reason. sorry :)",
      });
      setDataIsFetching(false);
    }
  };

  return (
    <section className={classes.future_container}>
      <div className={classes.future_highlights}>
        <span></span>
        <h1>Highlights</h1>
        <a  href='' className={classes.future_refresh}>
          <div className={classes.refresh_svg}>
            {svgList.refresh("#353a45")}
          </div>
          Refresh
        </a>
      </div>
      <div>
        <ul className={classes.sports}>
          {sportsSnippetObj.map((item) => (
            <SportsSnippetItem
              nameObject={item}
              updateLeagueData={updateLeagueData}
              updateSection={updateSection}
              sportClass={setClassActive}
              key={Math.random() * 100000}
            />
          ))}
        </ul>
        <SportLeagueDemo
          activeSport={section}
          dataIsFetching={dataIsFetching}
          isError={isError}
          updateLeagueData={updateLeagueData}
        />
      </div>
    </section>
  );
};

export default FutureGamesCardComponent;
