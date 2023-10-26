import classes from "./Header.module.css";
import SignInForm from "./SignInForm";
import { useRouter } from "next/router";
import Link from "next/link";


const HeaderComponent: React.FC = () => {
  const router = useRouter();

  console.log(router.pathname);

  const classForLink = (route: string) => {
    if (router.pathname === route) {
      return classes.active;
    } else {
      return "";
    }
  };
  return (
    <section className={classes.header_container}>
      <div className={classes.initial_section}>
        <Link href="/">
         <h1>BetOnIt</h1>
         <span></span>
        </Link>
        <SignInForm />
      </div>
      <ul className={classes.bet_categories}>
        <li className={classForLink("/")}>
          <Link href="/">Home</Link>
        </li>
        <li className={classForLink("/football")}>
          <Link href="/">Football</Link>
        </li>
        <li className={classForLink("/basketball")}>
          <Link href="/">BasketBall</Link>
        </li>
        <li className={classForLink("/tennis")}>
          <Link href="/">Tennis</Link>
        </li>
        <li className={classForLink("/cricket")}>
          <Link href="/">Cricket</Link>
        </li>
        <li className={classForLink("/american-football")}>
          <Link href="/">American Football</Link>
        </li>
        <li className={classForLink("/baseball")}>
          <Link href="/">Baseball</Link>
        </li>
        <li className={classForLink("/rugby")}>
          <Link href="/">Rugby</Link>
        </li>
        <li className={classForLink("/golf")}>
          <Link href="/">Golf</Link>
        </li>
      </ul>
    </section>
  );
};

export default HeaderComponent;
