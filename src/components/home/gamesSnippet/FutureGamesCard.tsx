import classes from "./FutureGamesCard.module.css";
import svgList from "@/styles/svgList";
import { useState } from "react";
import SportsSnippetItem from "./SportSnippetItem";
import SportLeagueDemo from "./SportLeagueDemo";

const FutureGamesCardComponent: React.FC = () => {
    const [section, setSection] = useState<string>('Football')

    const updateSection = (name:string) => setSection(name);

    const setClassActive = (path:string) : string => {
        if (section === path) {
            return classes.active;
          } else {
            return "";
          }
        };
      

  const sportsSnippetObj: string[] = [
    "Football",
    "Basketball",
    "A. Football",
    "Boxing",
    "Ice Hockey",
    "Cricket",
  ];


  return (
    <section className={classes.future_container}>
      <div className={classes.future_highlights}>
        <span></span>
        <h1>Highlights</h1>
        <div className={classes.future_refresh}>
          <div className={classes.refresh_svg}>{svgList.refresh("#353a45")}</div>
          Refresh
        </div>
      </div>
      <div>
        <ul className={classes.sports}>
          {sportsSnippetObj.map((item: string ) => (
            <SportsSnippetItem  name={item} updateSection={updateSection} sportClass = {setClassActive} key={Math.random()* 100000} />
          ))}
        </ul>
        <SportLeagueDemo />
      </div>
    </section>
  );
};

export default FutureGamesCardComponent;
