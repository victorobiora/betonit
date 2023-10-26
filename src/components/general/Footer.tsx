import svgList from "@/styles/svgList";
import classes from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = (props) => {
  return (
    <section className={classes.container}>
      <ul className={classes.list1}>
        <li>
          <div className={classes.site_icon}>
            <div className={classes.site_icon_name}>
              <h2>BetOnIt</h2>
              <span></span>
            </div>
            <div className={classes.nigeria_pic}>
              <Image
                alt="nigeria-pic"
                src="http://s.sporty.net/global/main/modules/main/desktop/common/core/image/flagNigeria.97e41cea57.png"
                width={200}
                height={200}
              />
            </div>
          </div>
          <ul className={classes.club_icons}>
            <li>Official Sports Betting Partner</li>
            <li>{svgList.manunited}</li>
            <li>{svgList.barca}</li>
          </ul>
        </li>
        <li className={classes.lists}>
          <h5>BetOnIt Nigeria</h5>
          <ul>
            <li>
              <span>&gt;</span>
              <Link href=""> About Us</Link>
            </li>
            <li>
              <span>&gt;</span>
              <Link href=""> Terms and Conditions</Link>
            </li>
            <li>
              <span>&gt;</span>
              <Link href=""> Responsible Gambling</Link>
            </li>
            <li>
              <span>&gt;</span>
              <Link href=""> Privacy Policy</Link>
            </li>
            <li>
              <span>&gt;</span>
              <Link href=""> BetOnIt Group</Link>
            </li>
          </ul>
        </li>
        <li className={classes.lists}>
          <h5>How to Play</h5>
          <ul>
            <li>
              <span>&gt;</span>
              <Link href=""> FAQ</Link>
            </li>
            <li>
              <span>&gt;</span>
              <Link href=""> Sports</Link>
            </li>
            <li>
              <span>&gt;</span>
              <Link href=""> Live Betting</Link>
            </li>
            <li>
              <span>&gt;</span>
              <Link href=""> Games</Link>
            </li>
            <li>
              <span>&gt;</span>
              <Link href=""> JackPot</Link>
            </li>
            <li>
              <span>&gt;</span>
              <Link href=""> Others</Link>
            </li>
          </ul>
        </li>
        <li className={classes.lists}>
          <h5>Connect with us</h5>
          <ul>
            <li>Telephone: +23466688843 | 08145893560</li>
            <li>Email: victorobioratech@gmail.com</li>
            <li className={classes.icon_socials}>
              <Link href="">{svgList.facebook}</Link>
              <Link href="">{svgList.twitter}</Link>
              <Link href="">{svgList.instagram}</Link>
              <Link href="">{svgList.telegram}</Link>
              <Link href="">{svgList.youtube}</Link>
            </li>
          </ul>
        </li>
      </ul>
      <ul className={classes.list2}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ul className={classes.list3}></ul>
    </section>
  );
};

export default Footer;
