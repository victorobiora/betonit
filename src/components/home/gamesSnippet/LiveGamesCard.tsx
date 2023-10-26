import classes from "./LiveGamesCard.module.css";
import svgList from "@/styles/svgList";
import futureStyles from "./FutureGamesCard.module.css";
import { useState } from "react";
import SportsSnippetItem from "./SportSnippetItem";

import SubGameLiveComponent from "./SubLiveGameComponent";

const LiveGamesCard: React.FC = () => {
  const [section, setSection] = useState<string>("Football");

  const updateSection = (name: string) => setSection(name);

  const setClassActive = (path: string): string => {
    if (section === path) {
      return classes.active;
    } else {
      return "";
    }
  };

  const sportsSnippetObj: string[] = [
    "Football",
    "Basketball",
    "Tennis",
    "Table Tennis",
    "Hockey",
    "Cricket",
  ];

  return (
    <section className={classes.live_container}>
      <div className={futureStyles.future_highlights}>
        <span></span>
        <h1
          style={{
            color: "white",

          }}
        >
          Live Betting: Demo Games
        </h1>
        <div className={classes.future_refresh}>
          <div className={futureStyles.refresh_svg}>
            {svgList.refresh("white")}
          </div>
          Refresh
        </div>
      </div>
      <ul className={classes.sports}>
        {sportsSnippetObj.map((item: string) => (
          <SportsSnippetItem
            name={item}
            updateSection={updateSection}
            sportClass={setClassActive}
            key={Math.random() * 100000}
          />
        ))}
      </ul>
      <ul>
        <SubGameLiveComponent/>
        <SubGameLiveComponent/>
      </ul>
      <button className={classes.viewAll_button}>View All
      <span> {'>'}</span></button>
    </section>
  );
};

export default LiveGamesCard;
