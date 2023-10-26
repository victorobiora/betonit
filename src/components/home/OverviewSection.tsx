import classes from "./OverViewSection.module.css";
import Link from "next/link";

const OverViewSection: React.FC = () => {
  return (
    <section className={classes.overview_container}>
      <ul className={classes.ticket_lists}>
        <li>
          <h2>Popular</h2>
        </li>
        <li>
          <Link href="">
            Today's Football <h1> {` > `}</h1>
          </Link>
        </li>
        <li>
          <Link href="">
            English Premier League
            <h1> {` > `}</h1>
          </Link>
        </li>
        <li>
          <Link href="">
            Bundesliga <h1> {` > `}</h1>
          </Link>
        </li>
        <li>
          <Link href="">
            La Liga <h1> {` > `}</h1>
          </Link>
        </li>
        <li>
          <Link href="">
            Serie A <h1> {` > `}</h1>
          </Link>
        </li>
      </ul>
      <div className={classes.overview_container_center_image}>
        <img
          src="https://www.sportsadda.com/static-assets/waf-images/aa/42/35/16-9/Yze0Zg0Uz2.jpg?v=1.5&w=420%20420w"
          alt="betonit_center"
        />
      </div>
      <div className={classes.instant_reg}>
        <div>
          <h3>Instant Registration</h3>
        </div>
        <div>
          <p>Make a Deposit and Start Betting </p>
        </div>
        <form>
          <div>
            <span>+234</span>
            <input type="text" placeholder="Mobile Number"/>
          </div>
          <button> Register </button>
        </form>
      </div>
    </section>
  );
};

export default OverViewSection;
